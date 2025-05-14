// src/app/api/brands/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  try {
    const brand = await prisma.brand.findUnique({
      where: { id },
      include: {
        products: true,
      },
    });

    if (!brand) {
      return NextResponse.json({ error: 'Marca não encontrada' }, { status: 404 });
    }

    const productCount = brand.products.length;

    return NextResponse.json({
      id: brand.id,
      name: brand.name,
      createdAt: brand.createdAt,
      productCount,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Erro ao buscar marca' }, { status: 500 });
  }
}


