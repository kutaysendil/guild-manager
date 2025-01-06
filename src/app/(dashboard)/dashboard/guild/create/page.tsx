
// src/app/(dashboard)/guild/create/page.tsx
import { CreateGuildForm } from '@/components/guild/create-guild-form'

export default function CreateGuildPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Yeni Guild</h2>
        <p className="text-muted-foreground">
          Guild bilgilerini girerek yeni bir guild oluşturun
        </p>
      </div>
      <CreateGuildForm />
    </div>
  )
}