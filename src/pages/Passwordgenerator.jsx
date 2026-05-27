import React, { useState } from 'react'
import Navbar from '../components/Home/Navbar.jsx';
import { LoaderCircle } from 'lucide-react';

const Passwordgenerator = () => {
    const [userinput, setUserinput] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [Navigate, setNavigate] = useState(false);
    const Passwordgenerateword = "1234567890+={}[qwertyuiopasdfghjklzxc]:";'\|vbnmQWERTYU<>,.?/IOPLKJHGFDS+={}[AZXCVBNMx'
    var generatedPassword = " "
    const passwordlength = (Passwordgenerateword.length);

    function Generatepassword() {

        for (let i = 1; i <= userinput; i++) {
            const randomindex = Math.floor(Math.random() * passwordlength);
            generatedPassword += Passwordgenerateword[randomindex];
        };
        setPassword(generatedPassword);
    };

    const copytoclipboard = () => {
        navigator.clipboard.writeText(password);
        if(Navigate==true){
        setNavigate(false);
        }else{
            setNavigate(true);
        }
        
    };
    return (
        <>
            <Navbar />
            <div className="h-screen flex justify-center p-5">
                <div className="max-w-[30%] transition-all mt-20 shadow-[0_4px_10px_rgba(0,0,0,0.10)] duration-200 ease-in-out p-5 rounded-xl hover:border-[#f44e3f] border-[#c2c4c2] border-2 w-[40%] flex flex-col text-center item-center gap-5">
                    <h3 className="mt-5 space-font text-3xl mb-4">Password Generator</h3>
                    <input type='number' value={userinput} onChange={(e) => setUserinput(e.target.value)} className='p-3 h-10 rounded border-[#c2c4c2] border-2 mb-2'></input>
                    <button id="Generate"
                        onClick={Generatepassword}
                        className="flex justify-center mb-5 transation-all hover:scale-101 hover:shadow-[0_1px_5px_rgba(0,0,0,0.50)] hover:cursor-pointer duration-100 ease-in bg-[#f40000] inter-font text-white border-[#c2c4c2] border-1 p-2 rounded">
                        Generate </button>
                    <input type='text' value={password} readOnly className='overflow-auto p-3 h-20 rounded border-[#c2c4c2] border-2 '>
                    
                    </input>
                    <button id="Copytocliipboard"
                        onClick={copytoclipboard}
                        className="flex justify-center mb-5 transation-all hover:scale-101 hover:shadow-[0_1px_5px_rgba(0,0,0,0.50)] hover:cursor-pointer duration-100 ease-in bg-[#f40000] inter-font text-white border-[#c2c4c2] border-1 p-2 rounded">
                         {Navigate?"COPIED":"COPY"}</button>
                </div>
            </div>
        </>
    )
}

export default Passwordgenerator;