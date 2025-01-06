import { Button } from '@/components/ui/button'
import { ArrowRight, BarChart3, Gamepad, Globe2, Shield, Users, Zap } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative isolate pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Game Topluluğunuzu Modern Şekilde Yönetin
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Discord entegrasyonu, etkinlik yönetimi ve detaylı analizler ile guild yönetimini kolaylaştırın.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/register">
                <Button size="lg" className="gap-2">
                  Ücretsiz Başla <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" size="lg">
                  Özellikler
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features" 
        className="py-24 sm:py-32 bg-muted/50 w-full scroll-mt-16"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Güçlü Özellikler
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Guild Yönetiminde İhtiyacınız Olan Her Şey
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Modern ve kullanıcı dostu arayüz ile guild yönetimini kolaylaştırın.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className="relative p-6 rounded-lg border bg-card"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold">
                  <feature.icon 
                    className="h-6 w-6 text-primary" 
                    aria-hidden="true" 
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 text-muted-foreground">
                  {feature.description}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Nasıl Çalışır?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              3 Basit Adımda Başlayın
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
              {steps.map((step, index) => (
                <div key={step.name} className="relative pl-16">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <span className="text-lg font-semibold text-primary-foreground">{index + 1}</span>
                  </div>
                  <div className="mt-2">
                    <h3 className="text-lg font-semibold">{step.name}</h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Guild'inizi Hemen Modernleştirin
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Ücretsiz başlayın, guild'iniz büyüdükçe planınızı güncelleyin.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/register">
                <Button size="lg">Hemen Başla</Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg">Fiyatlandırma</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    name: 'Discord Entegrasyonu',
    description: 'Discord sunucunuzla tam entegrasyon. Rol senkronizasyonu ve otomatik bildirimler.',
    icon: Globe2
  },
  {
    name: 'Etkinlik Yönetimi',
    description: 'Raid ve etkinlikleri planlayın, katılımı takip edin ve otomatik hatırlatmalar alın.',
    icon: Users
  },
  {
    name: 'Detaylı Analizler',
    description: 'Guild aktivitesi, üye performansı ve katılım oranlarını takip edin.',
    icon: BarChart3
  },
  {
    name: 'Çoklu Oyun Desteği',
    description: 'Farklı oyunlardaki guildlerinizi tek platformdan yönetin.',
    icon: Gamepad
  },
  {
    name: 'Rol Yönetimi',
    description: 'Gelişmiş rol ve yetki sistemi ile guild hiyerarşinizi kolayca yönetin.',
    icon: Shield
  },
  {
    name: 'Hızlı ve Modern',
    description: 'Kullanıcı dostu arayüz ve hızlı performans ile vakit kaybetmeyin.',
    icon: Zap
  }
]

const steps = [
  {
    name: 'Hesap Oluşturun',
    description: 'Ücretsiz hesabınızı oluşturun ve guildinizi platforma ekleyin.'
  },
  {
    name: 'Discordu Bağlayın',
    description: 'Discord sunucunuzu bağlayın ve otomatik rol senkronizasyonunu başlatın.'
  },
  {
    name: 'Yönetmeye Başlayın',
    description: 'Etkinlikler oluşturun, üyeleri yönetin ve analizleri takip edin.'
  }
]