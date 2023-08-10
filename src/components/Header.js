import React from 'react'
import headerLine from '../assets/images/header-line.png'
import headerLogo from '../assets/images/header-logo.png'

function Header() {
  return (
    <div className='Header'>
        <div className='white-area'></div>
        <div className='header-logo-line'>
            <img src={headerLine} alt="Header Line" className='header-line'/>
            <img src={headerLogo} alt="Header Logo" className='header-logo'/>
            <div className='buttons'>
                <span>About</span>
                <span>Calculation & Display</span>
                <span>Contact Us</span>
            </div>
        </div>
    </div>
  )
}

export default Header