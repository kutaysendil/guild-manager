'use client';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { createBrowserClient } from '@supabase/ssr';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  Users,
  X
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

const sidebarItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard
  },
  {
    title: 'Guildler',
    href: '/dashboard/guild',
    icon: Users
  },
  {
    title: 'Ayarlar',
    href: '/dashboard/settings',
    icon: Settings
  }
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const pathname = usePathname()
const router = useRouter()

  const logOut  =  async () => {
    try {
        const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      )

      const { error } = await supabase.auth.signOut()


      if (error) throw error

      toast.success('Çıkış başarılı!')
      router.refresh()
      router.push('/')
    } catch (error: any) {
      toast.error('Çıkış yapılamadı!', {
        description: error?.message || 'beklenmedik bir hata oluştu.'
      })
      console.error('Logout error:', error)
    } finally {
     }
  }
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isSidebarOpen ? 0 : -300 }}
        className={`fixed left-0 z-50 h-full w-64 bg-card border-r`}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/dashboard" className="text-xl font-bold">
            GuildManager
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <Separator />

        <nav className="space-y-1 p-4">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-accent'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </motion.div>
              </Link>
            )
          })}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <div className={`${isSidebarOpen ? 'lg:pl-64' : ''}`}>
        {/* Header */}
        <header className="sticky top-0 z-40 h-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="flex h-full items-center gap-4 px-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(true)}
              className={isSidebarOpen ? 'lg:hidden' : ''}
            >
              <Menu className="h-5 w-5" />
            </Button>

            <div className="ml-auto flex items-center space-x-4">
              <ThemeSwitcher />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => logOut()}
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="min-h-[calc(100vh-4rem)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="container mx-auto p-6"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  )
}