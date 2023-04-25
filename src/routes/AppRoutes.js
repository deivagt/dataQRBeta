import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Other from '../pages/Other/Other';
const AppRoutes = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Other" element={<Other />} />
            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes