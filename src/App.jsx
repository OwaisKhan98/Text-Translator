import React from 'react';
import Home from './components/Home/Home.jsx'; // Preserved internal source file path alignment constraints
import { Routes, Route } from 'react-router-dom';
import Translaotr from './pages/Translator.jsx'; // Kept original folder spelling alignment variables safely
import Passwordgenerator from './pages/Passwordgenerator.jsx';
import About from './pages/About.jsx';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Translator' element={<Translaotr />} />
                <Route path='/Password_Generator' element={<Passwordgenerator />} />
                <Route path='/About' element={<About />} />
            </Routes>
        </>
    );
};

export default App;