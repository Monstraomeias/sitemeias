'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function FooterSectionOne() {
  return (
    <section className="mt-[136px] mb-[60px] px-[136px] w-full">
      {/* Layout principal: dois blocos lado a lado */}
      <div className="flex justify-center gap-[100px]">
        
        {/* BLOCO 1 — TEXTO */}
        <div className="max-w-[600px]">
          {/* Título */}
          <h2 className="text-[40px] font-bold font-['Helvetica Neue', Helvetica, sans-serif] leading-tight">
            Onde os Grandes do<br />Varejo se Abastecem
          </h2>

          {/* Parágrafos */}
          <div className="mt-[40px] space-y-[40px] text-[16px] font-medium font-['Helvetica Neue', Helvetica, sans-serif] text-[#000] leading-relaxed">
            <p>
              Há mais de uma década no coração do Brás, em São Paulo, a Monstrão se consolidou como referência nacional na distribuição de meias premium. Atendendo exclusivamente lojistas de moda em todo o Brasil, somos o elo de confiança entre as principais marcas do mundo e os revendedores que exigem qualidade, variedade e originalidade.
            </p>
            <p>
              Representamos as gigantes do mercado — Nike, Adidas, Puma, Vans e muitas outras — com um portfólio que une autenticidade, estilo e alta performance. Cada produto que passa por aqui carrega o selo das marcas mais desejadas do planeta, garantindo a nossos clientes acesso direto ao que há de melhor e mais procurado.
            </p>
            <p>
              Nossa reputação é construída diariamente com parcerias sólidas, agilidade logística e atendimento especializado. A Monstrão não é apenas uma distribuidora — é uma escolha estratégica para lojistas que querem se destacar no mercado com produtos de giro rápido e margens reais.
            </p>
            <p>
              Se você vende moda, a Monstrão é o seu lugar.
            </p>
          </div>

          {/* Botão igual ao header */}
          <div className="mt-[40px]">
            <a
                href="https://wa.me/5511988799864"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[200px] h-[43px] bg-black text-white rounded-[22px] text-[16px] font-bold flex items-center justify-center no-underline"
            >
                FALE CONOSCO
            </a>
          </div>
        </div>

        {/* BLOCO 2 — IMAGEM */}
        <div className="flex items-start">
          <Image
            src="/footer-img.png" // Substitua pelo caminho correto da imagem
            alt="Imagem institucional"
            width={474}
            height={748}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
