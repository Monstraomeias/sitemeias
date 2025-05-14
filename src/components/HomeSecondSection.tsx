// components/HomeSecondSection.tsx

'use client'

import Link from 'next/link'

export default function HomeSecondSection() {
  return (
    <section className="mt-[40px] text-center">
      {/* Título */}
      <h2 className="text-[20px] font-bold mb-[11px]">
        AS MELHORES MEIAS DO MERCADO.
      </h2>

      {/* Botões */}
      <div className="flex justify-center gap-[20px]">
        {/* Botão Fale Conosco */}
        <Link
          href="https://wa.me/5511988799864"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[166px] h-[33px] bg-black text-white font-bold text-[16px] flex items-center justify-center no-underline rounded-[16px]"
        >
          FALE CONOSCO
        </Link>

        {/* Botão Saiba Mais */}
        <a
          href="#footer"
          className="w-[166px] h-[33px] bg-black text-white font-bold text-[16px] flex items-center justify-center no-underline rounded-[16px]"
        >
          SAIBA MAIS
        </a>
      </div>
    </section>
  )
}
