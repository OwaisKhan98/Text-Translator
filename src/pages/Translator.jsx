import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Home/Navbar";
import { LoaderCircle } from 'lucide-react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Translator() {
    const [text, setText] = useState("");
    const [lang, setLang] = useState("select");
    const [output, setOutput] = useState("");
    const [loader, setLoader] = useState(false);

    useGSAP(() => {
        gsap.from(".pageanimation", {
            opacity: 0,
            duration: 0.7,
        });
    });

    const runTranslationApi = async () => {
        if (!text.trim() || lang === "select") return;
        setLoader(true);
        try {
            // Uses standard absolute routing fallback dynamically on Vercel deployment
            const response = await axios.post("/api/translator", {
                text,
                lang,
            });
            setLoader(false);
            
            // Safe fallback extraction matching RapidAPI response payload wrappers
            const translatedText = response.data?.data?.translations?.[0]?.translatedText 
                                || response.data?.translations?.[0]?.translatedText 
                                || "";
            setOutput(translatedText);
        } catch (error) {
            console.error("API Error: ", error.response?.data || error.message);
            setLoader(false);
        }
    };

    return (
        <div className="w-full h-screen pageanimation">
            <Navbar />
            <div className="min-h-screen bg-gray-100/50 flex items-center justify-center px-6 pt-28 pb-12">
                <div className="w-full max-w-xl bg-white rounded-[32px] shadow-sm border border-gray-100 p-6 sm:p-10 space-y-6">
                    
                    <div className="space-y-1">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                            Get A Quick, Free Translation
                        </h2>
                        <p className="text-sm text-gray-400 font-medium">Source Language: English</p>
                    </div>

                    <div className="w-full bg-gray-100 rounded-[24px] p-2 pl-5 flex items-center justify-between border border-transparent focus-within:border-gray-200 transition-all">
                        <textarea 
                            name="text" 
                            placeholder="Enter your text here..." 
                            className="w-full h-12 bg-transparent outline-none pr-4 text-gray-800 placeholder-gray-400 text-sm sm:text-base resize-none py-3" 
                            value={text} 
                            onChange={(e) => setText(e.target.value)}
                        />
                        <button 
                            onClick={runTranslationApi} 
                            id="translate"
                            disabled={loader}
                            className="bg-[#E53935] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-600 transition-all shrink-0 shadow-md cursor-pointer disabled:opacity-70"
                        >
                            {loader ? (
                                <LoaderCircle className="animate-spin w-5 h-5" />
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 translate-x-[-0.5px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.769 59.769 0 0121.485 12 59.768 59.768 0 013.27 20.875L5.999 12zm0 0h7.5" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider pl-1">Target Language</label>
                        <div className="relative">
                            <select 
                                name="value" 
                                value={lang}
                                onChange={(e) => setLang(e.target.value)} 
                                className="w-full bg-gray-100 border border-transparent rounded-full px-5 py-3 text-sm font-medium text-gray-700 outline-none appearance-none cursor-pointer focus:border-gray-200"
                            >
                                <option value="select">Select Language</option>
                                <option value="hi">Hindi</option>
                                <option value="bn">Bengali</option>
                                <option value="fr">French</option>
                                <option value="de">German</option>
                                <option value="ja">Japanese</option>
                            </select>
                            <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {output && (
                        <div className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-5 text-left animate-fadeIn">
                            <p className="font-semibold text-xs text-gray-400 uppercase tracking-wider mb-2">Translation Result</p>
                            <p className="text-gray-800 text-sm sm:text-base leading-relaxed whitespace-pre-wrap">{output}</p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Translator;