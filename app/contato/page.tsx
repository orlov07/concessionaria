'use client'

import { SectionHeader } from '@/components/ui/SectionHeader'
import { CONSTANTS, WHATSAPP_URL } from '@/data/constants'
import { MessageCircle, MapPin, Clock } from 'lucide-react'

function InstagramGlyph({ className = '' }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookGlyph({ className = '' }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const contactItems = [
  { icon: MessageCircle, label: 'WhatsApp', value: CONSTANTS.whatsapp, href: `https://wa.me/${CONSTANTS.whatsapp}` },
  { icon: MapPin, label: 'Endereço', value: CONSTANTS.address },
  { icon: InstagramGlyph, label: 'Instagram', value: '@fenix_veiculos_laranjal', href: CONSTANTS.instagram },
  { icon: Clock, label: 'Horário', value: CONSTANTS.hours },
]

export default function ContatoPage() {
  return (
    <section className="border-t border-[#1f1f1f] bg-[#0d0d0d] px-6 py-16 md:px-12 md:py-20 lg:px-20 xl:px-32">
      <div className="max-w-7xl mx-auto">
        <nav className="mb-8 text-xs tracking-widest text-[#666] uppercase">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span className="text-[#C9A227]">Contato</span>
        </nav>

        <SectionHeader title="Fale com a Gente" highlight="Gente" subtitle="Estamos prontos para te ajudar a encontrar o carro perfeito." />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <div className="mb-5 flex h-[280px] flex-col items-center justify-center gap-2 rounded border border-[#2a2a2a] bg-[#141414]">
              {CONSTANTS.mapsEmbedUrl ? (
                <iframe src={CONSTANTS.mapsEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
              ) : (
                <>
                  <MapPin size={32} className="text-[#C9A227]" />
                  <div className="text-sm text-[#666]">Laranjal, MG</div>
                  <div className="text-xs text-[#444]">Mapa em breve</div>
                </>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="rounded border border-[#1f1f1f] bg-[#141414] p-4">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded border border-[rgba(201,162,39,0.3)] bg-[rgba(201,162,39,0.1)]">
                    <Icon size={18} className="text-[#C9A227]" />
                  </div>
                  <div className="mb-1 text-[10px] tracking-[2px] text-[#555] uppercase">{label}</div>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#C9A227] no-underline hover:text-[#E8C84A]">
                      {value}
                    </a>
                  ) : (
                    <div className="text-sm font-semibold text-[#C9A227]">{value}</div>
                  )}
                </div>
              ))}
              <div className="rounded border border-[#1f1f1f] bg-[#141414] p-4">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded border border-[rgba(201,162,39,0.3)] bg-[rgba(201,162,39,0.1)]">
                  <FacebookGlyph className="text-[#C9A227]" />
                </div>
                <div className="mb-1 text-[10px] tracking-[2px] text-[#555] uppercase">Facebook</div>
                <a href={CONSTANTS.facebook} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#C9A227] no-underline hover:text-[#E8C84A]">
                  Fênix Multimarcas Laranjal
                </a>
              </div>
            </div>
          </div>

          <div className="rounded border border-[#1f1f1f] bg-[#141414] p-8">
            <div className="mb-5 text-xs tracking-[3px] text-[#C9A227] uppercase">ENVIAR MENSAGEM</div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const text = `Olá! Meu nome é ${formData.get('name')}, fone: ${formData.get('phone')}.\n\nMensagem: ${formData.get('message')}`
                window.open(WHATSAPP_URL(text), '_blank')
              }}
              className="space-y-3"
            >
              <input
                name="name"
                required
                placeholder="Seu nome"
                className="block w-full rounded-sm border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#C9A227]"
              />
              <input
                name="phone"
                required
                placeholder="Seu telefone / WhatsApp"
                className="block w-full rounded-sm border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#C9A227]"
              />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Qual veículo você tem interesse?"
                className="block w-full rounded-sm border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#C9A227]"
              />
              <button
                type="submit"
                className="w-full rounded-sm bg-[#C9A227] px-4 py-3 text-sm font-extrabold tracking-[2px] text-black uppercase transition-colors hover:bg-[#E8C84A]"
              >
                ENVIAR VIA WHATSAPP
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
