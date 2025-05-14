  import { NextResponse } from 'next/server'
  import { prisma } from '@/lib/prisma'

  export async function GET() {
    const brands = await prisma.brand.findMany()
    return NextResponse.json(brands)
  }

  export async function POST(req: Request) {
    const body = await req.json()
    const { name} = body

    if (!name) {
      return NextResponse.json({ error: 'Campos obrigatórios' }, { status: 400 })
    }

    try {
      const newBrand = await prisma.brand.create({
        data: {
          name
        },
      })

      return NextResponse.json(newBrand, { status: 201 })
    } catch (err) {
      console.error(err)
      return NextResponse.json({ error: 'Erro ao criar marca' }, { status: 500 })
    }
  }

