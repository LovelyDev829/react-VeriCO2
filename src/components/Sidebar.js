import React from 'react'
import { useNavigate } from 'react-router-dom';

function Sidebar({ sideBarFlag, setSideBarFlag }) {
    const navigate = useNavigate();
    return (
        <div className={sideBarFlag ? 'Sidebar show' : 'Sidebar'} onClick={(e) => { e.stopPropagation() }}>
            <div className='item' onClick={() => {
                setSideBarFlag(false)
                navigate('/')
            }}>Home</div>
            <div className='item' onClick={() => {
                setSideBarFlag(false)
                navigate('/about')
            }}>About Us</div>
            <div className='item' onClick={() => {
                setSideBarFlag(false);
                navigate('/calculation')
            }}>Calculation & Display</div>
            <div className='item' onClick={() => {
                setSideBarFlag(false);
                navigate('/contact-us')
            }}>Contact Us</div>
            <div className='item' onClick={() => {
                setSideBarFlag(false);
                navigate('/signup')
            }}>Sign Up</div>
            <div className='item' onClick={() => {
                setSideBarFlag(false);
                navigate('/login')
            }}>Log In</div>
        </div>
    )
}

export default Sidebar