import Link from 'next/link'
import { ArrowUpRight, Clock, MapPin, MessageCircle } from 'lucide-react'
import { CONSTANTS, WHATSAPP_URL } from '@/data/constants'

function InstagramGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const quickLinks = [
  { label: 'Estoque', href: '/estoque' },
  { label: 'Financiamento', href: '/financiamento' },
  { label: 'Sobre nos', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
]

export function Footer() {
  return (
    <footer className="border-t border-[#C9A227] bg-[#080808]">
      <div className="section-shell">
        <div className="page-shell py-12">
          <div className="grid gap-10 border-b border-[#1a1a1a] pb-10 lg:grid-cols-[1.2fr_0.7fr_0.8fr_0.9fr]">
            <div>
              <div className="font-oswald text-[34px] font-extrabold uppercase leading-none tracking-[0.08em] text-[#C9A227]">
                Fenix Veiculos
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.35em] text-[#7d6a2a]">Laranjal</div>
              <p className="mt-5 max-w-md text-sm leading-8 text-[#777]">
                Multimarcas com atendimento direto, financiamento facilitado e um projeto visual pronto para apresentacao da Fenix.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href={CONSTANTS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded border border-[#2a2a2a] bg-[#121212] text-[#AAAAAA] transition-colors hover:border-[#C9A227] hover:text-[#C9A227]"
                >
                  <InstagramGlyph />
                </a>
                <a
                  href={CONSTANTS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded border border-[#2a2a2a] bg-[#121212] text-[#AAAAAA] transition-colors hover:border-[#C9A227] hover:text-[#C9A227]"
                >
                  <FacebookGlyph />
                </a>
                <a
                  href={WHATSAPP_URL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded border border-[#2a2a2a] bg-[#121212] text-[#AAAAAA] transition-colors hover:border-[#C9A227] hover:text-[#C9A227]"
                >
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>

            <div>
              <div className="mb-4 text-xs font-extrabold uppercase tracking-[0.3em] text-white">Links</div>
              <nav className="space-y-3">
                {quickLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="block text-sm text-[#666] transition-colors hover:text-[#C9A227]">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <div className="mb-4 text-xs font-extrabold uppercase tracking-[0.3em] text-white">Contato</div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-[#777]">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-[#C9A227]" />
                  <span>{CONSTANTS.address}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#777]">
                  <Clock size={16} className="mt-0.5 shrink-0 text-[#C9A227]" />
                  <span>{CONSTANTS.hours}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#777]">
                  <span className="mt-0.5 shrink-0 text-[#C9A227]">
                    <InstagramGlyph />
                  </span>
                  <span>@fenix_veiculos_laranjal</span>
                </div>
              </div>
            </div>

            <div className="rounded border border-[#1f1f1f] bg-[#111] p-5">
              <div className="text-xs uppercase tracking-[0.28em] text-[#C9A227]">Atendimento rapido</div>
              <p className="mt-4 text-sm leading-7 text-[#777]">
                Use o WhatsApp para simulacao, duvidas sobre estoque e apresentacao do projeto para a loja.
              </p>
              <a
                href={WHATSAPP_URL('Ola! Quero continuar a conversa sobre o projeto da concessionaria.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#C9A227] transition-colors hover:text-[#E8C84A]"
              >
                Chamar no WhatsApp <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-5 text-xs text-[#444] md:flex-row md:items-center md:justify-between">
            <span>© 2026 Fenix Veiculos Laranjal. Todos os direitos reservados.</span>
            <span>
              Desenvolvido por{' '}
              <a href="https://techbild.web.app" target="_blank" rel="noopener noreferrer" className="font-bold text-[#C9A227] no-underline">
                TechBild
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
