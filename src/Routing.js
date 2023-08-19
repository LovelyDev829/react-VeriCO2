import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import SignupPage from './pages/SignupPage'
import AboutPage from './pages/AboutPage'
import CalculationPage from './pages/CalculationPage'
import ContactUsPage from './pages/ContactUsPage'
import DisplayPage from './pages/DisplayPage'

function Routing() {
    const [sideBarFlag, setSideBarFlag] = useState(false)
    const SERVER_URL = 'http://10.10.11.11:4000/api';
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route exact path="/" element={<MainPage sideBarFlag={sideBarFlag} setSideBarFlag={setSideBarFlag}/>}/>
                <Route exact path="/about" element={<AboutPage sideBarFlag={sideBarFlag} setSideBarFlag={setSideBarFlag}/>} />
                <Route exact path="/calculation" element={<CalculationPage sideBarFlag={sideBarFlag} setSideBarFlag={setSideBarFlag}/>} />
                <Route exact path="/display" element={<DisplayPage sideBarFlag={sideBarFlag} setSideBarFlag={setSideBarFlag}/>} />
                <Route exact path="/contact-us" element={<ContactUsPage sideBarFlag={sideBarFlag} setSideBarFlag={setSideBarFlag}/>} />
                <Route exact path="/login" element={<LoginPage  SERVER_URL={SERVER_URL}/>} />
                <Route exact path="/signup" element={<SignupPage SERVER_URL={SERVER_URL}/>} />
            </Routes>
        </Router>
    )
}

export default Routing