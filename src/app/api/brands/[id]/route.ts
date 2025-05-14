// src/app/api/brands/[id]/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const brand = await prisma.brand.findUnique({
      where: { id: params.id },
      include: {
        products: true, // você pode trocar isso por count abaixo
      },
    })

    if (!brand) {
      return NextResponse.json({ error: 'Marca não encontrada' }, { status: 404 })
    }

    const productCount = brand.products.length

    return NextResponse.json({
      id: brand.id,
      name: brand.name,
      createdAt: brand.createdAt,
      productCount, // retorna a contagem de produtos
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Erro ao buscar marca' }, { status: 500 })
  }
}
