import React from 'react'
import signupLeft from '../assets/images/signup-left.png'
import mainLogo from '../assets/images/header-logo.png'
import { useNavigate } from 'react-router-dom';

function SignupPage() {
    const navigate = useNavigate();
    return (
        <div className='SignupPage'>
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
                    <div className='input-box'>
                        <span>Date of Birth</span>
                        <input type='date' placeholder='Date of Birth'></input>
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