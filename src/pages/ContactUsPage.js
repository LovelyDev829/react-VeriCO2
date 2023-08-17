import React from 'react'
import Header from '../components/Header'

function ContactUsPage({ sideBarFlag, setSideBarFlag }) {
  return (
    <div className='ContactUsPage' onClick={() => setSideBarFlag(false)}>
        <Header sideBarFlag={sideBarFlag} setSideBarFlag={setSideBarFlag} />
    </div>
  )
}

export default ContactUsPage