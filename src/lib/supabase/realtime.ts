'use client'

import { createBrowserClient } from '@supabase/ssr'
import { useEffect } from 'react'

export function useRealtimeGuilds(guildId: string, onUpdate: (payload: any) => void) {
  useEffect(() => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const channel = supabase
      .channel(`guild:${guildId}`)
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table: 'guilds',
          filter: `id=eq.${guildId}`
        }, 
        (payload) => onUpdate(payload)
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [guildId, onUpdate])
}