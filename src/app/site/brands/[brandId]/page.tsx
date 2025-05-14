// src/app/site/brands/[brandId]/page.tsx
import { notFound } from 'next/navigation'

type BrandPageProps = {
  params: {
    brandId: string
  }
}

type Brand = {
  id: string
  name: string
  createdAt: string
  productCount?: number
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { brandId } = params

  const res = await fetch(`http://localhost:3000/api/brands/${brandId}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    return notFound()
  }

  const brand: Brand = await res.json()

  return (
    <div className="px-[140px] mt-8">
      <p className="text-[14px] text-[#707070]">Página Inicial / Meias / {brand.name}</p>
      <h1 className="mt-[13px] text-[20px] font-bold text-black">
        Meias {brand.name} ({brand.productCount ?? 0})
      </h1>
    </div>
  )
}







