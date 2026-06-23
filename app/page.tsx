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
  { value: '5K+', label: 'Publicacoes' },
  { value: '0 Entrada*', label: 'Condicoes especiais' },
  { value: '100%', label: 'Digital' },
]

const features = [
  { icon: Trophy, title: 'Mais de 5000 publicacoes', desc: 'Transparencia total no nosso Instagram' },
  { icon: CreditCard, title: 'Financiamento facilitado', desc: 'Aprovacao rapida pelos melhores bancos' },
  { icon: CheckCircle2, title: 'Sem entrada', desc: 'Condicoes especiais para voce sair dirigindo hoje' },
  { icon: Star, title: '22,5K seguidores', desc: 'A loja mais indicada da regiao' },
]

const banks = ['Santander', 'Itau', 'PAN', 'BV', 'Bradesco', 'Caixa Economica']

const testimonials = [
  { quote: 'Comprei meu carro sem complicacao nenhuma. Financiamento aprovado em menos de 1 hora!', name: 'Marcos S.' },
  { quote: 'Melhor atendimento que ja recebi numa loja de carros. Super recomendo a Fenix!', name: 'Ana Paula M.' },
  { quote: 'Sai de carro zero km sem entrada! Equipe muito atenciosa e honesta.', name: 'Roberto L.' },
]

const contactCards = [
  { icon: MessageCircle, label: 'WhatsApp', value: CONSTANTS.whatsapp },
  { icon: MapPin, label: 'Endereco', value: CONSTANTS.address },
  { icon: InstagramGlyph, label: 'Instagram', value: '@fenix_veiculos_laranjal' },
  { icon: Clock, label: 'Horario', value: CONSTANTS.hours },
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
        className="relative min-h-[90vh] overflow-hidden px-6 pb-16 pt-24 md:px-12 lg:px-20 xl:px-32"
        style={{
          background: `
            radial-gradient(ellipse at 80% 20%, rgba(201,162,39,0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 80%, rgba(201,162,39,0.06) 0%, transparent 40%),
            linear-gradient(180deg, #0a0a0a 0%, #0f0d00 100%)
          `,
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute right-0 top-0 h-full w-1/2 opacity-[0.08]" viewBox="0 0 800 900" fill="none">
            <line x1="800" y1="0" x2="200" y2="900" stroke="#C9A227" strokeWidth="1" />
            <line x1="750" y1="0" x2="150" y2="900" stroke="#C9A227" strokeWidth="0.5" />
            <line x1="850" y1="0" x2="300" y2="900" stroke="#C9A227" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto flex min-h-[calc(90vh-6rem)] items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="mb-6 inline-block rounded-sm border border-[#C9A227] bg-[rgba(201,162,39,0.08)] px-4 py-1.5 text-xs font-bold uppercase tracking-[4px] text-[#C9A227]">
              Multimarcas · Laranjal MG
            </span>

            <h1 className="font-oswald text-[clamp(36px,5vw,72px)] font-extrabold uppercase leading-[1.05] tracking-[-1px] text-white">
              Seu proximo carro
              <br />
              esta aqui na <span className="text-[#C9A227]">Fenix</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#AAAAAA] md:text-lg">
              Melhores taxas, sem entrada. Financiamento facilitado via Santander, Itau, PAN e muito mais.
            </p>

            <div className="mt-8 flex flex-row flex-wrap gap-4">
              <GoldButton as="a" href="#estoque" size="lg" variant="solid">
                Ver estoque completo
              </GoldButton>
              <GoldButton
                as="a"
                href={WHATSAPP_URL('Ola! Gostaria de simular um financiamento.')}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="ghost"
              >
                Simular financiamento
              </GoldButton>
            </div>

            <div className="mt-12 grid grid-cols-2 border-t border-[#1f1f1f] pt-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`py-4 text-center ${index < 3 ? 'md:border-r md:border-[#1f1f1f]' : ''}`}
                >
                  <div className="font-bebas text-3xl tracking-wide text-[#C9A227] md:text-4xl">{stat.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[1px] text-[#666]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-20 xl:px-32" id="estoque">
        <div className="max-w-7xl mx-auto">
          <FilterBar />
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-20 xl:px-32">
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
              Carregar mais veiculos
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
                Aprovacao rapida,
                <br />
                sem burocracia
              </h2>
              <p className="mb-6 mt-4 text-sm leading-7 text-[#888]">
                Trabalhamos com os melhores bancos para garantir as melhores condicoes para voce. Analise rapida e sem complicacao.
              </p>

              <div className="space-y-3">
                {[
                  'Simulacao gratuita e sem compromisso',
                  'Sem entrada (sujeito a analise)',
                  'Parcelamento em ate 60x',
                  'Analise mesmo com restricao no nome',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="shrink-0 text-[#C9A227]" />
                    <span className="text-sm text-[#CCCCCC]">{item}</span>
                  </div>
                ))}
              </div>

              <GoldButton
                as="a"
                href={WHATSAPP_URL('Ola! Quero simular meu financiamento agora!')}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                className="mt-8"
              >
                Simular agora no WhatsApp
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
          <SectionHeader title="Por que escolher a Fenix?" highlight="Fenix?" centered />
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

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <a
                key={index}
                href={CONSTANTS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex aspect-square items-center justify-center overflow-hidden rounded border border-[#2a2a2a] bg-[#141414] transition-colors hover:border-[#C9A227]"
              >
                <div className="text-center">
                  <InstagramGlyph className="mx-auto text-[#333]" />
                  <div className="mt-2 text-[10px] uppercase tracking-[1px] text-[#333]">Ver post</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <GoldButton as="a" href={CONSTANTS.instagram} target="_blank" rel="noopener noreferrer" variant="ghost" size="lg">
              Seguir no Instagram
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

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
      <div className="mb-5 text-xs uppercase tracking-[3px] text-[#C9A227]">Enviar mensagem</div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          const name = formData.get('name')
          const phone = formData.get('phone')
          const message = formData.get('message')
          const text = `Ola! Meu nome e ${name}, fone: ${phone}. ${message}`
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
          placeholder="Qual veiculo voce tem interesse?"
          className="block w-full rounded-sm border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#C9A227]"
        />
        <button
          type="submit"
          className="w-full rounded-sm bg-[#C9A227] px-4 py-3 text-sm font-extrabold uppercase tracking-[2px] text-black transition-colors hover:bg-[#E8C84A]"
        >
          Enviar via WhatsApp
        </button>
      </form>
    </div>
  )
}
