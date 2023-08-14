import React from 'react'

function Sidebar({sideBarFlag, setSideBarFlag}) {
  return (
    <div className={sideBarFlag ? 'Sidebar show':'Sidebar'} onClick={(e)=>{e.stopPropagation()}}>
        <div className='item' onClick={()=>setSideBarFlag(false)}>About</div>
        <div className='item' onClick={()=>setSideBarFlag(false)}>Calculation & Display</div>
        <div className='item' onClick={()=>setSideBarFlag(false)}>Contact Us</div>
        <div className='item' onClick={()=>setSideBarFlag(false)}>Sign Up</div>
        <div className='item' onClick={()=>setSideBarFlag(false)}>Log In</div>
    </div>
  )
}

export default Sidebar