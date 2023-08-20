import React, { useState } from 'react'
import signupLeft from '../assets/images/signup-left.png'
import mainLogo from '../assets/images/header-logo.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignupPage({SERVER_URL}) {
    const navigate = useNavigate();
    // const [fake, setfake] = useState(true)
    // const [fake1, setfake1] = useState(true)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [consultant, setConsultant] = useState('')
    // const [date, setDate] = useState('')
    const [password, setPassword] = useState('')
    const [company, setCompany] = useState('')

    const [errorMessage, setErrorMessage] = useState('')
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='SignupPage'>
            <img src={signupLeft} alt="Signup Left" className='signup-left' />
            <div className='right'>
                <div className='center'>
                    <img src={mainLogo} alt="Main Logo" className='main-logo' onClick={() => navigate('/')} />
                    <span>Fill the form to open an account,</span><span>discuss your options with a representative or discuss a demo</span>
                    <div className='input-box'>
                        <input type='text' placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className='input-box'>
                        <input type='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className='input-box'>
                        <input type='text' placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                    </div>
                    <div className='input-box'>
                        <input type='consultant' placeholder='Consultant' value={consultant} onChange={(e) => setConsultant(e.target.value)}></input>
                    </div>
                    {/* <div className='input-box' onMouseOver={() => setfake(false)} onMouseLeave={() => setfake(true)}>
                        <input placeholder="Date of Birth" type={fake && fake1 ? "text" : "date"}
                            value={date} onChange={(e) => setDate(e.target.value)}
                            onClick={(e) => {
                                e.stopPropagation();
                                setfake1(false)
                            }}></input>
                    </div> */}
                    <div className='input-box'>
                        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div className='input-box'>
                        <input type='text' placeholder='Company Name' value={company} onChange={(e) => setCompany(e.target.value)}></input>
                    </div>
                    <span className={errorMessage === '' ? 'hidden' : 'error'}>{errorMessage}</span>
                    <div className='button' onClick={() => {
                        if (name === '') setErrorMessage('Please type Full Name.')
                        else if (email === '') setErrorMessage('Please type Email Address.')
                        else if (phone === '') setErrorMessage('Please type Phone Number.')
                        else if (consultant === '') setErrorMessage('Please type Consultant.')
                        // else if (date === '') setErrorMessage('Please choose Date of Birth.')
                        else if (password === '') setErrorMessage('Please type Password.')
                        else if (company === '') setErrorMessage('Please type Company Name.')
                        else {
                            setErrorMessage('')
                            const obj = {
                                name: name,
                                password: password,
                                email: email,
                                consultant: consultant,
                                // birthday: date,
                                phoneNumber: phone,
                                companyName: company
                            }
                            axios.post(SERVER_URL + '/signup', obj)
                                .then(res => {
                                    console.log(res.data);
                                    if (!res.data.success) setErrorMessage(res.data.message)
                                    else setErrorMessage('')
                                })
                        }
                    }}>Sign Up</div>
                    <span onClick={() => navigate('/login')}>Already have an acount? Login Now</span>
                </div>
            </div>
        </div>
    )
}

export default SignupPage