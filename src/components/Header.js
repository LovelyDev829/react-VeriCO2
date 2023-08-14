import React from 'react'
import headerLine from '../assets/images/header-line.png'
import headerLogo from '../assets/images/header-logo.png'
import headerLogoLineMobile from '../assets/images/header-logo-line-mobile.png'
import { ReactComponent as MenuIcon } from '../assets/svg/menu.svg'
import Sidebar from './Sidebar'

function Header({sideBarFlag, setSideBarFlag}) {
  return (
    <div className='Header'>
        <div className='white-area'>
            <div className='buttons'>
                <div className='button'>Login</div>
                <div className='button'>Sign up</div>
            </div>
            <div className='menu-button' onClick={(e)=>{
                e.stopPropagation();
                setSideBarFlag(!sideBarFlag);
            }}>
                <MenuIcon/>
            </div>
        </div>
        <div className='header-logo-line'>
            <img src={headerLine} alt="Header Line" className='header-line'/>
            <img src={headerLogo} alt="Header Logo" className='header-logo'/>
            <div className='buttons'>
                <span>About</span>
                <span>Calculation & Display</span>
                <span>Contact Us</span>
            </div>
        </div>
        <div className='mobile-header'>
            <img src={headerLogoLineMobile} alt="Header Logo Line Mobile" className='header-logo-line-mobile'/>
        </div>
        <Sidebar sideBarFlag={sideBarFlag} setSideBarFlag={setSideBarFlag}/>
    </div>
  )
}

export default Header