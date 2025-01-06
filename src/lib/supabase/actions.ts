'use server'

import type { CreateGuildInput, UpdateGuildInput } from '@/types'
import { createServerClient } from '@supabase/ssr'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

// Server-side Supabase client
function getClient() {
  const cookieStore = cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
       
        getAll() {
          return cookieStore.getAll().map(cookie => ({ 
            name: cookie.name, 
            value: cookie.value
          }))
        },
      
        setAll(cookies) {
          cookies.forEach(cookie => {
            cookieStore.set(cookie.name, cookie.value, cookie.options)
          })
        }
      },
    }
  )
}

// Guild Actions
export async function createGuild(input: CreateGuildInput) {
  const supabase = getClient()
  
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    throw new Error('Unauthorized')
  }

  const { data, error } = await supabase
    .from('guilds')
    .insert({
      ...input,
      owner_id: session.user.id
    })
    .select()
    .single()

  if (error) throw error

  revalidatePath('/guilds')
  return data
}

export async function updateGuild(id: string, input: UpdateGuildInput) {
  const supabase = getClient()
  
  const { data, error } = await supabase
    .from('guilds')
    .update(input)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error

  revalidatePath('/guilds')
  revalidatePath(`/guilds/${id}`)
  return data
}

// Game Actions
export async function getGames() {
  const supabase = getClient()
  const { data, error } = await supabase
    .from('games')
    .select()
    .order('name')

  if (error) throw error
  return data
}

// Guild-Game Actions
export async function addGameToGuild(guildId: string, gameId: string, serverName?: string, guildNameInGame?: string) {
  const supabase = getClient()
  
  const { data, error } = await supabase
    .from('guild_games')
    .insert({
      guild_id: guildId,
      game_id: gameId,
      server_name: serverName,
      guild_name_in_game: guildNameInGame
    })
    .select()
    .single()

  if (error) throw error

  revalidatePath(`/guilds/${guildId}`)
  return data
}