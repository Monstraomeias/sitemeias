'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

interface Brand {
  id: string
  name: string
}

export default function HeaderNav() {
  const [brands, setBrands] = useState<Brand[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch('/api/brands') // ou 'brand' dependendo da sua API
        const data = await res.json()
        setBrands(data)
      } catch (error) {
        console.error('Erro ao buscar marcas:', error)
      }
    }

    fetchBrands()
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current
    if (!container) return

    const scrollAmount = 200
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="w-full h-[50px] bg-[#fafafa] px-[113px] flex items-center relative overflow-hidden">
      {/* Botão Esquerda */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-[80px] z-10 bg-white text-black px-2 py-1 shadow-md"
      >
        ◀
      </button>

      {/* Marcas */}
      <div
        ref={scrollRef}
        className="flex space-x-[26px] overflow-x-auto scrollbar-hide scroll-smooth w-full px-10"
      >
        {brands.map((brand) => (
          <Link
            key={brand.id}
            href={`/brands/${brand.id}`} // ajuste aqui se sua rota for /brands/
            className="uppercase text-[16px] font-bold font-['Helvetica Neue', Helvetica, sans-serif] whitespace-nowrap text-black hover:underline"
          >
            {brand.name}
          </Link>
        ))}
      </div>

      {/* Botão Direita */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-[80px] z-10 bg-white text-black px-2 py-1 shadow-md"
      >
        ▶
      </button>
    </div>
  )
}

