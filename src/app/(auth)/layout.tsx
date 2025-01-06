// src/app/(auth)/layout.tsx
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sol taraf - Auth formu */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <Link 
            href="/" 
            className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Ana Sayfaya Dön
          </Link>
          {children}
        </div>
      </div>
      
      {/* Sağ taraf - Feature showcase */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 bg-muted">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="max-w-md text-center">
              <h2 className="text-2xl font-bold">Guild Yönetimini Modernleştirin</h2>
              <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                <li className="flex items-center justify-center">
                  <span className="ml-3">Discord Entegrasyonu</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="ml-3">Etkinlik Yönetimi</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="ml-3">Detaylı Analizler</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}