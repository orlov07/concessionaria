import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FinancingSimulator } from '@/components/ui/FinancingSimulator'
import { FAQAccordion } from '@/components/ui/FAQAccordion'

export const metadata: Metadata = {
  title: 'Financiamento',
  description: 'Financie seu veículo com as melhores taxas via Santander, Itaú, PAN e mais. Aprovação rápida, sem burocracia.',
}

const banks = ['Santander', 'Itaú', 'PAN', 'BV', 'Bradesco', 'Caixa Econômica']

export default function FinanciamentoPage() {
  return (
    <section className="px-6 py-16 md:px-12 md:py-20 lg:px-20 xl:px-32">
      <div className="max-w-7xl mx-auto">
        <nav className="mb-8 text-xs tracking-widest text-[#666] uppercase">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span className="text-[#C9A227]">Financiamento</span>
        </nav>

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 block text-xs font-bold tracking-[0.25em] text-[#C9A227] uppercase">Financiamento facilitado</span>
          <h1 className="font-oswald text-4xl font-extrabold text-white uppercase md:text-6xl">
            Finance seu veículo com as
            <br />
            <span className="text-[#C9A227]">melhores taxas</span>
          </h1>
          <p className="mt-4 text-lg text-[#AAA]">Aprovação rápida, sem burocracia. Parceiro dos maiores bancos do Brasil.</p>
        </div>

        <div className="mb-16">
          <SectionHeader title="Simulador de Financiamento" highlight="Financiamento" />
          <FinancingSimulator />
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded border border-[#1f1f1f] bg-[#141414] p-8">
            <h2 className="font-oswald mb-6 text-2xl font-extrabold text-white uppercase">Vantagens</h2>
            <ul className="space-y-4">
              {[
                'Simulação gratuita e sem compromisso',
                'Sem entrada (sujeito a análise de crédito)',
                'Parcelamento em até 60 vezes',
                'Análise mesmo com restrição no nome',
                'Aprovação em até 1 hora',
                'Documentação simplificada',
                'Dê seu carro como entrada',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#AAA]">
                  <CheckCircle2 size={16} className="shrink-0 text-[#C9A227]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded border border-[#1f1f1f] bg-[#141414] p-8">
            <div className="mb-4 text-[11px] tracking-[2px] text-[#555] uppercase">Bancos parceiros</div>
            <div className="mb-6 flex flex-wrap gap-3">
              {banks.map((bank) => (
                <span key={bank} className="rounded-sm border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-2 text-sm font-semibold text-[#AAAAAA]">
                  {bank}
                </span>
              ))}
            </div>
            <div className="rounded border border-[#1f1f1f] border-l-[3px] border-l-[#C9A227] bg-[#111] p-6">
              <div className="font-bebas text-[52px] leading-none text-[#C9A227]">60X</div>
              <div className="mt-1 text-sm text-[#666]">Parcelas com os melhores bancos</div>
            </div>
          </div>
        </div>

        <div>
          <SectionHeader title="Dúvidas Frequentes" highlight="Frequentes" />
          <FAQAccordion />
        </div>
      </div>
    </section>
  )
}
