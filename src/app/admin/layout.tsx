// app/layout.tsx
import '../globals.css'
import type { Metadata } from 'next'
import HeaderTop from '@/components/HeaderTop'
import HeaderMiddle from '@/components/HeaderMiddle'
import HeaderNav from '@/components/HeaderNav'

export const metadata: Metadata = {
  title: 'Monstrao Meias',
  description: 'Distribuidora de meias no atacado',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <HeaderTop />
        <HeaderMiddle />
        <HeaderNav />
        {children}
      </body>
    </html>
  )
}
