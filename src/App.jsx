import React from 'react';
import Home from './components/Home/Home.jsx'
import {Routes, Route} from 'react-router-dom'
import Translaotr from './pages/Translator.jsx';

function App() {
    return(
    <>
        <Routes>
            <Route path='/' element= {<Home />}/>
            <Route path='/Translator' element={<Translaotr />} />
            
        </Routes>
        
    </>
    );
};

export default App;