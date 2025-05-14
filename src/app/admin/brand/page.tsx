'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateBrandPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [logo, setLogo] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/brand', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, logo }),
    })

    if (res.ok) {
      setName('')
      setLogo('')
      setSuccess(true)
      setTimeout(() => {
        router.push('/admin/dashboard')
      }, 1500)
    } else {
      setSuccess(false)
      alert('Erro ao criar marca.')
    }
  }

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Criar Marca</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nome da Marca"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded"
        >
          Cadastrar Marca
        </button>
        {success && <p className="text-green-600">Marca cadastrada com sucesso!</p>}
      </form>
    </div>
  )
}
