'use client'

import React from 'react'

const HeaderMiddle = () => {
  return (
    <div className="w-full h-[80px] bg-white px-[50px] flex items-center justify-between">
      {/* Logo */}
      <div className="text-[30px] text-black font-['Helvetica Neue', Helvetica, sans-serif] font-bold">
        MON$TRÃO
      </div>

      {/* Botão WhatsApp */}
      <a
        href="https://wa.me/5511988799864"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[200px] h-[43px] bg-black text-white rounded-[22px] text-[16px] font-bold flex items-center justify-center no-underline"
      >
        FALE CONOSCO
      </a>
    </div>
  )
}

export default HeaderMiddle
