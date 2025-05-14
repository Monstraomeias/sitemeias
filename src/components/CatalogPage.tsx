'use client'

interface CatalogPageProps {
  brandName: string
  productCount: number
}

const CatalogPage = ({ brandName, productCount }: CatalogPageProps) => {
  return (
    <div className="p-8">
      {/* Caminho percorrido (Breadcrumb) */}
      <div className="ml-[140px] text-sm text-[#707070]">
        Página Inicial / Meias / {brandName}
      </div>

      {/* Título da página */}
      <h1 className="mt-[13px] text-[20px] font-bold text-black">
        Meias {brandName} ({productCount} resultados)
      </h1>
    </div>
  )
}

export default CatalogPage

