import type { Metadata } from 'next'
import { SectionHeader } from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description: 'Conheça a história da Fênix Veículos, a multimarcas referência em Laranjal, MG.',
}

const values = [
  {
    icon: '🔍',
    title: 'Transparência',
    desc: 'Todos os nossos veículos são publicados com informações detalhadas no Instagram, garantindo total transparência na negociação.',
  },
  {
    icon: '⭐',
    title: 'Qualidade',
    desc: 'Selecionamos cuidadosamente cada veículo do nosso estoque para garantir que você tenha a melhor experiência de compra.',
  },
  {
    icon: '🤝',
    title: 'Facilidade',
    desc: 'Simplificamos o processo de compra e financiamento para que você saia dirigindo sem complicações e sem burocracia.',
  },
]

export default function SobrePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-[#666] text-xs uppercase tracking-widest mb-8">
        <span>Home</span><span className="mx-2">/</span>
        <span className="text-[#C9A227]">Sobre Nós</span>
      </nav>

      {/* Hero */}
      <div className="max-w-3xl mb-16">
        <SectionHeader title="A história da Fênix" highlight="Fênix" />
        <div className="space-y-4 text-[#AAA] leading-relaxed">
          <p>
            A <span className="text-[#C9A227] font-semibold">Fênix Veículos Laranjal</span> nasceu com o propósito de transformar a experiência de compra de carros em Laranjal, MG e região. Com um atendimento próximo, honesto e sem enrolação, nos tornamos referência na venda de veículos seminovos multimarcas.
          </p>
          <p>
            Nossa presença forte no Instagram — com mais de <span className="text-white font-semibold">22,5 mil seguidores</span> e mais de <span className="text-white font-semibold">5 mil publicações</span> — reflete nosso compromisso com a transparência. Cada carro que entra no nosso estoque é publicado com fotos reais, especificações completas e preço justo.
          </p>
          <p>
            Trabalhamos com os melhores bancos do país para garantir financiamento facilitado, mesmo para quem tem restrições no nome. Nosso objetivo é simples: <span className="text-[#C9A227] font-semibold">fazer você sair dirigindo hoje</span>.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#111] border border-[#1f1f1f] p-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '22,5K', label: 'Seguidores no Instagram' },
            { value: '5.199', label: 'Publicações' },
            { value: '100+', label: 'Carros Vendidos' },
            { value: '4,9★', label: 'Avaliação Média' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-bebas text-5xl text-[#C9A227] tracking-wide">{s.value}</p>
              <p className="text-[#666] text-xs uppercase tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <SectionHeader title="Nossos Valores" highlight="Valores" centered />
        <div className="grid md:grid-cols-3 gap-6">
          {values.map(({ icon, title, desc }) => (
            <div key={title} className="bg-[#141414] border border-[#1f1f1f] p-8 text-center hover:border-[#C9A227]/40 transition-colors">
              <p className="text-4xl mb-4">{icon}</p>
              <h3 className="font-oswald text-white text-xl uppercase mb-3">{title}</h3>
              <p className="text-[#888] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Photo placeholder */}
      <div className="bg-[#111] border border-[#1f1f1f] h-64 flex items-center justify-center">
        <div className="text-center text-[#444]">
          <p className="text-4xl mb-3">📸</p>
          <p className="text-sm uppercase tracking-widest">Foto da equipe em breve</p>
        </div>
      </div>
    </div>
  )
}
