import React, { useState } from 'react'
import signupLeft from '../assets/images/signup-left.png'
import mainLogo from '../assets/images/header-logo.png'
import { useNavigate } from 'react-router-dom';

function SignupPage() {
    const navigate = useNavigate();
    // const [dateOfBirth, setDateOfBirth] = useState(null)
    const [fake, setfake] = useState(true)
    const [fake1, setfake1] = useState(true)
    return (
        <div className='SignupPage' onClick={()=>setfake1(true)}>
            <img src={signupLeft} alt="Signup Left" className='signup-left' />
            <div className='right'>
                <div className='center'>
                    <img src={mainLogo} alt="Main Logo" className='main-logo' onClick={()=>navigate('/')}/>
                    <span>Fill the form to create a new account.</span>
                    <div className='input-box'>
                        <input type='text' placeholder='Full Name'></input>
                    </div>
                    <div className='input-box'>
                        <input type='email' placeholder='Email Address'></input>
                    </div>
                    <div className='input-box'>
                        <input type='phone' placeholder='Phone Number'></input>
                    </div>
                    <div className='input-box' onMouseOver={()=>setfake(false)} onMouseLeave={()=>setfake(true)}>
                        <input placeholder="Date of Birth" type={fake && fake1 ? "text": "date"}
                        onClick={(e)=>{
                            e.stopPropagation();
                            setfake1(false)                            
                        }}></input>
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Password'></input>
                    </div>
                    <div className='input-box'>
                        <input type='text' placeholder='Company Name'></input>
                    </div>
                    <div className='button'>Sign Up</div>
                    <span onClick={()=>navigate('/login')}>Already have an acount? Login Now</span>
                </div>
            </div>
        </div>
    )
}

export default SignupPage