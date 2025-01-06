
// src/app/(dashboard)/guild/page.tsx
"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Link from 'next/link';



export default function GuildPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Guildler</h2>
          <p className="text-muted-foreground">
            Guildlerinizi yönetin ve yeni guild ekleyin
          </p>
        </div>
        <Link href="/dashboard/guild/create">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Yeni Guild
          </Button>
        </Link>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {/* Guild listesi buraya gelecek, şimdilik empty state gösterelim */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Henüz Guild Yok
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Yeni bir guild oluşturarak başlayın
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
