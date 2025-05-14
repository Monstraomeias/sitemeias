'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateCategoryPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/category', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    })

    if (res.ok) {
      setName('')
      setSuccess(true)
      setTimeout(() => {
        router.push('/admin/dashboard')
      }, 1500)
    } else {
      setSuccess(false)
      alert('Erro ao criar categoria.')
    }
  }

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Criar Categoria</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nome da Categoria"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded"
        >
          Cadastrar Categoria
        </button>
        {success && <p className="text-green-600">Categoria cadastrada com sucesso!</p>}
      </form>
    </div>
  )
}
