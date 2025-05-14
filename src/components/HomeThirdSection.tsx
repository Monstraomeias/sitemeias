// components/HomeThirdSection.tsx

'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HomeThirdSection() {
  return (
    <section className="mt-[40px] flex justify-center gap-[40px]">
      {/* Banner 1 */}
      <Link href="/produtos">
        <Image
          src="/banners/banner1.png"
          alt="Banner 1"
          width={474}
          height={595}
          className="rounded-[16px] cursor-pointer"
        />
      </Link>

      {/* Banner 2 */}
      <Link href="/produtos">
        <Image
          src="/banners/banner2.png"
          alt="Banner 2"
          width={474}
          height={595}
          className="rounded-[16px] cursor-pointer"
        />
      </Link>
    </section>
  )
}
