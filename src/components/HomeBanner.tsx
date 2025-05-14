// components/HomeBanner.tsx

'use client'

import Link from 'next/link'

export default function HomeBanner() {
  return (
    <section className="mt-[40px] flex justify-center">
      <Link href="/todos-os-produtos">
        <div className="w-[1160px] h-[595px] rounded-[16px] overflow-hidden cursor-pointer">
          <img
            src="/banner-home.png" // Substitua pelo caminho da sua imagem de banner
            alt="Banner de Produtos"
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
    </section>
  )
}
