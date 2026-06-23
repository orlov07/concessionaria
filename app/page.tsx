'use client'

import type { CSSProperties } from 'react'
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

function InstagramGlyph({ className = '', size: _size, style }: { className?: string; size?: number; style?: CSSProperties }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} style={style}>
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
            <span style={{
              display: 'inline-block',
              marginBottom: '24px',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '4px',
              color: '#C9A227',
              border: '1px solid #C9A227',
              padding: '6px 16px',
              borderRadius: '2px',
              background: 'rgba(201,162,39,0.08)',
            }}>
              Multimarcas · Laranjal MG
            </span>

            <h1 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 800, lineHeight: 1.05, color: '#fff', textTransform: 'uppercase', letterSpacing: '-1px', margin: 0 }}>
              Seu próximo carro
              <br />
              está aqui na <span style={{ color: '#C9A227' }}>Fênix</span>
            </h1>

            <p style={{ marginTop: '24px', maxWidth: '560px', fontSize: '16px', lineHeight: 1.7, color: '#AAAAAA' }}>
              Melhores taxas, sem entrada. Financiamento facilitado via Santander, Itaú, PAN e muito mais.
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
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '28px', fontWeight: 800, color: '#C9A227', letterSpacing: '1px' }}>{stat.value}</div>
                  <div style={{ fontSize: '11px', color: '#666', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
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
            <span className="text-xs uppercase tracking-[3px] text-[#C9A227]">▬ Financiamento facilitado</span>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div style={{ borderLeft: '3px solid #C9A227', paddingLeft: '24px' }}>
              <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '36px', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.1, color: '#fff' }}>
                Aprovação rápida,
                <br />
                sem burocracia
              </h2>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#888', margin: '16px 0 24px' }}>
                Trabalhamos com os melhores bancos para garantir as melhores condições para você. Análise rápida e sem complicação.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Simulação gratuita e sem compromisso',
                  'Sem entrada (sujeito a análise)',
                  'Parcelamento em até 60x',
                  'Análise mesmo com restrição no nome',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: '#C9A227' }} />
                    <span style={{ fontSize: '13px', color: '#ccc' }}>{item}</span>
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
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#555', marginBottom: '16px' }}>Bancos parceiros</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
                {banks.map((bank) => (
                  <span key={bank} style={{
                    background: '#1a1a1a',
                    border: '1px solid #2a2a2a',
                    color: '#aaa',
                    fontSize: '12px',
                    fontWeight: 600,
                    padding: '8px 16px',
                    borderRadius: '2px',
                  }}>
                    {bank}
                  </span>
                ))}
              </div>
              <div style={{ background: '#141414', border: '1px solid #1f1f1f', borderLeft: '3px solid #C9A227', borderRadius: '4px', padding: '24px' }}>
                <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '52px', lineHeight: 1, color: '#C9A227' }}>60X</div>
                <div style={{ marginTop: '4px', fontSize: '13px', color: '#666' }}>Parcelas com os melhores bancos</div>
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
                style={{
                  background: '#141414',
                  border: '1px solid #1f1f1f',
                  borderRadius: '4px',
                  padding: '28px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                }}
              >
                <div style={{
                  width: '52px', height: '52px', flexShrink: 0,
                  background: 'rgba(201,162,39,0.1)',
                  border: '1px solid rgba(201,162,39,0.3)',
                  borderRadius: '4px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={24} style={{ color: '#C9A227' }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '16px', fontWeight: 800, textTransform: 'uppercase', color: '#fff', marginBottom: '6px' }}>{title}</h3>
                  <p style={{ fontSize: '13px', color: '#777', lineHeight: 1.6 }}>{desc}</p>
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
                style={{
                  display: 'flex',
                  aspectRatio: '1 / 1',
                  background: '#141414',
                  border: '1px solid #2a2a2a',
                  borderRadius: '4px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#C9A227' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#2a2a2a' }}
              >
                <div style={{ textAlign: 'center' }}>
                  <InstagramGlyph style={{ margin: '0 auto', display: 'block', color: '#333' }} />
                  <div style={{ marginTop: '8px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: '#333' }}>Ver post</div>
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
              <div style={{ marginBottom: '20px', height: '280px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', borderRadius: '4px', border: '1px solid #2a2a2a', background: '#141414', overflow: 'hidden' }}>
                {CONSTANTS.mapsEmbedUrl ? (
                  <iframe src={CONSTANTS.mapsEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
                ) : (
                  <>
                    <MapPin size={32} style={{ color: '#C9A227' }} />
                    <div style={{ fontSize: '13px', color: '#666' }}>Laranjal, MG</div>
                    <div style={{ fontSize: '11px', color: '#444' }}>Mapa em breve</div>
                  </>
                )}
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {contactCards.map(({ icon: Icon, label, value }) => (
                  <div key={label} style={{ background: '#141414', border: '1px solid #1f1f1f', borderRadius: '4px', padding: '16px' }}>
                    <div style={{
                      marginBottom: '12px',
                      display: 'inline-flex',
                      width: '40px', height: '40px',
                      alignItems: 'center', justifyContent: 'center',
                      borderRadius: '4px',
                      border: '1px solid rgba(201,162,39,0.3)',
                      background: 'rgba(201,162,39,0.1)',
                    }}>
                      <Icon size={18} style={{ color: '#C9A227' }} />
                    </div>
                    <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: '#555', marginBottom: '4px' }}>{label}</div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#C9A227' }}>{value}</div>
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

const inputStyle: CSSProperties = {
  display: 'block',
  width: '100%',
  background: '#1a1a1a',
  border: '1px solid #2a2a2a',
  borderRadius: '2px',
  padding: '12px 16px',
  color: '#fff',
  fontSize: '13px',
  outline: 'none',
}

function ContactForm() {
  return (
    <div style={{ background: '#141414', border: '1px solid #1f1f1f', borderRadius: '4px', padding: '32px' }}>
      <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '3px', color: '#C9A227', marginBottom: '20px' }}>Enviar mensagem</div>
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
        style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
      >
        <input
          name="name"
          required
          placeholder="Seu nome"
          style={inputStyle}
        />
        <input
          name="phone"
          required
          placeholder="Seu telefone / WhatsApp"
          style={inputStyle}
        />
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Qual veículo você tem interesse?"
          style={{ ...inputStyle, resize: 'vertical' }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            background: '#C9A227',
            color: '#000',
            border: 'none',
            padding: '14px',
            fontSize: '13px',
            fontWeight: 800,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            borderRadius: '2px',
          }}
        >
          Enviar via WhatsApp
        </button>
      </form>
    </div>
  )
}
