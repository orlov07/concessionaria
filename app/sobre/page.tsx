import type { Metadata } from 'next'
import { Search, Star, Handshake } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

function InstagramGlyph({ className = '' }: { className?: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Sobre Nos',
  description: 'Conheca a historia da Fenix Veiculos, a multimarcas referencia em Laranjal, MG.',
}

const values = [
  {
    icon: Search,
    title: 'Transparencia',
    desc: 'Todos os nossos veiculos sao publicados com informacoes detalhadas no Instagram, garantindo total transparencia na negociacao.',
  },
  {
    icon: Star,
    title: 'Qualidade',
    desc: 'Selecionamos cuidadosamente cada veiculo do nosso estoque para garantir que voce tenha a melhor experiencia de compra.',
  },
  {
    icon: Handshake,
    title: 'Facilidade',
    desc: 'Simplificamos o processo de compra e financiamento para que voce saia dirigindo sem complicacoes e sem burocracia.',
  },
]

export default function SobrePage() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-20 lg:px-20 xl:px-32">
      <div className="max-w-7xl mx-auto">
        <nav className="mb-8 text-xs uppercase tracking-widest text-[#666]">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span className="text-[#C9A227]">Sobre nos</span>
        </nav>

        <div className="mb-16 max-w-3xl">
          <SectionHeader title="A historia da Fenix" highlight="Fenix" />
          <div className="space-y-4 text-base leading-8 text-[#AAA]">
            <p>
              A <span className="font-semibold text-[#C9A227]">Fenix Veiculos Laranjal</span> nasceu com o proposito de transformar a experiencia de compra de carros em Laranjal, MG e regiao. Com um atendimento proximo, honesto e sem enrolacao, nos tornamos referencia na venda de veiculos seminovos multimarcas.
            </p>
            <p>
              Nossa presenca forte no Instagram, com mais de <span className="font-semibold text-white">22,5 mil seguidores</span> e mais de <span className="font-semibold text-white">5 mil publicacoes</span>, reflete nosso compromisso com a transparencia.
            </p>
            <p>
              Trabalhamos com os melhores bancos do pais para garantir financiamento facilitado, mesmo para quem tem restricoes no nome. Nosso objetivo e simples: <span className="font-semibold text-[#C9A227]">fazer voce sair dirigindo hoje</span>.
            </p>
          </div>
        </div>

        <div className="mb-16 rounded border border-[#1f1f1f] bg-[#111] p-8">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {[
              { value: '22,5K', label: 'Seguidores no Instagram' },
              { value: '5.199', label: 'Publicacoes' },
              { value: '100+', label: 'Carros vendidos' },
              { value: '4,9', label: 'Avaliacao media' },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-bebas text-5xl tracking-wide text-[#C9A227]">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[#666]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <SectionHeader title="Nossos Valores" highlight="Valores" centered />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded border border-[#1f1f1f] bg-[#141414] p-8 text-center transition-colors hover:border-[#C9A227]/40">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded border border-[rgba(201,162,39,0.3)] bg-[rgba(201,162,39,0.1)]">
                  <Icon size={24} className="text-[#C9A227]" />
                </div>
                <h3 className="font-oswald mb-3 text-xl font-extrabold uppercase text-white">{title}</h3>
                <p className="text-sm leading-7 text-[#888]">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex h-64 items-center justify-center rounded border border-[#1f1f1f] bg-[#111]">
          <div className="text-center text-[#444]">
            <InstagramGlyph className="mx-auto mb-3" />
            <p className="text-sm uppercase tracking-widest">Foto da equipe em breve</p>
          </div>
        </div>
      </div>
    </section>
  )
}
