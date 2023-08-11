import React from 'react'
import Header from '../components/Header'
import mainBack from '../assets/images/main-back.jpg'
import earthOnHand from '../assets/images/earth-on-hand.png'
import coTwoBubble from '../assets/images/co2-bubble.png'
import Footer from '../components/Footer'
function MainPage() {
  return (
    <div className='MainPage'>
        <Header/>
        <div className='main'>
            <img src={mainBack} alt="Main Back" className='main-back'/>
            <div className='title-polygon'>
                <span>Automated Scope 3</span>
                <span>Emissions</span>
                <span>Quantification</span>
            </div>
            <img src={earthOnHand} alt="Earth on Hand" className='earth-on-hand'/>
            <div className='bubbles'>
                <img src={coTwoBubble} alt="CO2-bubble" className='co2'/>
                <img src={coTwoBubble} alt="CO2-bubble" className='co2'/>
                <img src={coTwoBubble} alt="CO2-bubble" className='co2'/>
                <img src={coTwoBubble} alt="CO2-bubble" className='co2'/>
                <img src={coTwoBubble} alt="CO2-bubble" className='co2'/>
                <img src={coTwoBubble} alt="CO2-bubble" className='co2'/>
                <img src={coTwoBubble} alt="CO2-bubble" className='co2'/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default MainPage