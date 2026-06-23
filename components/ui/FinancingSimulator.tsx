'use client'
import { useState } from 'react'
import { WHATSAPP_URL } from '@/data/constants'
import { Calculator } from 'lucide-react'

const installmentOptions = [12, 24, 36, 48, 60]

export function FinancingSimulator() {
  const [vehicleValue, setVehicleValue] = useState(80000)
  const [downPayment, setDownPayment] = useState(0)
  const [installments, setInstallments] = useState(48)

  const financed = Math.max(0, vehicleValue - downPayment)
  const monthly = financed > 0 ? (financed / installments) * 1.015 : 0

  const waMsg = `Olá! Quero simular o financiamento de um veículo de R$${vehicleValue.toLocaleString('pt-BR')} com entrada de R$${downPayment.toLocaleString('pt-BR')} em ${installments}x. Pode me ajudar?`

  return (
    <div className="bg-[#111] border border-[#1f1f1f] p-6 md:p-8 rounded-lg">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-[rgba(201,162,39,0.1)] flex items-center justify-center">
          <Calculator size={20} className="text-[#C9A227]" />
        </div>
        <div>
          <h3 className="font-oswald text-white text-xl uppercase">Simulador de Financiamento</h3>
          <p className="text-[#666] text-xs">Estimativa — sujeita à análise de crédito</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6">
          {/* Vehicle Value */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-[#AAA] text-sm font-medium uppercase tracking-wide">Valor do veículo</label>
              <span className="font-bebas text-[#C9A227] text-lg">R$ {vehicleValue.toLocaleString('pt-BR')}</span>
            </div>
            <input
              type="range"
              min={20000} max={200000} step={1000}
              value={vehicleValue}
              onChange={(e) => setVehicleValue(Number(e.target.value))}
              className="w-full accent-[#C9A227] h-1 cursor-pointer"
            />
            <div className="flex justify-between text-[#555] text-xs mt-1">
              <span>R$ 20K</span><span>R$ 200K</span>
            </div>
          </div>

          {/* Down payment */}
          <div>
            <label className="text-[#AAA] text-sm font-medium uppercase tracking-wide mb-2 block">Valor de entrada (R$)</label>
            <input
              type="number"
              min={0} max={vehicleValue}
              value={downPayment}
              onChange={(e) => setDownPayment(Math.min(vehicleValue, Math.max(0, Number(e.target.value))))}
              className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 text-sm focus:border-[#C9A227] outline-none transition-colors"
              placeholder="0"
            />
          </div>

          {/* Installments */}
          <div>
            <label className="text-[#AAA] text-sm font-medium uppercase tracking-wide mb-2 block">Número de parcelas</label>
            <div className="flex gap-2 flex-wrap">
              {installmentOptions.map((n) => (
                <button
                  key={n}
                  onClick={() => setInstallments(n)}
                  className={`px-4 py-2 text-sm font-bold border transition-all ${
                    installments === n
                      ? 'border-[#C9A227] bg-[#C9A227] text-black'
                      : 'border-[#333] text-[#AAA] hover:border-[#C9A227] hover:text-[#C9A227]'
                  }`}
                >
                  {n}x
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="bg-[#0a0a0a] border border-[#C9A227]/20 p-6 flex flex-col justify-between">
          <div>
            <p className="text-[#AAA] text-sm uppercase tracking-widest mb-2">Parcela estimada</p>
            <p className="font-bebas text-5xl text-[#C9A227] tracking-wide">
              R$ {monthly.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
            </p>
            <p className="text-[#666] text-xs mt-1">por mês · {installments}x</p>
          </div>

          <div className="mt-8 flex flex-col gap-2">
            <div className="flex justify-between text-xs text-[#888] border-b border-[#1f1f1f] pb-2">
              <span>Valor financiado</span>
              <span className="text-white">R$ {financed.toLocaleString('pt-BR')}</span>
            </div>
            <div className="flex justify-between text-xs text-[#888] pt-2">
              <span>Prazo</span>
              <span className="text-white">{installments} meses</span>
            </div>
          </div>

          <p className="text-[#555] text-[10px] mt-4 leading-relaxed">
            * Simulação estimada. Taxas reais sujeitas à análise de crédito do banco parceiro.
          </p>

          <a
            href={WHATSAPP_URL(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 bg-[#C9A227] text-black font-bold py-3.5 uppercase tracking-wide text-sm hover:bg-[#E8C84A] transition-colors"
          >
            Solicitar análise de crédito
          </a>
        </div>
      </div>
    </div>
  )
}
