import type { Metadata } from 'next'
import { Footer } from '@/components/ui/Footer'
import { NavBar } from '@/components/ui/NavBar'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://concessionaria-five.vercel.app'),
  title: {
    default: 'Fenix Veiculos Laranjal | Multimarcas com as Melhores Taxas',
    template: '%s | Fenix Veiculos Laranjal',
  },
  description: 'Projeto de concessionaria para a Fenix Veiculos em Laranjal, MG, com destaque para estoque, financiamento e contato direto.',
  keywords: ['concessionaria', 'carros usados laranjal', 'multimarcas laranjal mg', 'financiamento veiculos', 'fenix veiculos'],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://concessionaria-five.vercel.app',
    siteName: 'Fenix Veiculos Laranjal',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Fenix Veiculos Laranjal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fenix Veiculos Laranjal',
    description: 'Projeto visual de concessionaria com foco em estoque, financiamento e contato direto.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoDealer',
  name: 'Fenix Veiculos Laranjal',
  description: 'Projeto visual de concessionaria com financiamento facilitado e estoque em destaque.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Laranjal',
    addressRegion: 'MG',
    addressCountry: 'BR',
  },
  url: 'https://concessionaria-five.vercel.app',
  sameAs: ['https://www.instagram.com/fenix_veiculos_laranjal', 'https://www.facebook.com/FenixMultimarcasLaranjal'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-[#0a0a0a] font-inter text-white">
        <NavBar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
