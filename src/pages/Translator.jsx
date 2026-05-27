import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Home/Navbar";
import { LoaderCircle } from 'lucide-react';

const apikey = import.meta.env.VITE_API_KEY;

function Translaotr(){
    const [text, setText] = useState(" ");
    const [lang, setLang] = useState(" ");
    const [output, setOutput] = useState(" ");
    const [loader, setLoader] = useState(false);
    
const Translaotrapi = async() => {

 setLoader(true);
try {
const options = {
  method: 'POST',
  url: 'https://google-translator9.p.rapidapi.com/v2',
  headers: {
    'x-rapidapi-key': apikey,
    'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    q: `${text}`,
    source: 'en',
    target: `${lang}`,
    format: 'text'
  }
};

	const response = await axios.request(options);
    setLoader(false);
    setOutput(response.data?.data.translations?.[Number(0)]?.translatedText);
} catch (error) {
	console.error(error.response.data?.data);
}

};
    
    return(
        <>
            <Navbar />
            <div className="h-auto flex justify-center p-5">
                <div className="transition-all mt-20 shadow-[0_4px_10px_rgba(0,0,0,0.10)] duration-200 ease-in-out p-5 rounded-xl hover:border-[#f44e3f] border-[#c2c4c2] border-2 w-[40%] flex flex-col text-center item-center justify-center gap-5">
                <h2 className="mt-5 space-font text-3xl mb-4">Text Translator</h2>
                <textarea name="text" placeholder="Enter Text Here." className="h-[15vh] border-[#c2c4c2] border-1 rounded p-2" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                <textarea value={output} name="text" placeholder="Translate Text Here..." className="h-[15vh] border-[#c2c4c2] border-1 rounded p-2"></textarea>
                <select name="value" onChange={(e) => setLang(e.target.value)} className="border-[#c2c4c2] border-1 rounded p-1 mt-2 mb-2">
                    <option value="select">Select Language</option>
                    <option value="hi">Hindi</option>
                    <option value="Bn">Bengali</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="ja">Japanese</option>
                </select>
                <button onClick={Translaotrapi} id="translate" 
                className="flex justify-center mb-10 transation-all hover:scale-101 hover:shadow-[0_1px_5px_rgba(0,0,0,0.50)] hover:cursor-pointer duration-100 ease-in bg-[#f40000] inter-font text-white border-[#c2c4c2] border-1 p-2 rounded">
                {loader? <LoaderCircle className="animate-spin"/>: "Translate"}</button>
                </div>
            </div>
        </>
    )
}

export default Translaotr;