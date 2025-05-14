'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type Brand = {
  id: string
  name: string
}

type Category = {
  id: string
  name: string
}

export default function CreateProductPage() {
  const router = useRouter()
  const [brands, setBrands] = useState<Brand[]>([])
  const [categories, setCategories] = useState<Category[]>([])

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [mainImage, setMainImage] = useState<File | null>(null)
  const [images, setImages] = useState<FileList | null>(null)
  const [brandId, setBrandId] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bRes, cRes] = await Promise.all([
          fetch('/api/brands'),
          fetch('/api/category')
        ])

        if (!bRes.ok || !cRes.ok) {
          throw new Error('Erro ao buscar dados.')
        }

        const b = await bRes.json()
        const c = await cRes.json()

        setBrands(b)
        setCategories(c)
      } catch (err) {
        console.error('Erro ao carregar marcas/categorias:', err)
        alert('Erro ao carregar marcas ou categorias.')
      }
    }

    fetchData()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    formData.append('brandId', brandId)
    formData.append('categoryId', categoryId)

    if (mainImage) {
      formData.append('mainImage', mainImage)
    }

    if (images) {
      Array.from(images).forEach((img) => {
        formData.append('images', img)
      })
    }

    try {
      const res = await fetch('/api/product', {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) throw new Error('Erro ao cadastrar produto.')

      setSuccess(true)
      setTimeout(() => {
        router.push('/admin/dashboard')
      }, 1500)
    } catch (err) {
      console.error(err)
      alert('Erro ao cadastrar produto.')
    }
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Criar Produto</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" encType="multipart/form-data">
        <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required className="border p-2 rounded" />
        <textarea placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} required className="border p-2 rounded" />
        <input type="file" accept="image/*" onChange={(e) => setMainImage(e.target.files?.[0] || null)} required className="border p-2 rounded" />
        <input type="file" accept="image/*" multiple onChange={(e) => setImages(e.target.files)} className="border p-2 rounded" />

        <select value={brandId} onChange={(e) => setBrandId(e.target.value)} required className="border p-2 rounded">
          <option value="">Selecione a Marca</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>{brand.name}</option>
          ))}
        </select>

        <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required className="border p-2 rounded">
          <option value="">Selecione a Categoria</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>

        <button type="submit" className="bg-blue-600 text-white py-2 rounded">Cadastrar Produto</button>
        {success && <p className="text-green-600">Produto cadastrado com sucesso!</p>}
      </form>
    </div>
  )
}


