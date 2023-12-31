import React, { useState } from 'react'
import loginLeft from '../assets/images/login-left.png'
import mainLogo from '../assets/images/header-logo.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

function LoginPage({ SERVER_URL }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const cookies = new Cookies();
  return (
    <div className='LoginPage'>
      <img src={loginLeft} alt="Login Left" className='login-left' />
      <div className='right'>
        <div className='center'>
          <img src={mainLogo} alt="Main Logo" className='main-logo' onClick={() => navigate('/')} />
          <span>Enter your email and password to login</span>
          <div className='input-box'>
            <input type='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className='input-box'>
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <div className='button' onClick={() => {
            if (email === '') setErrorMessage('Please type Email Address.')
            else if (password === '') setErrorMessage('Please type Password.')
            else {
              setErrorMessage('');
              var obj = { email: email, password: password }
              axios.post(SERVER_URL + '/signin', obj)
                .then(res => {
                  console.log(res.data)
                  if (!res.data.success) {
                    cookies.set('token', null, { path: '/' });
                    setErrorMessage(res.data.message)
                  }
                  else {
                    cookies.set('token', res?.data?.accessToken, { path: '/' });
                    setErrorMessage('')
                    navigate('/calculation')
                  }
                })
            }
          }}>Login</div>
          <span className={errorMessage === '' ? 'hidden' : 'error'}>{errorMessage}</span>
          <span onClick={() => navigate('/signup')}>Don't you have an account? Register Now</span>
          <span>Forgot Password? Reset Now</span>
        </div>
      </div>
    </div>
  )
}

export default LoginPage