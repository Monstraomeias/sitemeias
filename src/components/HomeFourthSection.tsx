// components/HomeFourthSection.tsx

'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HomeFourthSection() {
  return (
    <section className="mt-[40px] flex justify-center gap-[40px]">
      {/* Banner 1 */}
      <Link href="/produtos">
        <Image
          src="/banners/banner3.png"
          alt="Banner 3"
          width={376}
          height={491}
          className="rounded-[16px] cursor-pointer"
        />
      </Link>

      {/* Banner 2 */}
      <Link href="/produtos">
        <Image
          src="/banners/banner4.png"
          alt="Banner 4"
          width={376}
          height={491}
          className="rounded-[16px] cursor-pointer"
        />
      </Link>

      {/* Banner 3 */}
      <Link href="/produtos">
        <Image
          src="/banners/banner5.png"
          alt="Banner 5"
          width={376}
          height={491}
          className="rounded-[16px] cursor-pointer"
        />
      </Link>
    </section>
  )
}
