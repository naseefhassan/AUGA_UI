import React from 'react'
import Logo from '../../assets/Images/Logo.svg'

function Header() {
  return (
    <div>
        <img className='w-32 h-12 mx-4' src={Logo} alt="" />
    </div>
  )
}

export default Header