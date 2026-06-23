import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageCircle, MapPin, Clock } from 'lucide-react'
import { ShareButton } from '@/components/ui/ShareButton'
import { vehicles } from '@/data/vehicles'
import { ImageGallery } from '@/components/ui/ImageGallery'
import { WHATSAPP_URL, CONSTANTS } from '@/data/constants'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const vehicle = vehicles.find((v) => v.slug === slug)
  if (!vehicle) return {}
  return {
    title: `${vehicle.brand} ${vehicle.model} ${vehicle.year}`,
    description: `${vehicle.brand} ${vehicle.model} ${vehicle.year}, ${vehicle.km.toLocaleString('pt-BR')} km, R$ ${vehicle.price.toLocaleString('pt-BR')}. Disponível na Fênix Veículos Laranjal.`,
  }
}

export default async function VehicleDetailPage({ params }: Props) {
  const { slug } = await params
  const vehicle = vehicles.find((v) => v.slug === slug)
  if (!vehicle) notFound()

  const waMsg = `Olá! Tenho interesse no ${vehicle.brand} ${vehicle.model} ${vehicle.year} por R$${vehicle.price.toLocaleString('pt-BR')}. Vi no site!`

  const specs = [
    { label: 'Ano', value: vehicle.year },
    { label: 'Quilometragem', value: `${vehicle.km.toLocaleString('pt-BR')} km` },
    { label: 'Câmbio', value: vehicle.transmission },
    { label: 'Combustível', value: vehicle.fuel },
    { label: 'Cor', value: vehicle.color },
    { label: 'Portas', value: vehicle.doors },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-[#666] text-xs uppercase tracking-widest mb-8 flex flex-wrap gap-2">
        <Link href="/" className="hover:text-[#C9A227]">Home</Link>
        <span>/</span>
        <Link href="/estoque" className="hover:text-[#C9A227]">Estoque</Link>
        <span>/</span>
        <span className="text-[#C9A227]">{vehicle.brand} {vehicle.model}</span>
      </nav>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Left — gallery + details */}
        <div className="lg:col-span-3">
          <ImageGallery images={vehicle.images} alt={`${vehicle.brand} ${vehicle.model}`} />

          <div className="mt-8">
            {vehicle.badge && (
              <span className="inline-block text-xs font-bold px-2 py-1 bg-[#C9A227] text-black tracking-widest mb-3">
                {vehicle.badge}
              </span>
            )}
            <p className="text-[#666] text-xs uppercase tracking-widest mb-1">{vehicle.brand}</p>
            <h1 className="font-oswald text-4xl md:text-5xl text-white uppercase mb-2">
              {vehicle.model} {vehicle.year}
            </h1>
            <p className="font-bebas text-4xl text-[#C9A227] tracking-wide mb-8">
              R$ {vehicle.price.toLocaleString('pt-BR')}
            </p>

            {/* Specs */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
              {specs.map(({ label, value }) => (
                <div key={label} className="bg-[#111] border border-[#1f1f1f] p-4">
                  <p className="text-[#555] text-[10px] uppercase tracking-widest mb-1">{label}</p>
                  <p className="text-white text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            {vehicle.description && (
              <div className="mb-8">
                <h2 className="font-oswald text-white text-lg uppercase mb-3 border-b border-[#1f1f1f] pb-2">Descrição</h2>
                <p className="text-[#AAA] text-sm leading-relaxed">{vehicle.description}</p>
              </div>
            )}

            {/* Features */}
            {vehicle.features.length > 0 && (
              <div>
                <h2 className="font-oswald text-white text-lg uppercase mb-3 border-b border-[#1f1f1f] pb-2">Opcionais</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {vehicle.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-[#AAA] text-sm">
                      <span className="w-4 h-4 border border-[#C9A227] flex items-center justify-center flex-shrink-0">
                        <span className="text-[#C9A227] text-xs">✓</span>
                      </span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right — sticky CTA */}
        <div className="lg:col-span-2">
          <div className="sticky top-20 flex flex-col gap-4">
            {/* CTA Card */}
            <div className="border border-[#C9A227]/40 bg-[#111] p-6">
              <p className="text-[#888] text-xs uppercase tracking-widest mb-1">Preço</p>
              <p className="font-bebas text-5xl text-[#C9A227] tracking-wide mb-6">
                R$ {vehicle.price.toLocaleString('pt-BR')}
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={WHATSAPP_URL(waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#C9A227] text-black font-bold py-4 uppercase tracking-wide text-sm hover:bg-[#E8C84A] transition-colors"
                >
                  <MessageCircle size={16} /> Tenho interesse
                </a>
                <a
                  href={WHATSAPP_URL(`Olá! Gostaria de simular o financiamento do ${vehicle.brand} ${vehicle.model} ${vehicle.year} (R$${vehicle.price.toLocaleString('pt-BR')}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-[#C9A227] text-[#C9A227] font-bold py-3.5 uppercase tracking-wide text-sm hover:bg-[#C9A227] hover:text-black transition-all"
                >
                  Simular financiamento
                </a>
                <ShareButton />
              </div>
            </div>

            {/* Dealer card */}
            <div className="bg-[#111] border border-[#1f1f1f] p-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🦅</span>
                <div>
                  <p className="font-oswald text-white uppercase tracking-wide">Fênix Veículos</p>
                  <p className="text-[#C9A227] text-xs tracking-widest">Laranjal</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-[#888] text-xs">
                <p className="flex items-center gap-2"><MapPin size={12} /> {CONSTANTS.address}</p>
                <p className="flex items-center gap-2"><Clock size={12} /> {CONSTANTS.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
