import React from 'react'
import Header from '../components/Header'
import exampleChart from '../assets/images/example-chart.png'
import Footer from '../components/Footer'

function DisplayPage() {
    return (
        <div className='DisplayPage'>
            <Header />
            <div className='container'>
                <div className='cards'>
                    <div className='card'>
                        <div className='items'>
                            <div className='item'>
                                <span>Emissions</span>
                                <span>(t co2e)</span>
                            </div>
                            <div className='item'>
                                <span>TOTAL EMISSIONS</span>
                                <span>(DEC 2021 - NOV 2022)</span>
                                <span>505,775.37 tCO2e</span>
                            </div>
                            <div className='item'>
                                <span>PREVIOUS PERIOD NET EMISSIONS</span>
                                <span>(DEC 2021 - NOV 2022)</span>
                                <span>491,536.08 tCO2e</span>
                            </div>
                            <div className='item'>
                                <span>VARIANCE</span>
                                <span>(14,239.3 T CO2E)</span>
                                <span>2.89%</span>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='title'>Emission by Period</div>
                        <div className='chart'>
                            <img src={exampleChart} alt="Example Chart" className='example-chart' />
                        </div>
                        <div className='button'>Download PDF</div>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default DisplayPage