import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  const { pathname } = new URL(request.url)

  // pathname será algo como /api/brands/123
  const id = pathname.split('/').pop()  // pega o último pedaço da URL

  if (!id) {
    return NextResponse.json({ error: 'ID não fornecido' }, { status: 400 })
  }

  try {
    // Buscar a marca com o id
    const brand = await prisma.brand.findUnique({
      where: { id },
      include: { products: true }
    })

    if (!brand) {
      return NextResponse.json({ error: 'Marca não encontrada' }, { status: 404 })
    }

    const productCount = brand.products.length

    return NextResponse.json({
      id: brand.id,
      name: brand.name,
      createdAt: brand.createdAt,
      productCount,
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Erro ao buscar marca' }, { status: 500 })
  }
}





