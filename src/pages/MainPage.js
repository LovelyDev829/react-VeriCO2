import React from 'react'
import Header from '../components/Header'
import mainBack from '../assets/images/main-back.jpg'
import earthOnHand from '../assets/images/earth-on-hand.png'
// import earthBackHand from '../assets/images/earth-back-hand.png'
// import earthOverHand from '../assets/images/earth-over-hand.png'
// import animEarth from '../assets/gif/earth.gif'
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
            {/* <img src={earthBackHand} alt="Earth back Hand" className='earth-back-hand'/> */}
            {/* <img src={earthOverHand} alt="Earth over Hand" className='earth-over-hand'/> */}
            {/* <img src={animEarth} alt="Earth Animation" className='earth-gif'/> */}
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