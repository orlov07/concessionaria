'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, CreditCard, CheckCircle2, Trophy, Users, Star } from 'lucide-react'
import { VehicleCard } from '@/components/ui/VehicleCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FilterBar } from '@/components/ui/FilterBar'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { GoldButton } from '@/components/ui/GoldButton'
import { vehicles } from '@/data/vehicles'
import { CONSTANTS, WHATSAPP_URL } from '@/data/constants'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
}

const stats = [
  { value: '22,5K', label: 'Seguidores no Instagram' },
  { value: '5K+', label: 'Publicações' },
  { value: '0 Entrada*', label: 'Condições especiais' },
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

export default function HomePage() {
  const featured = vehicles.slice(0, 6)

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex flex-col justify-center bg-[#0a0a0a] hero-glow overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 w-full">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 border border-[#C9A227]/40 text-[#C9A227] text-xs font-bold tracking-[0.25em] uppercase mb-8">
              Multimarcas · Laranjal MG
            </span>

            <h1 className="font-oswald text-5xl md:text-7xl font-bold text-white uppercase leading-tight mb-6">
              Seu próximo carro<br />
              está aqui na{' '}
              <span className="text-[#C9A227] gold-text-glow">Fênix</span>
            </h1>

            <p className="text-[#AAAAAA] text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              Melhores taxas, sem entrada. Financiamento facilitado via Santander, Itaú, PAN e muito mais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <GoldButton as="a" href="#estoque" size="lg" variant="solid">
                Ver Estoque Completo
              </GoldButton>
              <GoldButton as="a" href={WHATSAPP_URL('Olá! Gostaria de simular um financiamento.')} target="_blank" rel="noopener noreferrer" size="lg" variant="ghost">
                Simular Financiamento
              </GoldButton>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="border-t border-[#1f1f1f] bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1f1f1f]"
            >
              {stats.map((s) => (
                <motion.div key={s.label} variants={fadeInUp} className="px-6 py-6 text-center">
                  <p className="font-bebas text-3xl md:text-4xl text-[#C9A227] tracking-wide">{s.value}</p>
                  <p className="text-[#666] text-xs uppercase tracking-wide mt-1">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 -mt-1 py-10" id="estoque">
        <FilterBar />
      </section>

      {/* FEATURED VEHICLES */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <SectionHeader
          title="Estoque em Destaque"
          highlight="Destaque"
          action={
            <Link href="/estoque" className="flex items-center gap-1 text-[#C9A227] text-sm hover:text-[#E8C84A] transition-colors font-medium">
              Ver todos <ChevronRight size={16} />
            </Link>
          }
        />
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featured.map((v) => (
            <VehicleCard key={v.id} {...v} />
          ))}
        </motion.div>
        <div className="text-center mt-10">
          <GoldButton as="a" href="/estoque" variant="ghost" size="lg">
            Carregar mais veículos
          </GoldButton>
        </div>
      </section>

      {/* FINANCING */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="border-l-4 border-[#C9A227] pl-6 md:pl-10 grid md:grid-cols-2 gap-12 items-start bg-[#111] py-10 px-6 md:px-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[rgba(201,162,39,0.1)] flex items-center justify-center">
                <CreditCard size={20} className="text-[#C9A227]" />
              </div>
              <span className="text-[#C9A227] text-xs uppercase tracking-widest font-bold">Financiamento Facilitado</span>
            </div>
            <h2 className="font-oswald text-3xl md:text-4xl text-white uppercase mb-3">
              Aprovação rápida,<br />sem burocracia
            </h2>
            <p className="text-[#AAA] mb-8">Trabalhamos com os melhores bancos para garantir as melhores condições para você. Análise rápida e sem complicação.</p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                'Simulação gratuita e sem compromisso',
                'Sem entrada (sujeito a análise)',
                'Parcelamento em até 60x',
                'Análise mesmo com restrição no nome',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#AAA]">
                  <CheckCircle2 size={16} className="text-[#C9A227] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <GoldButton as="a" href={WHATSAPP_URL('Olá! Quero simular meu financiamento agora!')} target="_blank" rel="noopener noreferrer" size="lg">
              Simular agora no WhatsApp
            </GoldButton>
          </div>
          <div>
            <p className="text-[#666] text-xs uppercase tracking-widest mb-5 font-medium">Bancos parceiros</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {banks.map((b) => (
                <span key={b} className="px-4 py-2 border border-[#333] text-[#AAA] text-sm">{b}</span>
              ))}
            </div>
            <div className="bg-[#0a0a0a] border border-[#C9A227]/20 p-6">
              <p className="text-[#C9A227] font-bebas text-4xl tracking-wide">60x</p>
              <p className="text-[#888] text-sm mt-1">Parcelas com os melhores bancos</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FÊNIX */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <SectionHeader title="Por que escolher a Fênix?" highlight="Fênix?" centered />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#141414] border border-[#1f1f1f] p-6 hover:border-[#C9A227]/40 transition-colors"
            >
              <div className="w-10 h-10 bg-[rgba(201,162,39,0.1)] flex items-center justify-center mb-4">
                <Icon size={20} className="text-[#C9A227]" />
              </div>
              <h3 className="font-oswald text-white text-lg uppercase mb-2">{title}</h3>
              <p className="text-[#888] text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <SectionHeader title="O que nossos clientes dizem" highlight="clientes" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <SectionHeader
          title="Nos acompanhe no Instagram"
          subtitle=""
          action={
            <a href={CONSTANTS.instagram} target="_blank" rel="noopener noreferrer"
              className="text-[#C9A227] text-sm hover:text-[#E8C84A] font-medium">
              @fenix_veiculos_laranjal
            </a>
          }
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {Array(6).fill(null).map((_, i) => (
            <div key={i} className="aspect-square bg-[#141414] border border-[#1f1f1f] flex items-center justify-center text-[#333] hover:border-[#C9A227]/40 transition-colors cursor-pointer">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </div>
          ))}
        </div>
        {/* TODO: Integrate Instagram Basic Display API for live posts */}
        <div className="text-center">
          <GoldButton as="a" href={CONSTANTS.instagram} target="_blank" rel="noopener noreferrer" variant="ghost" size="lg">
            Seguir no Instagram
          </GoldButton>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <SectionHeader title="Fale com a Gente" highlight="Gente" />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Map placeholder */}
          <div>
            <div className="bg-[#111] border border-[#1f1f1f] h-64 flex items-center justify-center text-[#555] mb-4">
              {CONSTANTS.mapsEmbedUrl ? (
                <iframe src={CONSTANTS.mapsEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
              ) : (
                <div className="text-center">
                  <p className="text-2xl mb-2">📍</p>
                  <p className="text-sm">Laranjal, MG</p>
                  <p className="text-xs text-[#444] mt-1">Mapa em breve</p>
                </div>
              )}
            </div>
            <p className="text-[#AAA] text-sm">📍 {CONSTANTS.address}</p>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            {[
              { icon: '📱', label: 'WhatsApp', value: CONSTANTS.whatsapp },
              { icon: '📸', label: 'Instagram', value: '@fenix_veiculos_laranjal' },
              { icon: '👥', label: 'Facebook', value: 'Fênix Multimarcas Laranjal' },
              { icon: '🕐', label: 'Horário', value: CONSTANTS.hours },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4 p-4 bg-[#111] border border-[#1f1f1f]">
                <span className="text-xl">{c.icon}</span>
                <div>
                  <p className="text-[#666] text-xs uppercase tracking-widest mb-0.5">{c.label}</p>
                  <p className="text-white text-sm">{c.value}</p>
                </div>
              </div>
            ))}

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

function ContactForm() {
  return (
    <div className="bg-[#111] border border-[#1f1f1f] p-5 mt-2">
      <p className="text-[#C9A227] text-xs uppercase tracking-widest mb-4 font-bold">Enviar mensagem</p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const fd = new FormData(e.currentTarget)
          const name = fd.get('name')
          const phone = fd.get('phone')
          const message = fd.get('message')
          const text = `Olá! Meu nome é ${name}, fone: ${phone}. ${message}`
          window.open(WHATSAPP_URL(text), '_blank')
        }}
        className="flex flex-col gap-3"
      >
        <input name="name" required placeholder="Seu nome" className="bg-[#0a0a0a] border border-[#333] text-white px-3 py-2.5 text-sm focus:border-[#C9A227] outline-none transition-colors" />
        <input name="phone" required placeholder="Seu telefone / WhatsApp" className="bg-[#0a0a0a] border border-[#333] text-white px-3 py-2.5 text-sm focus:border-[#C9A227] outline-none transition-colors" />
        <textarea name="message" rows={3} required placeholder="Qual veículo você tem interesse?" className="bg-[#0a0a0a] border border-[#333] text-white px-3 py-2.5 text-sm focus:border-[#C9A227] outline-none transition-colors resize-none" />
        <button type="submit" className="bg-[#C9A227] text-black font-bold py-3 uppercase tracking-wide text-sm hover:bg-[#E8C84A] transition-colors">
          Enviar via WhatsApp
        </button>
      </form>
    </div>
  )
}
