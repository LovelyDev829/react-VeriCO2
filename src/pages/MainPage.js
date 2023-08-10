import React from 'react'
import Header from '../components/Header'
import mainBack from '../assets/images/main-back.jpg'
import earthOnHand from '../assets/images/earth-on-hand.png'
import coTwo1 from '../assets/images/co2-1.png'
import coTwo2 from '../assets/images/co2-2.png'
import Footer from '../components/Footer'
function MainPage() {
  return (
    <div className='MainPage'>
        <Header/>
        <div className='main'>
            <img src={mainBack} alt="Main Back" className='main-back'/>
            <div className='title-polygon'>
                <span>Website for Automated</span>
                <span>Scope 3 Emissions</span>
                <span>Quantification</span>
            </div>
            <img src={earthOnHand} alt="Earth on Hand" className='earth-on-hand'/>
            <div className='bubbles'>
                <img src={coTwo1} alt="CO2-1" className='co2'/>
                <img src={coTwo1} alt="CO2-1" className='co2'/>
                <img src={coTwo1} alt="CO2-1" className='co2'/>
                <img src={coTwo1} alt="CO2-1" className='co2'/>
                <img src={coTwo1} alt="CO2-1" className='co2'/>
                <img src={coTwo2} alt="CO2-2" className='co2'/>
                <img src={coTwo2} alt="CO2-2" className='co2'/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default MainPage