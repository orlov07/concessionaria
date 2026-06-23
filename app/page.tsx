'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle2, ChevronRight, Clock, CreditCard, MapPin, MessageCircle, Star, Trophy } from 'lucide-react'
import { FilterBar } from '@/components/ui/FilterBar'
import { GoldButton } from '@/components/ui/GoldButton'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { VehicleCard } from '@/components/ui/VehicleCard'
import { CONSTANTS, WHATSAPP_URL } from '@/data/constants'
import { vehicles } from '@/data/vehicles'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45 },
}

const stats = [
  { value: '22,5K', label: 'Seguidores no Instagram' },
  { value: '5K+', label: 'Publicacoes' },
  { value: '0', label: 'Entrada*' },
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
        className="relative min-h-[88vh] overflow-hidden bg-[#0a0a0a] pt-[110px]"
        style={{
          background:
            'radial-gradient(ellipse at 78% 18%, rgba(201,162,39,0.16) 0%, transparent 48%), radial-gradient(ellipse at 15% 88%, rgba(201,162,39,0.05) 0%, transparent 44%), #0a0a0a',
        }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <svg className="absolute right-0 top-0 h-full w-[42%] opacity-[0.05]" viewBox="0 0 700 900" preserveAspectRatio="none" fill="none">
            <line x1="700" y1="0" x2="120" y2="900" stroke="#C9A227" strokeWidth="2" />
            <line x1="638" y1="0" x2="58" y2="900" stroke="#C9A227" strokeWidth="1" />
            <line x1="770" y1="0" x2="210" y2="900" stroke="#C9A227" strokeWidth="1" />
          </svg>
        </div>

        <div className="section-shell pb-16">
          <div className="page-shell flex min-h-[calc(88vh-110px)] items-end">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-[980px]">
              <div className="mb-5">
                <span className="inline-block rounded-sm border border-[#C9A227] bg-[rgba(201,162,39,0.08)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.34em] text-[#C9A227]">
                  Multimarcas | Laranjal MG
                </span>
              </div>

              <h1 className="font-oswald text-[clamp(46px,6.8vw,88px)] font-extrabold uppercase leading-[0.96] tracking-[-0.04em] text-white">
                Seu proximo carro
                <br />
                esta aqui na <span className="text-[#C9A227]">Fenix</span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-8 text-[#8a8a8a] md:text-base">
                Melhores taxas, sem entrada e atendimento direto no WhatsApp. Um layout mais forte para apresentar a concessionaria sem cara de template quebrado.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
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

              <div className="mt-12 grid max-w-4xl grid-cols-2 gap-y-6 border-t border-[#1f1f1f] pt-8 md:grid-cols-4">
                {stats.map((stat, index) => (
                  <div key={stat.label} className={`pr-4 ${index < 3 ? 'md:border-r md:border-[#1f1f1f]' : ''}`}>
                    <div className="font-bebas text-[36px] leading-none text-[#C9A227] md:text-[40px]">{stat.value}</div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#555]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#0c0c0c] py-16 md:py-20">
        <div className="page-shell">
          <FilterBar />
        </div>
      </section>

      <section className="section-shell bg-[#0a0a0a] py-16 md:py-20" id="estoque">
        <div className="page-shell">
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
            className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
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

      <section className="section-shell border-y border-[#1f1f1f] bg-[#0d0d0d] py-16 md:py-20">
        <div className="page-shell">
          <div className="mb-4 text-xs uppercase tracking-[0.28em] text-[#C9A227]">Financiamento facilitado</div>

          <div className="grid items-start gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
            <div className="rounded border border-[#1f1f1f] bg-[#121212] p-7 md:p-9">
              <div className="border-l-[3px] border-[#C9A227] pl-5">
                <h2 className="font-oswald text-4xl font-extrabold uppercase leading-[1.05] text-white md:text-5xl">
                  Aprovacao rapida,
                  <br />
                  sem burocracia
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-8 text-[#888] md:text-base">
                  Trabalhamos com os melhores bancos para apresentar condicoes claras, diretas e visualmente organizadas.
                </p>
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {[
                  'Simulacao gratuita e sem compromisso',
                  'Sem entrada (sujeito a analise)',
                  'Parcelamento em ate 60x',
                  'Analise mesmo com restricao no nome',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded border border-[#1f1f1f] bg-[#161616] px-4 py-3">
                    <CheckCircle2 size={17} className="shrink-0 text-[#C9A227]" />
                    <span className="text-sm text-[#d1d1d1]">{item}</span>
                  </div>
                ))}
              </div>

              <GoldButton
                as="a"
                href={WHATSAPP_URL('Ola! Quero simular meu financiamento agora.')}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                className="mt-8"
              >
                Simular agora no WhatsApp
              </GoldButton>
            </div>

            <div className="rounded border border-[#1f1f1f] bg-[#121212] p-7 md:p-9">
              <div className="text-xs uppercase tracking-[0.28em] text-[#666]">Bancos parceiros</div>
              <div className="mt-5 flex flex-wrap gap-3">
                {banks.map((bank) => (
                  <span key={bank} className="rounded-sm border border-[#2a2a2a] bg-[#181818] px-4 py-2 text-sm font-semibold text-[#b6b6b6]">
                    {bank}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded border border-[#1f1f1f] border-l-[3px] border-l-[#C9A227] bg-[#151515] p-6">
                <div className="font-bebas text-[64px] leading-none text-[#C9A227]">60X</div>
                <div className="mt-2 text-sm text-[#777]">Parcelas com os melhores bancos e atendimento rapido</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#0a0a0a] py-16 md:py-20">
        <div className="page-shell">
          <SectionHeader title="Por que escolher a Fenix?" highlight="Fenix?" centered />
          <div className="grid gap-5 md:grid-cols-2">
            {features.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                {...fadeInUp}
                className="flex items-start gap-5 rounded border border-[#1f1f1f] bg-[#141414] p-7 transition-colors hover:border-[#C9A227]/40"
              >
                <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded border border-[rgba(201,162,39,0.3)] bg-[rgba(201,162,39,0.1)]">
                  <Icon size={24} className="text-[#C9A227]" />
                </div>
                <div>
                  <h3 className="font-oswald text-[28px] font-bold uppercase leading-none text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#777] md:text-base">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell border-t border-[#1f1f1f] bg-[#080808] py-16 md:py-20">
        <div className="page-shell">
          <SectionHeader title="O que nossos clientes dizem" highlight="clientes" centered />
          <div className="grid gap-5 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell border-t border-[#1f1f1f] bg-[#0a0a0a] py-16 md:py-20">
        <div className="page-shell">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
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

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <a
                key={index}
                href={CONSTANTS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded border border-[#242424] bg-[#141414] transition-colors hover:border-[#C9A227]"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2a2a2a" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="#2a2a2a" />
                  </svg>
                  <span className="text-[10px] uppercase tracking-[1.5px] text-[#2a2a2a]">Ver post</span>
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

      <section className="section-shell border-t border-[#1f1f1f] bg-[#0d0d0d] py-16 md:py-20">
        <div className="page-shell">
          <SectionHeader title="Fale com a Gente" highlight="Gente" />

          <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(420px,0.92fr)]">
            <div>
              <div className="mb-5 flex h-[300px] flex-col items-center justify-center gap-2 rounded border border-[#2a2a2a] bg-[#141414]">
                {CONSTANTS.mapsEmbedUrl ? (
                  <iframe src={CONSTANTS.mapsEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
                ) : (
                  <>
                    <MapPin size={34} className="text-[#C9A227]" />
                    <div className="text-base text-[#777]">Laranjal, MG</div>
                    <div className="text-sm text-[#444]">Mapa em breve</div>
                  </>
                )}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {contactCards.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="rounded border border-[#1f1f1f] bg-[#141414] p-5">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded border border-[rgba(201,162,39,0.3)] bg-[rgba(201,162,39,0.1)]">
                      <Icon size={18} className="text-[#C9A227]" />
                    </div>
                    <div className="mb-1 text-[10px] uppercase tracking-[0.22em] text-[#555]">{label}</div>
                    <div className="text-sm font-semibold text-[#C9A227] md:text-base">{value}</div>
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
    <div className="rounded border border-[#1f1f1f] bg-[#141414] p-6 md:p-8">
      <div className="mb-5 text-xs uppercase tracking-[0.3em] text-[#C9A227]">Enviar mensagem</div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          const name = formData.get('name')
          const phone = formData.get('phone')
          const message = formData.get('message')
          const text = `Ola! Meu nome e ${name}, telefone: ${phone}. ${message}`
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
          rows={5}
          required
          placeholder="Qual veiculo voce tem interesse?"
          className="block w-full rounded-sm border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#C9A227]"
        />
        <button
          type="submit"
          className="w-full rounded-sm bg-[#C9A227] px-4 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-black transition-colors hover:bg-[#E8C84A]"
        >
          Enviar via WhatsApp
        </button>
      </form>
    </div>
  )
}
