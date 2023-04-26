import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Scanner from '../pages/Scanner/Scanner';
import Datos from '../pages/Datos/Datos';
const AppRoutes = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Leer" element={<Scanner />} />
                <Route exact path="/Datos" element={<Datos />} />
            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes