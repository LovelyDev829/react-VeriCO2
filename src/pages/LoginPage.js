import React from 'react'
import loginLeft from '../assets/images/login-left.png'
import mainLogo from '../assets/images/header-logo.png'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className='LoginPage'>
      <img src={loginLeft} alt="Login Left" className='login-left' />
      <div className='right'>
        <div className='center'>
          <img src={mainLogo} alt="Main Logo" className='main-logo' />
          <span>Enter your email and password to login</span>
          <div className='input-box'>
            <input type='email' placeholder='Email Address'></input>
          </div>
          <div className='input-box'>
            <input type='password' placeholder='Password'></input>
          </div>
          <div className='button'>Login</div>
          <span onClick={()=>navigate('/signup')}>Don't you have an account? Register Now</span>
          <span>Forgot Password? Reset Now</span>
        </div>
      </div>
    </div>
  )
}

export default LoginPage