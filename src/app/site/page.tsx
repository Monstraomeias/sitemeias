// pages/home.tsx

'use client'

import HomeBanner from '@/components/HomeBanner'
import HomeSecondSection from '@/components/HomeSecondSection' // Importação do novo componente
import HomeThirdSection from '@/components/HomeThirdSection'
import HomeFourthSection from '@/components/HomeFourthSection'

export default function Home() {
  return (
    <div className="w-full">
      {/* Banner */}
      <HomeBanner />

      {/* Segunda seção */}
      <HomeSecondSection />

      {/* Outras seções da página Home */}
      <section>
      <HomeThirdSection />
      <HomeFourthSection />
      </section>
    </div>
  )
}
