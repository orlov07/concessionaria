import type { Metadata } from 'next'
import { NavBar } from '@/components/ui/NavBar'
import { Footer } from '@/components/ui/Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Fênix Veículos Laranjal | Multimarcas com as Melhores Taxas',
    template: '%s | Fênix Veículos Laranjal',
  },
  description: 'Compre seu carro com facilidade na Fênix Veículos em Laranjal, MG. Financiamento facilitado via Santander, Itaú, PAN. Melhores taxas, sem entrada.',
  keywords: ['carros usados laranjal', 'multimarcas laranjal mg', 'financiamento veículos', 'fênix veículos'],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://fenixveiculos.com.br',
    siteName: 'Fênix Veículos Laranjal',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Fênix Veículos Laranjal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fênix Veículos Laranjal',
    description: 'Multimarcas com as melhores taxas em Laranjal, MG.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoDealer',
  name: 'Fênix Veículos Laranjal',
  description: 'Multimarcas referência em Laranjal, MG com financiamento facilitado.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Laranjal',
    addressRegion: 'MG',
    addressCountry: 'BR',
  },
  url: 'https://fenixveiculos.com.br',
  sameAs: [
    'https://www.instagram.com/fenix_veiculos_laranjal',
    'https://www.facebook.com/FenixMultimarcasLaranjal',
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0a0a0a] text-white font-inter">
        <NavBar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
