// src/middleware.ts
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// Public ve auth routes
const AUTH_ROUTES = ['/login', '/register', '/auth/callback']
const PROTECTED_ROUTES = ['/dashboard'] // Koruma gerektiren route'lar

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll().map((cookie) => ({
            name: cookie.name,
            value: cookie.value,
          }))
        },
        setAll(cookies) {
          cookies.forEach(cookie => {
            response.cookies.set(cookie.name, cookie.value, cookie.options)
          })
        }
      }
    }
  )

  const { data: { session } } = await supabase.auth.getSession()
  const path = request.nextUrl.pathname

  // Sadece giriş yapmış kullanıcıların auth sayfalarına erişimini engelle
  if (session && AUTH_ROUTES.includes(path)) {
    if (path !== '/auth/callback') {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  // Giriş yapmamış kullanıcıların protected route'lara erişimini engelle
  if (!session && PROTECTED_ROUTES.some(route => path.startsWith(route))) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}