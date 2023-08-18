import React from 'react'
import Header from '../components/Header'
import { ReactComponent as HomeIcon } from '../assets/svg/home.svg'
import { ReactComponent as PhoneIcon } from '../assets/svg/phone.svg'
import { ReactComponent as MailIcon } from '../assets/svg/mail.svg'
import { ReactComponent as LinkIcon } from '../assets/svg/link.svg'
import Footer from '../components/Footer'

function ContactUsPage({ sideBarFlag, setSideBarFlag }) {
  return (
    <div className='ContactUsPage' onClick={() => setSideBarFlag(false)}>
      <Header sideBarFlag={sideBarFlag} setSideBarFlag={setSideBarFlag} />
      <div className='main'>
        {/* <img src={contactUsBack} alt="Contact Us Back" className='contact-us-back' /> */}
        <div className='card-container'>
          <div className='card'>
            <div className='main'>
              <div className='left'>
                <span className='title'>Contact Us</span>
                <div className='item'>
                  <HomeIcon />
                  <span className='sub-title'>Address</span>
                  <span className='description'>Your Company Address</span>
                </div>
                <div className='item'>
                  <PhoneIcon />
                  <span className='sub-title'>Phone</span>
                  <span className='description'>+1 234 567 8900</span>
                </div>
                <div className='item'>
                  <MailIcon />
                  <span className='sub-title'>Email</span>
                  <span className='description'>support@verico2.com</span>
                </div>
                <div className='item'>
                  <LinkIcon />
                  <span className='sub-title'>Website</span>
                  <span className='description'>www.verico2.com</span>
                </div>
              </div>
              <div className='right'>
                <div className='input-box'>
                  <input type='text' placeholder='Full Name'></input>
                </div>
                <div className='input-box'>
                  <input type='email' placeholder='Email'></input>
                </div>
                <div className='input-box'>
                  <input type='phone' placeholder='Phone Number'></input>
                </div>
                <div className='input-box'>
                  <textarea type='text' placeholder='Your Message Here...'></textarea>
                </div>
                <div className='button'>Send</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ContactUsPage