// src/app/(dashboard)/dashboard/page.tsx
"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Activity, Calendar, Sword, Users } from "lucide-react"
 
// export const metadata: Metadata = {
//   title: 'Dashboard - Guild Manager',
//   description: 'Guild yönetim paneli',
// }

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Guildlerinizin genel durumunu görüntüleyin
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {/* Özet Kartları */}
        <motion.div variants={item}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Toplam Guild
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                +1 bu ay
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Aktif Etkinlikler
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                Bu hafta 5 etkinlik planlandı
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Toplam Üye
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245</div>
              <p className="text-xs text-muted-foreground">
                %85 aktif üye oranı
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Savaş Puanı
              </CardTitle>
              <Sword className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">
                +23% geçen haftaya göre
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Guild Listesi */}
      <motion.div 
        variants={item}
        initial="hidden"
        animate="show"
        className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <Card>
          <CardHeader>
            <CardTitle>Active Guilds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Guild listesi buraya gelecek */}
              <p className="text-muted-foreground">Henüz guild eklenmemiş</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}