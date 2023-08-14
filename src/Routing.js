import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'

function Routing() {
    const [sideBarFlag, setSideBarFlag] = useState(false)
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route exact path="/" element={<MainPage sideBarFlag={sideBarFlag} setSideBarFlag={setSideBarFlag}/>} />
                <Route exact path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    )
}

export default Routing