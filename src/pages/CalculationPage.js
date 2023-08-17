import React from 'react'
import Header from '../components/Header'

function CalculationPage({ sideBarFlag, setSideBarFlag }) {
  return (
    <div className='CalculationPage' onClick={() => setSideBarFlag(false)}>
        <Header sideBarFlag={sideBarFlag} setSideBarFlag={setSideBarFlag} />
    </div>
  )
}

export default CalculationPage