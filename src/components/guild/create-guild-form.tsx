// src/components/guild/create-guild-form.tsx
'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

const formSchema = z.object({
  name: z.string().min(3, 'Guild adı en az 3 karakter olmalı'),
  description: z.string().min(10, 'Açıklama en az 10 karakter olmalı'),
  discord_id: z.string().optional(),
})

export function CreateGuildForm() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      discord_id: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true)
		console.log(values)
		toast.success('Guild başarıyla oluşturuldu!')
      router.push('/dashboard/guild')
    } catch (error: any) {
      toast.error('Hata!', {
        description: error?.message || 'Guild oluşturulamadı.'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Guild Adı</FormLabel>
                <FormControl>
                  <Input placeholder="Guild adını girin" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Açıklama</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Guild hakkında kısa bir açıklama" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="discord_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Discord Sunucu ID (Opsiyonel)</FormLabel>
                <FormControl>
                  <Input placeholder="Discord sunucu ID" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Guild Oluşturuluyor
              </>
            ) : (
              'Guild Oluştur'
            )}
          </Button>
        </form>
      </Form>
    </motion.div>
  )
}