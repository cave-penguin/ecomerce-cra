import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Main from './pages/Main'
import Header from './components/Header'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route />
                <Route />
            </Routes>
        </BrowserRouter>
    )
}

export default App
