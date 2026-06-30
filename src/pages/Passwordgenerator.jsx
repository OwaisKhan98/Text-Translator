import React, { useState } from 'react';
import Navbar from '../components/Home/Navbar.jsx';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Passwordgenerator = () => {
    const [userinput, setUserinput] = useState(12); // Initialized to a reasonable character default
    const [password, setPassword] = useState("");
    const [Navigate, setNavigate] = useState(false);
    
    const Passwordgenerateword = "1234567890+={}[qwertyuiopasdfghjklzxc]:'\\|vbnmQWERTYU<>,.?/IOPLKJHGFDS+={}[AZXCVBNMx";
    const passwordlength = Passwordgenerateword.length;

     useGSAP(() => {
        gsap.from (".pageanimation",{
            opacity: 0,
            duration: 0.7,
        })
    })

    function Generatepassword() {
        const length = parseInt(userinput) || 0;
        if (length <= 0) return;
        
        let generatedPassword = "";
        for (let i = 1; i <= length; i++) {
            const randomindex = Math.floor(Math.random() * passwordlength);
            generatedPassword += Passwordgenerateword[randomindex];
        }
        setPassword(generatedPassword);
    }

    const copytoclipboard = () => {
        if (!password.trim()) return;
        navigator.clipboard.writeText(password);
        setNavigate(true);
        setTimeout(() => setNavigate(false), 2000); // Automatically resets display text state
    };

    return (
        <>
        <div className='w-full h-screen pageanimation'>
            <Navbar />
            <div className="min-h-screen bg-gray-100/50 flex items-center justify-center px-6 pt-28 pb-12">
                <div className="w-full max-w-xl bg-white rounded-[32px] shadow-sm border border-gray-100 p-6 sm:p-10 space-y-6">
                    
                    <div className="space-y-1">
                        <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                            Generate A Secure Password
                        </h3>
                        <p className="text-sm text-gray-400 font-medium">Instant customized local key generation</p>
                    </div>

                    {/* Numeric Input Config block */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider pl-1">Character Length</label>
                        <input 
                            type='number' 
                            min="4"
                            max="64"
                            value={userinput} 
                            onChange={(e) => setUserinput(e.target.value)} 
                            className='w-full bg-gray-100 border border-transparent rounded-full px-5 py-3 text-sm font-medium text-gray-800 outline-none focus:border-gray-200'
                        />
                    </div>

                    {/* Submit Row Action */}
                    <button 
                        id="Generate"
                        onClick={Generatepassword}
                        className="w-full bg-[#E53935] text-white font-medium text-sm py-3.5 rounded-full hover:bg-red-600 transition-all shadow-sm cursor-pointer tracking-tight"
                    >
                        Generate Key
                    </button>

                    {/* Output display layout matching the clean reference entry bars */}
                    {password && (
                        <div className="w-full bg-gray-100 rounded-[24px] p-2 pl-5 flex items-center justify-between border border-transparent animate-fadeIn">
                            <input 
                                type='text' 
                                value={password} 
                                readOnly 
                                className='w-full bg-transparent outline-none pr-4 text-gray-800 font-mono tracking-wider text-sm sm:text-base'
                            />
                            <button 
                                id="Copytocliipboard"
                                onClick={copytoclipboard}
                                className="bg-gray-900 text-white px-5 h-12 rounded-full flex items-center justify-center hover:bg-black transition-all shrink-0 text-xs font-bold tracking-wider shadow-sm cursor-pointer min-w-[90px]"
                            >
                                {Navigate ? "COPIED" : "COPY"}
                            </button>
                        </div>
                    )}

                </div>
            </div>
            </div>
        </>
    );
};

export default Passwordgenerator;