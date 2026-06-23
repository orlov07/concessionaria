'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Preciso ter CPF limpo para financiar?',
    a: 'Não necessariamente! Trabalhamos com bancos parceiros que analisam o perfil completo do cliente. Mesmo com restrições no nome, é possível conseguir aprovação. Entre em contato conosco para uma análise sem compromisso.',
  },
  {
    q: 'Qual o valor mínimo de entrada?',
    a: 'Trabalhamos com condições especiais que permitem financiamento sem entrada, sujeito à análise de crédito. O valor de entrada pode variar conforme o perfil do cliente e o veículo escolhido.',
  },
  {
    q: 'Em quantas parcelas posso parcelar?',
    a: 'Você pode parcelar em até 60 vezes, dependendo do banco e do perfil do financiamento. Simulamos as melhores condições entre Santander, Itaú, PAN, BV, Bradesco e Caixa Econômica.',
  },
  {
    q: 'Quanto tempo leva a aprovação?',
    a: 'Na maioria dos casos, a análise é feita em poucas horas! Temos casos de aprovação em menos de 1 hora. O prazo pode variar conforme a documentação e o banco escolhido.',
  },
  {
    q: 'Posso dar meu carro como entrada?',
    a: 'Sim! Fazemos avaliação do seu veículo atual e ele pode ser utilizado como parte do pagamento. Agende uma visita ou envie fotos pelo WhatsApp para recebermos uma proposta.',
  },
]

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-2">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-[#1f1f1f] overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="text-white font-medium text-sm pr-4">{faq.q}</span>
            <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={18} className="text-[#C9A227] flex-shrink-0" />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-[#AAA] text-sm leading-relaxed border-t border-[#1f1f1f] pt-4">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
