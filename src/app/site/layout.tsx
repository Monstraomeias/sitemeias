// app/layout.tsx
import '../globals.css'
import type { Metadata } from 'next'
import HeaderTop from '@/components/HeaderTop'
import HeaderMiddle from '@/components/HeaderMiddle'
import HeaderNav from '@/components/HeaderNav'
import FooterSectionOne from '@/components/FooterSectionOne'
import FooterBrands from '@/components/FooterBrands'
import FooterMap from '@/components/FooterMap'

export const metadata: Metadata = {
  title: 'Monstrao Meias',
  description: 'Distribuidora de meias no atacado',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
        <HeaderTop />
        <HeaderMiddle />
        <HeaderNav />
        </header>
        {children}
        <footer>
        <FooterSectionOne />
        <FooterBrands />
        <FooterMap />
        </footer>
      </body>
    </html>
  )
}
