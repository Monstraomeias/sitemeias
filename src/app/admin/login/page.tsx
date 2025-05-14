'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (password === 'monstraosecreta') {
      router.push('/admin/dashboard')
    } else {
      setError('Senha incorreta')
    }
  }

  return (
    <div className="p-8 max-w-sm mx-auto mt-20 border rounded shadow">
      <h1 className="text-xl font-bold mb-4">Login da Área Admin</h1>
      <input
        type="password"
        placeholder="Digite a senha"
        className="w-full p-2 border rounded mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button
        onClick={handleLogin}
        className="w-full bg-black text-white py-2 rounded mt-4"
      >
        Entrar
      </button>
    </div>
  )
}
