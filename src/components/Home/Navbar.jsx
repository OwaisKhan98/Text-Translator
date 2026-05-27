import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
            <div className="fixed z-50  w-full flex justify-between px-7.5 py-4.5 pop-font font-bold block border-b-2 
        border-[#f40000] hover:border-[#f4769b] duration-200 ease-in-out">
                <div>
                    <p>Logo</p>
                </div>
                <div>
                    <ul className="flex gap-10 px-5">
                        <Link to='/'><li className="transition-all hover:scale-104 hover:-translate-y-0.5 hover:text-[#f40000] hover:cursor-pointer duration-150 ease-in-out">
                            Home</li></Link>
                        <Link to='/Translator' className="transition-all hover:scale-104 hover:-translate-y-0.5 hover:text-[#f40000] hover:cursor-pointer duration-150 ease-in-out">
                            Translator</Link>
                        <Link to='/Password_Generator' className="transition-all hover:scale-104 hover:-translate-y-0.5 hover:text-[#f40000] hover:cursor-pointer duration-150 ease-in-out">
                            Password Generator</Link>
                        <li className="transition-all hover:scale-104 hover:-translate-y-0.5 hover:text-[#f40000] hover:cursor-pointer duration-150 ease-in-out">About Me</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;