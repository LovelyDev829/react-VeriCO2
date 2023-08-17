import React, { useState } from 'react'
import Header from '../components/Header'
import aboutPageImage from '../assets/images/aboutpage-image.png'
import aboutPageImageTwo from '../assets/images/aboutpage-image-2.png'
import Footer from '../components/Footer'
import { ReactComponent as BusinessIcon1 } from '../assets/svg/business-1.svg'
import { ReactComponent as BusinessIcon2 } from '../assets/svg/business-2.svg'
import { ReactComponent as BusinessIcon3 } from '../assets/svg/business-3.svg'

function AboutPage({ sideBarFlag, setSideBarFlag }) {
  const [itemNumber, setItemNumber] = useState(0)
  return (
    <div className='AboutPage'>
      <Header sideBarFlag={sideBarFlag} setSideBarFlag={setSideBarFlag} />
      {
        itemNumber === 0 ?
          <img src={aboutPageImage} alt="About Page Mage" className='about-page-image' />
          :
          <img src={aboutPageImageTwo} alt="About Page Mage" className='about-page-image two' />
      }
      <div className='selector'>
        <div className='items'>
          <div className={itemNumber === 0 ? 'item selected' : 'item'} onClick={() => setItemNumber(0)}>OverView</div>
          <div className={itemNumber === 1 ? 'item selected' : 'item'} onClick={() => setItemNumber(1)}>Plans and Pricing</div>
        </div>
      </div>
      <div className={itemNumber === 0 ? 'description' : 'hidden'}>
        <div className='text'>
          <span>VeriCO2 is a cutting-edge proprietary technology that specialises in the efficient quantification of scope 3 emissions.
            By automating the retrieval of emission factors and consolidating scope 1 and 2 emissions from suppliers, it provides
            a comprehensive and transparent view of a company's entire scope 3 emissions profile.
            Along with detailed data, VeriCO2 offers aesthetically pleasing visualisations that enable users to grasp the information easily.</span>

          <span>In its ambitious Phase 2 rollout, VeriCO2 is set to become an essential tool in the fight against greenwashing.
            It will utilise advanced natural language processing algorithms to critically evaluate companies' annual disclosures
            against the stringent requirements of IFRS S2 standards, focused on climate-related risks and opportunities.
            This rigorous analysis will highlight any deficiencies in disclosure, providing clear guidance on what is missing and
            what must be amended to achieve compliance.</span>

          <span>More than just an analytical tool, VeriCO2 aims to encourage corporate responsibility and environmental integrity.
            By identifying companies with robust carbon disclosure alignment and commendable emissions performance, VeriCO2 sets the
            stage for the fair distribution of environmental credits to those buyers that demonstrate a genuine commitment to sustainability.
            With VeriCO2, stakeholders can make more informed decisions, fostering a more transparent and accountable business environment.
          </span>
        </div>
      </div>
      <div className={itemNumber === 1 ? 'description' : 'hidden'}>
        <div className='pricings'>
          <div className='price-box'>
            <div className='top'>
              <BusinessIcon1/>
              <span className='title'>Corporates</span>
              <span className='price'>$ 2,889</span>
            </div>
            <div className='bottom'>
              <span className='title'>This plan includes:</span>
              <span>Unlimited Platform Access 1Yr</span>
              <span>Automated Scope 3 carbon accounting</span>
              <span>PDF Report Printout</span>
              <span>Facilitated Onboarding</span>
              <span>Email Support</span>
            </div>
          </div>
          <div className='price-box'>
            <div className='top'>
              <BusinessIcon2/>
              <span className='title'>Consultants</span>
              <span className='price'>$ 5,000</span>
            </div>
            <div className='bottom'>
              <span className='title'>This plan includes:</span>
              <span>Unlimited Platform Access 1Yr</span>
              <span>Automated Scope 3 carbon accounting</span>
              <span>PDF Report Printout</span>
              <span>Facilitated Onboarding</span>
              <span>Email Support</span>
            </div>
          </div>
          <div className='price-box'>
            <div className='top'>
              <BusinessIcon3/>
              <span className='title'>Regulatory Bodies</span>
              <span className='price'>$ 30,000</span>
            </div>
            <div className='bottom'>
              <span className='title'>This plan includes:</span>
              <span>Unlimited Platform Access 1Yr</span>
              <span>Automated Scope 3 carbon accounting</span>
              <span>PDF Report Printout</span>
              <span>Facilitated Onboarding</span>
              <span>Email Support</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage