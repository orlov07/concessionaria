'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, CreditCard, CheckCircle2, Trophy, Star, MapPin, Clock, MessageCircle } from 'lucide-react'
import { VehicleCard } from '@/components/ui/VehicleCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FilterBar } from '@/components/ui/FilterBar'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { GoldButton } from '@/components/ui/GoldButton'
import { vehicles } from '@/data/vehicles'
import { CONSTANTS, WHATSAPP_URL } from '@/data/constants'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45 },
}

const stats = [
  { value: '22,5K', label: 'Seguidores no Instagram' },
  { value: '5K+', label: 'Publicações' },
  { value: '0', label: 'Entrada*' },
  { value: '100%', label: 'Digital' },
]

const features = [
  { icon: Trophy, title: 'Mais de 5000 publicações', desc: 'Transparência total no nosso Instagram' },
  { icon: CreditCard, title: 'Financiamento facilitado', desc: 'Aprovação rápida pelos melhores bancos' },
  { icon: CheckCircle2, title: 'Sem entrada', desc: 'Condições especiais para você sair dirigindo hoje' },
  { icon: Star, title: '22,5K seguidores', desc: 'A loja mais indicada da região' },
]

const banks = ['Santander', 'Itaú', 'PAN', 'BV', 'Bradesco', 'Caixa Econômica']

const testimonials = [
  { quote: 'Comprei meu carro sem complicação nenhuma. Financiamento aprovado em menos de 1 hora!', name: 'Marcos S.' },
  { quote: 'Melhor atendimento que já recebi numa loja de carros. Super recomendo a Fênix!', name: 'Ana Paula M.' },
  { quote: 'Saí de carro zero km sem entrada! Equipe muito atenciosa e honesta.', name: 'Roberto L.' },
]

const contactCards = [
  { icon: MessageCircle, label: 'WhatsApp', value: CONSTANTS.whatsapp },
  { icon: MapPin, label: 'Endereço', value: CONSTANTS.address },
  { icon: InstagramGlyph, label: 'Instagram', value: '@fenix_veiculos_laranjal' },
  { icon: Clock, label: 'Horário', value: CONSTANTS.hours },
]

