'use client'

import React from 'react'

const HeaderTop = () => {
  return (
    <div className="w-full h-[40px] bg-[#fafafa] overflow-hidden text-[12px] text-[#929292] font-medium font-['Helvetica Neue', Helvetica, sans-serif] flex items-center">
      <div className="w-max flex animate-marquee space-x-8">
        {[...Array(30)].map((_, idx) => (
          <div key={idx} className="flex items-center gap-1 shrink-0">
            <div className="w-1 h-1 rounded-full bg-[#929292]"></div>
            Somente no Atacado Para todo o Brasil
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeaderTop
