import React from 'react'
import footerBackTop from '../assets/images/footer-back-top.png'
import footerLogo from '../assets/images/footer-logo.png'

import { ReactComponent as FacebookIcon } from '../assets/svg/facebook.svg'
import { ReactComponent as TwitterIcon } from '../assets/svg/twitter.svg'
import { ReactComponent as InstagramIcon } from '../assets/svg/instagram.svg'
import { ReactComponent as LinkedinIcon } from '../assets/svg/linkedin.svg'
import { ReactComponent as MailIcon } from '../assets/svg/mail.svg'

function Footer() {
    return (
        <div className='Footer'>
            <img src={footerBackTop} alt="Footer Back Top" className='footer-back-top'/>
            <div className='details'>
                <img src={footerLogo} alt="Footer Logo" className='footer-logo'/>
                <div className='icons'>
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <InstagramIcon/>
                    <LinkedinIcon/>
                    <MailIcon/>
                </div>
                <span className='term'>National Transaction Corporation is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</span>
                <span className='term'>All right Reversed. Sunlimetech</span>
            </div>            
        </div>
    )
}

export default Footer