import React, { useState } from 'react'
import whatsapp from './../../whatsapp.svg'
import './Whatsapp.css'

export default function Whatsapp() {

  const[isHovering, setIsHovering] = useState(false)

  function handleMouseEnter(e){
    setIsHovering(true)
  }

  function handleMouseOut(){
    setIsHovering(false)
  }

  return (
    <>
    <div className='whatsappLogoContainer rounded' onMouseOver={handleMouseEnter} onMouseLeave={handleMouseOut}>
        <img src={whatsapp} className="whatsappLogo" alt='WhatsappImage'/>
    </div>
    <div className='WhatsAppUsDiv' onMouseOver={handleMouseEnter} onMouseLeave={handleMouseOut}>
    <p className={`WhatsAppUs rounded ${isHovering?'':'d-none'}`} onMouseOver={handleMouseEnter}><a className='whatsappLink' href={'https://api.whatsapp.com/send/?phone=918059629728&text=Hello+%0D%0ARiset+Publication&type=phone_number&app_absent=0'} target="_blank" rel="noreferrer">WhatsApp Us</a></p>
    </div>
    </>
  )
}
