import type { Metadata } from 'next'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FinancingSimulator } from '@/components/ui/FinancingSimulator'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Financiamento',
  description: 'Financie seu veículo com as melhores taxas via Santander, Itaú, PAN e mais. Aprovação rápida, sem burocracia.',
}

const banks = ['Santander', 'Itaú', 'PAN', 'BV', 'Bradesco', 'Caixa Econômica']

export default function FinanciamentoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-[#666] text-xs uppercase tracking-widest mb-8">
        <span>Home</span><span className="mx-2">/</span>
        <span className="text-[#C9A227]">Financiamento</span>
      </nav>

      {/* Hero */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-[#C9A227] text-xs uppercase tracking-[0.25em] font-bold mb-4 block">💳 Financiamento Facilitado</span>
        <h1 className="font-oswald text-4xl md:text-6xl text-white uppercase mb-4">
          Finance seu veículo com as<br />
          <span className="text-[#C9A227]">melhores taxas</span>
        </h1>
        <p className="text-[#AAA] text-lg">Aprovação rápida, sem burocracia. Parceiro dos maiores bancos do Brasil.</p>
      </div>

      {/* Simulator */}
      <div className="mb-16">
        <SectionHeader title="Simulador de Financiamento" highlight="Financiamento" />
        <FinancingSimulator />
      </div>

      {/* Benefits + Banks */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="bg-[#111] border border-[#1f1f1f] p-8">
          <h2 className="font-oswald text-white text-2xl uppercase mb-6">Vantagens</h2>
          <ul className="flex flex-col gap-4">
            {[
              'Simulação gratuita e sem compromisso',
              'Sem entrada (sujeito a análise de crédito)',
              'Parcelamento em até 60 vezes',
              'Análise mesmo com restrição no nome',
              'Aprovação em até 1 hora',
              'Documentação simplificada',
              'Dê seu carro como entrada',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#AAA] text-sm">
                <CheckCircle2 size={16} className="text-[#C9A227] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#111] border border-[#1f1f1f] p-8">
          <h2 className="font-oswald text-white text-2xl uppercase mb-6">Bancos Parceiros</h2>
          <div className="grid grid-cols-2 gap-3">
            {banks.map((bank) => (
              <div key={bank} className="border border-[#333] p-4 text-center hover:border-[#C9A227]/40 transition-colors">
                <p className="text-white font-medium text-sm">{bank}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-16">
        <SectionHeader title="Dúvidas Frequentes" highlight="Frequentes" />
        <FAQAccordion />
      </div>
    </div>
  )
}
