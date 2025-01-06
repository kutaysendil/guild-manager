import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const tiers = [
  {
    name: 'Ücretsiz',
    id: 'tier-free',
    href: '/register',
    price: '0',
    description: 'Küçük topluluklar için temel özellikler',
    features: [
      'Tek guild yönetimi',
      'Temel üye yönetimi',
      'Discord entegrasyonu',
      'Etkinlik planlama',
      '50 üye limiti'
    ],
    mostPopular: false,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '/register?plan=pro',
    price: '99',
    description: 'Büyüyen topluluklar için gelişmiş özellikler',
    features: [
      'Sınırsız guild yönetimi',
      'Gelişmiş üye yönetimi',
      'Tam Discord entegrasyonu',
      'Gelişmiş etkinlik planlama',
      'Detaylı analizler',
      '500 üye limiti',
      'Öncelikli destek'
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '/contact',
    price: 'Özel',
    description: 'Büyük topluluklar için özel çözümler',
    features: [
      'Sınırsız guild ve üye',
      'Özel API erişimi',
      'Özel entegrasyonlar',
      'SLA garantisi',
      '7/24 öncelikli destek',
      'Özel eğitim ve kurulum',
      'Gelişmiş güvenlik özellikleri'
    ],
    mostPopular: false,
  },
]

export default function PricingPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Her Topluluk İçin Uygun Fiyatlandırma
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Guildinize en uygun planı seçin. İstediğiniz zaman değiştirebilirsiniz.
          </p>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 ring-1 ring-muted xl:p-10 ${
                tier.mostPopular ? 'bg-primary text-primary-foreground ring-primary' : 'ring-muted bg-card'
              }`}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h2 className="text-lg font-semibold leading-8">{tier.name}</h2>
                {tier.mostPopular && (
                  <span className="rounded-full bg-primary-foreground px-2.5 py-1 text-xs font-semibold text-primary">
                    En Popüler
                  </span>
                )}
              </div>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                {tier.price !== 'Özel' && (
                  <span className="text-sm font-semibold">₺/ay</span>
                )}
              </p>
              <Link href={tier.href}>
                <Button
                  className="mt-6 w-full"
                  variant={tier.mostPopular ? 'secondary' : 'default'}
                >
                  {tier.price === 'Özel' ? 'İletişime Geç' : 'Başla'}
                </Button>
              </Link>
              <ul className="mt-8 space-y-3 text-sm leading-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}