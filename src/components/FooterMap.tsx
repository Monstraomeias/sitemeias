// components/footer/FooterMap.tsx
// components/footer/FooterMap.tsx

'use client'

export default function FooterMap() {
  return (
    <div className="w-full h-[400px]">
      <iframe
        className="w-full h-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.789397881933!2d-46.622089324843294!3d-23.54007597881449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58e24c79e883%3A0xc499e3fd442a89af!2sShopping%20Meia%20Noite!5e0!3m2!1sen!2sbr!4v1746542867150!5m2!1sen!2sbr"
        title="Localização da loja"
        loading="lazy"
      ></iframe>
    </div>
  )
}

