import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  const formData = await req.formData()

  const name = formData.get('name') as string
  const description = formData.get('description') as string
  const brandId = formData.get('brandId') as string
  const categoryId = formData.get('categoryId') as string

  const mainImageFile = formData.get('mainImage') as File
  const imageFiles = formData.getAll('images') as File[]

  if (!name || !mainImageFile || !brandId || !categoryId) {
    return NextResponse.json({ error: 'Campos obrigatórios faltando' }, { status: 400 })
  }

  const saveFile = async (file: File) => {
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const fileName = `${Date.now()}_${file.name}`
    const filePath = path.join(process.cwd(), 'public', 'uploads', fileName)
    await writeFile(filePath, buffer)
    return fileName
  }

  try {
    const mainImageName = await saveFile(mainImageFile)
    const otherImageNames = await Promise.all(imageFiles.map(saveFile))

    const product = await prisma.product.create({
      data: {
        name,
        description,
        mainImage: mainImageName,
        images: otherImageNames,
        brandId,
        categoryId,
      },
    })

    return NextResponse.json(product, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Erro ao criar produto' }, { status: 500 })
  }
}

