import React, { useState } from 'react'
import Header from '../components/Header'
import aboutPageImage from '../assets/images/aboutpage-image.png'
import aboutPageImageTwo from '../assets/images/aboutpage-image-2.png'
import exampleScreenshot from '../assets/images/example-screenshot.png'
import Footer from '../components/Footer'
import { ReactComponent as BusinessIcon1 } from '../assets/svg/business-1.svg'
import { ReactComponent as BusinessIcon2 } from '../assets/svg/business-2.svg'
import { ReactComponent as BusinessIcon3 } from '../assets/svg/business-3.svg'

function AboutPage({ sideBarFlag, setSideBarFlag }) {
  const [itemNumber, setItemNumber] = useState(0)
  return (
    <div className='AboutPage' onClick={() => setSideBarFlag(false)}>
      <Header sideBarFlag={sideBarFlag} setSideBarFlag={setSideBarFlag} />
      {
        itemNumber === 0 ?
          <img src={aboutPageImage} alt="About Page Mage" className='about-page-image' />
          :
          <img src={aboutPageImageTwo} alt="About Page Mage" className='about-page-image two' />
      }
      <div className='selector'>
        <div className='items'>
          <div className={itemNumber === 0 ? 'item selected' : 'item'} onClick={() => setItemNumber(0)}>Overview</div>
          <div className={itemNumber === 1 ? 'item selected' : 'item'} onClick={() => setItemNumber(1)}>Plans and Pricing</div>
        </div>
      </div>
      <div className={itemNumber === 0 ? 'description' : 'hidden'}>
        <div className='text'>
          <div className='row'>
            <div className='column'>
              <span className='title'>Overview</span>
              <span><b>VeriCO₂</b> quantifies scope 3 emissions for reporting entities.</span>
              <span className='title'>How does it work?</span>
              <span>By automating the retrieval of emission factors and consolidating scope 1 and 2 emissions from suppliers.
                    It provides the mandatory scope 3 disclosures necessary for a comprehensive and transparent view of a company's entire scope 3 emissions profile.
                    Along with detailed data, <b>VeriCO₂</b> offers aesthetically pleasing visualisations that enable users to grasp the information easily.</span>
            </div>
            <div className='image-card'>
              <img src={exampleScreenshot} alt="Example Screenshot" className='example-screenshot' />
            </div>
          </div>
          {/* <span className='title'>Phase 2</span>
          <span>In its ambitious Phase 2 rollout, <b>VeriCO₂</b> is set to become an essential tool in the fight against greenwashing.
            It will utilise advanced natural language processing algorithms to critically evaluate companies' annual disclosures
            against the stringent requirements of IFRS S2 standards, focused on climate-related risks and opportunities.
            This rigorous analysis will highlight any deficiencies in disclosure, providing clear guidance on what is missing and
            what must be amended to achieve compliance.</span>

          <span>More than just an analytical tool, <b>VeriCO₂</b> aims to encourage corporate responsibility and environmental integrity.
            By identifying companies with robust carbon disclosure alignment and commendable emissions performance, <b>VeriCO₂</b> sets the
            stage for the fair distribution of environmental credits to those buyers that demonstrate a genuine commitment to sustainability.
            With <b>VeriCO₂</b>, stakeholders can make more informed decisions, fostering a more transparent and accountable business environment.
          </span> */}
        </div>
      </div>
      <div className={itemNumber === 1 ? 'description' : 'hidden'}>
        <div className='pricings'>
          <div className='price-box'>
            <div className='top'>
              <BusinessIcon1 />
              <span className='title'>Corporates</span>
              <span className='price'>$ 2,889</span>
            </div>
            <div className='bottom'>
              <span className='title'>This plan includes:</span>
              <span>- Unlimited Platform Access 1Yr</span>
              <span>- Automated scope 3 emissions quantification for mandatory reporting</span>
              <span>- Exportable Reports</span>
              <span>- Facilitated Onboarding</span>
              <span>- Email Support</span>
            </div>
          </div>
          <div className='price-box'>
            <div className='top'>
              <BusinessIcon2 />
              <span className='title'>Consultants</span>
              <span className='price'>$ 5,000</span>
            </div>
            <div className='bottom'>
              <span className='title'>This plan includes:</span>
              <span>- Unlimited Platform Access 1Yr</span>
              <span>- Automated scope 3 emissions quantification for mandatory reporting</span>
              <span>- Exportable Reports</span>
              <span>- Facilitated Onboarding</span>
              <span>- Email Support</span>
            </div>
          </div>
          <div className='price-box'>
            <div className='top'>
              <BusinessIcon3 />
              <span className='title'>Regulatory Bodies</span>
              <span className='price'>$ 30,000</span>
            </div>
            <div className='bottom'>
              <span className='title'>This plan includes:</span>
              <span>- Unlimited Platform Access 1Yr</span>
              <span>- Automated scope 3 emissions quantification for mandatory reporting</span>
              <span>- Exportable Reports</span>
              <span>- Facilitated Onboarding</span>
              <span>- Email Support</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage