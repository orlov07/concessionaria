'use client'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CONSTANTS, WHATSAPP_URL } from '@/data/constants'
import { MessageCircle, MapPin, Clock } from 'lucide-react'

const IgIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)
const FbIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

export default function ContatoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-[#666] text-xs uppercase tracking-widest mb-8">
        <span>Home</span><span className="mx-2">/</span>
        <span className="text-[#C9A227]">Contato</span>
      </nav>

      <SectionHeader title="Fale com a Gente" highlight="Gente" subtitle="Estamos prontos para te ajudar a encontrar o carro perfeito." />

      <div className="grid md:grid-cols-2 gap-10">
        {/* Map */}
        <div>
          <div className="bg-[#111] border border-[#1f1f1f] h-72 flex items-center justify-center mb-4">
            {CONSTANTS.mapsEmbedUrl ? (
              <iframe src={CONSTANTS.mapsEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
            ) : (
              <div className="text-center text-[#444]">
                <p className="text-4xl mb-3">📍</p>
                <p className="text-sm uppercase tracking-widest">Laranjal, MG</p>
                <p className="text-xs text-[#333] mt-1">Mapa em breve</p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-3">
            {[
              { icon: MapPin, label: 'Endereço', value: CONSTANTS.address },
              { icon: Clock, label: 'Horário', value: CONSTANTS.hours },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 p-4 bg-[#111] border border-[#1f1f1f]">
                <div className="w-9 h-9 bg-[rgba(201,162,39,0.1)] flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-[#C9A227]" />
                </div>
                <div>
                  <p className="text-[#666] text-xs uppercase tracking-widest">{label}</p>
                  <p className="text-white text-sm mt-0.5">{value}</p>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-4 p-4 bg-[#111] border border-[#1f1f1f]">
              <div className="w-9 h-9 bg-[rgba(201,162,39,0.1)] flex items-center justify-center flex-shrink-0">
                <MessageCircle size={16} className="text-[#C9A227]" />
              </div>
              <div>
                <p className="text-[#666] text-xs uppercase tracking-widest">WhatsApp</p>
                <a href={`https://wa.me/${CONSTANTS.whatsapp}`} target="_blank" rel="noopener noreferrer"
                  className="text-[#C9A227] text-sm mt-0.5 hover:text-[#E8C84A] transition-colors">
                  Clique para conversar
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#111] border border-[#1f1f1f]">
              <div className="w-9 h-9 bg-[rgba(201,162,39,0.1)] flex items-center justify-center flex-shrink-0">
                <IgIcon />
              </div>
              <div>
                <p className="text-[#666] text-xs uppercase tracking-widest">Instagram</p>
                <a href={CONSTANTS.instagram} target="_blank" rel="noopener noreferrer"
                  className="text-[#C9A227] text-sm mt-0.5 hover:text-[#E8C84A] transition-colors">
                  @fenix_veiculos_laranjal
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#111] border border-[#1f1f1f]">
              <div className="w-9 h-9 bg-[rgba(201,162,39,0.1)] flex items-center justify-center flex-shrink-0">
                <FbIcon />
              </div>
              <div>
                <p className="text-[#666] text-xs uppercase tracking-widest">Facebook</p>
                <a href={CONSTANTS.facebook} target="_blank" rel="noopener noreferrer"
                  className="text-[#C9A227] text-sm mt-0.5 hover:text-[#E8C84A] transition-colors">
                  Fênix Multimarcas Laranjal
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#111] border border-[#1f1f1f] p-8">
          <h2 className="font-oswald text-white text-2xl uppercase mb-2">Envie uma mensagem</h2>
          <p className="text-[#666] text-sm mb-6">Preencha o formulário e entraremos em contato via WhatsApp.</p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              const fd = new FormData(e.currentTarget)
              const text = `Olá! Meu nome é ${fd.get('name')}, fone: ${fd.get('phone')}.\n\nMensagem: ${fd.get('message')}`
              window.open(WHATSAPP_URL(text), '_blank')
            }}
            className="flex flex-col gap-4"
          >
            <div>
              <label className="text-[#666] text-xs uppercase tracking-widest block mb-1.5">Seu nome *</label>
              <input name="name" required placeholder="João Silva"
                className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 text-sm focus:border-[#C9A227] outline-none transition-colors" />
            </div>
            <div>
              <label className="text-[#666] text-xs uppercase tracking-widest block mb-1.5">WhatsApp / Telefone *</label>
              <input name="phone" required placeholder="(99) 99999-9999"
                className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 text-sm focus:border-[#C9A227] outline-none transition-colors" />
            </div>
            <div>
              <label className="text-[#666] text-xs uppercase tracking-widest block mb-1.5">Qual veículo você tem interesse? *</label>
              <textarea name="message" required rows={5}
                placeholder="Estou interessado em um carro para uso diário, preço até R$ 80.000..."
                className="w-full bg-[#0a0a0a] border border-[#333] text-white px-4 py-3 text-sm focus:border-[#C9A227] outline-none transition-colors resize-none" />
            </div>
            <button type="submit"
              className="flex items-center justify-center gap-2 bg-[#C9A227] text-black font-bold py-4 uppercase tracking-wide text-sm hover:bg-[#E8C84A] transition-colors w-full">
              <MessageCircle size={16} /> Enviar via WhatsApp
            </button>
            <p className="text-[#555] text-xs text-center">Você será redirecionado para o WhatsApp com a mensagem pré-preenchida.</p>
          </form>
        </div>
      </div>
    </div>
  )
}
