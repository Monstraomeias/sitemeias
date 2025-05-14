'use client'

import Image from 'next/image'

export default function FooterBrands() {
  const logos = [
    { src: '/logos/nike.svg', alt: 'Nike' },
    { src: '/logos/jordan.svg', alt: 'Jordan' },
    { src: '/logos/vans.svg', alt: 'Vans' },
    { src: '/logos/puma.svg', alt: 'Puma' },
    { src: '/logos/adidas.svg', alt: 'Adidas' },
    { src: '/logos/newbalance.svg', alt: 'New Balance' },
  ]

  return (
    <div className="w-full h-[130px] bg-black px-[77px] py-[40px]">
      <div className="flex items-center justify-center gap-40 h-full">
        {logos.map((logo) => (
          <Image
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            width={80}
            height={40}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  )
}

