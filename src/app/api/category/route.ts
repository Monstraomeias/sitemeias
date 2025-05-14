import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const categories = await prisma.category.findMany()
  return NextResponse.json(categories)
}

export async function POST(req: Request) {
  const body = await req.json()
  const { name } = body

  if (!name) {
    return NextResponse.json({ error: 'Nome da categoria é obrigatório' }, { status: 400 })
  }

  try {
    const newCategory = await prisma.category.create({
      data: { name },
    })
    return NextResponse.json(newCategory, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Erro ao criar categoria' }, { status: 500 })
  }
}