function InstagramGlyph({ className = '' }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function HomePage() {
  const featured = vehicles.slice(0, 6)

  return (
    <>
      <section
        className="relative min-h-screen overflow-hidden px-6 pb-16 pt-[120px] md:px-12 lg:px-20 xl:px-32"
        style={{
          background: `
            radial-gradient(ellipse at 80% 15%, rgba(201,162,39,0.13) 0%, transparent 50%),
            radial-gradient(ellipse at 15% 85%, rgba(201,162,39,0.06) 0%, transparent 45%),
            #0a0a0a
          `,
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute right-0 top-0 h-full w-1/2 opacity-[0.04]" viewBox="0 0 700 900" preserveAspectRatio="none" fill="none">
            <line x1="700" y1="0" x2="100" y2="900" stroke="#C9A227" strokeWidth="2" />
            <line x1="640" y1="0" x2="40" y2="900" stroke="#C9A227" strokeWidth="1" />
            <line x1="760" y1="0" x2="200" y2="900" stroke="#C9A227" strokeWidth="1" />
          </svg>
        </div>

        <div className="mx-auto flex min-h-[calc(100vh-120px)] max-w-7xl flex-col justify-end">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-[900px]">
            <div className="mb-5">
              <span className="inline-block rounded-sm border border-[#C9A227] bg-[rgba(201,162,39,0.08)] px-[18px] py-[6px] text-[11px] font-bold uppercase tracking-[4px] text-[#C9A227]">
                MULTIMARCAS · LARANJAL MG
              </span>
            </div>

            <h1 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', lineHeight: 1.05, letterSpacing: '-1px', marginBottom: '20px', maxWidth: '900px' }}>
              SEU PRÓXIMO CARRO
              <br />
              ESTÁ AQUI NA <span style={{ color: '#C9A227' }}>FÊNIX</span>
            </h1>

            <p style={{ fontSize: '15px', color: '#777', maxWidth: '520px', lineHeight: 1.7, marginBottom: '32px' }}>
              Melhores taxas, sem entrada. Financiamento facilitado via Santander, Itaú, PAN e muito mais.
            </p>

            <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}>
              <GoldButton as="a" href="#estoque" size="lg" variant="solid">
                VER ESTOQUE COMPLETO
              </GoldButton>
              <GoldButton
                as="a"
                href={WHATSAPP_URL('Olá! Gostaria de simular um financiamento.')}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="ghost"
              >
                SIMULAR FINANCIAMENTO
              </GoldButton>
            </div>

            <div className="grid max-w-[700px] grid-cols-2 border-t border-[#1f1f1f] pt-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className={`text-center ${index < 3 ? 'md:border-r md:border-[#1f1f1f]' : ''} ${index > 0 ? 'md:pl-4' : ''} ${index < 3 ? 'md:pr-4' : ''}`}>
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '34px', fontWeight: 400, color: '#C9A227', letterSpacing: '1px', lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '10px', color: '#555', textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: '6px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-20 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <FilterBar />
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-16 md:px-12 md:py-20 lg:px-20 xl:px-32" id="estoque">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Estoque em Destaque"
            highlight="Destaque"
            action={
              <Link href="/estoque" className="flex items-center gap-1 text-sm font-medium text-[#C9A227] transition-colors hover:text-[#E8C84A]">
                Ver todos <ChevronRight size={16} />
              </Link>
            }
          />
          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
          >
            {featured.map((vehicle) => (
              <VehicleCard key={vehicle.id} {...vehicle} />
            ))}
          </motion.div>
          <div className="mt-10 text-center">
            <GoldButton as="a" href="/estoque" variant="ghost" size="lg">
              Carregar mais veículos
            </GoldButton>
          </div>
        </div>
      </section>

      <section className="border-y border-[#1f1f1f] bg-[#0d0d0d] px-6 py-16 md:px-12 md:py-20 lg:px-20 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-xs uppercase tracking-[3px] text-[#C9A227]">Financiamento facilitado</span>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="border-l-[3px] border-[#C9A227] pl-6">
              <h2 className="font-oswald text-4xl font-extrabold uppercase leading-[1.1] text-white">
                Aprovação rápida,
                <br />
                sem burocracia
              </h2>
              <p className="mb-6 mt-4 text-sm leading-7 text-[#888]">
                Trabalhamos com os melhores bancos para garantir as melhores condições para você. Análise rápida e sem complicação.
              </p>

              <div className="space-y-3">
                {[
                  'Simulação gratuita e sem compromisso',
                  'Sem entrada (sujeito a análise)',
                  'Parcelamento em até 60x',
                  'Análise mesmo com restrição no nome',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="shrink-0 text-[#C9A227]" />
                    <span className="text-sm text-[#CCCCCC]">{item}</span>
                  </div>
                ))}
              </div>

              <GoldButton
                as="a"
                href={WHATSAPP_URL('Olá! Quero simular meu financiamento agora!')}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                className="mt-8"
              >
                SIMULAR AGORA NO WHATSAPP
              </GoldButton>
            </div>

            <div>
              <div className="mb-4 text-[11px] uppercase tracking-[2px] text-[#555]">Bancos parceiros</div>
              <div className="mb-6 flex flex-wrap gap-3">
                {banks.map((bank) => (
                  <span key={bank} className="rounded-sm border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-2 text-sm font-semibold text-[#AAAAAA]">
                    {bank}
                  </span>
                ))}
              </div>
              <div className="rounded border border-[#1f1f1f] border-l-[3px] border-l-[#C9A227] bg-[#141414] p-6">
                <div className="font-bebas text-[52px] leading-none text-[#C9A227]">60X</div>
                <div className="mt-1 text-sm text-[#666]">Parcelas com os melhores bancos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-16 md:px-12 md:py-20 lg:px-20 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Por que escolher a Fênix?" highlight="Fênix?" centered />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {features.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                {...fadeInUp}
                className="flex items-start gap-5 rounded border border-[#1f1f1f] bg-[#141414] p-7 transition-colors hover:border-[#C9A227]/40"
              >
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded border border-[rgba(201,162,39,0.3)] bg-[rgba(201,162,39,0.1)]">
                  <Icon size={24} className="text-[#C9A227]" />
                </div>
                <div>
                  <h3 className="font-oswald text-lg font-bold uppercase text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#777]">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1f1f1f] bg-[#080808] px-6 py-16 md:px-12 md:py-20 lg:px-20 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="O que nossos clientes dizem" highlight="clientes" centered />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1f1f1f] bg-[#0a0a0a] px-6 py-16 md:px-12 md:py-20 lg:px-20 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <SectionHeader title="Nos acompanhe no Instagram" highlight="Instagram" />
            <a
              href={CONSTANTS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#C9A227] no-underline transition-colors hover:text-[#E8C84A]"
            >
              @fenix_veiculos_laranjal →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <a
                key={index}
                href={CONSTANTS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full rounded border border-[#242424] bg-[#141414] pb-[100%] transition-colors hover:border-[#C9A227]"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2a2a2a" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="#2a2a2a" />
                  </svg>
                  <span className="text-[10px] uppercase tracking-[1.5px] text-[#2a2a2a]">VER POST</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <GoldButton as="a" href={CONSTANTS.instagram} target="_blank" rel="noopener noreferrer" variant="ghost" size="lg">
              SEGUIR NO INSTAGRAM
            </GoldButton>
          </div>
        </div>
      </section>

      <section className="border-t border-[#1f1f1f] bg-[#0d0d0d] px-6 py-16 md:px-12 md:py-20 lg:px-20 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Fale com a Gente" highlight="Gente" />

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
                {contactCards.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="rounded border border-[#1f1f1f] bg-[#141414] p-4">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded border border-[rgba(201,162,39,0.3)] bg-[rgba(201,162,39,0.1)]">
                      <Icon size={18} className="text-[#C9A227]" />
                    </div>
                    <div className="mb-1 text-[10px] uppercase tracking-[2px] text-[#555]">{label}</div>
                    <div className="text-sm font-semibold text-[#C9A227]">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

function ContactForm() {
  return (
    <div className="rounded border border-[#1f1f1f] bg-[#141414] p-8">
      <div className="mb-5 text-xs uppercase tracking-[3px] text-[#C9A227]">ENVIAR MENSAGEM</div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          const name = formData.get('name')
          const phone = formData.get('phone')
          const message = formData.get('message')
          const text = `Olá! Meu nome é ${name}, fone: ${phone}. ${message}`
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
          rows={4}
          required
          placeholder="Qual veículo você tem interesse?"
          className="block w-full rounded-sm border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#C9A227]"
        />
        <button
          type="submit"
          className="w-full rounded-sm bg-[#C9A227] px-4 py-3 text-sm font-extrabold uppercase tracking-[2px] text-black transition-colors hover:bg-[#E8C84A]"
        >
          ENVIAR VIA WHATSAPP
        </button>
      </form>
    </div>
  )
}
