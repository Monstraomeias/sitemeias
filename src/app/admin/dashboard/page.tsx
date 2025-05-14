'use client'

import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const router = useRouter()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Painel Admin</h1>
      <div className="flex flex-col gap-4 max-w-sm">
        <button
          onClick={() => router.push('/admin/brand')}
          className="bg-blue-600 text-white p-3 rounded"
        >
          Criar Marca
        </button>
        <button
          onClick={() => router.push('/admin/category')}
          className="bg-green-600 text-white p-3 rounded"
        >
          Criar Categoria
        </button>
        <button
          onClick={() => router.push('/admin/product')}
          className="bg-purple-600 text-white p-3 rounded"
        >
          Criar Produto
        </button>
      </div>
    </div>
  )
}
