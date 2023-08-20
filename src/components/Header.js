import React from 'react'
// import headerLine from '../assets/images/header-line.png'
import headerLine from '../assets/images/Group 16.png'
import headerLogo from '../assets/images/header-logo.png'
import headerLogoLineMobile from '../assets/images/header-logo-line-mobile.png'
import { ReactComponent as MenuIcon } from '../assets/svg/menu.svg'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom';

function Header({ sideBarFlag, setSideBarFlag }) {
    const navigate = useNavigate();
    return (
        <div className='Header'>
            <div className='white-area'>
                <div className='buttons'>
                    <div className='button' onClick={()=>navigate('/login')}>Login</div>
                    <div className='button' onClick={()=>navigate('/signup')}>Sign up</div>
                </div>
                <div className='menu-button' onClick={(e) => {
                    e.stopPropagation();
                    setSideBarFlag(!sideBarFlag);
                }}>
                    <MenuIcon />
                </div>
            </div>
            <div className='header-logo-line'>
                <img src={headerLine} alt="Header Line" className='header-line' />
                <img src={headerLogo} alt="Header Logo" className='header-logo' onClick={()=>navigate('/')}/>
                <div className='buttons'>
                    <span onClick={()=>navigate('/about')}>About Us</span>
                    <span onClick={()=>navigate('/calculation')}>Calculation & Display</span>
                    <span onClick={()=>navigate('/contact-us')}>Contact Us</span>
                    <span onClick={()=>navigate('/')}>Testimonials</span>
                </div>
            </div>
            <div className='mobile-header'>
                <img src={headerLogoLineMobile} alt="Header Logo Line Mobile" className='header-logo-line-mobile' />
            </div>
            <Sidebar sideBarFlag={sideBarFlag} setSideBarFlag={setSideBarFlag} />
        </div>
    )
}

export default Header