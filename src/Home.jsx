import React from "react";
import aitravelAgent from "./assets/aitravelAgent.png"

export default function Home({setStartPlanning}) {
    
    return(
        <div className="bg-[#EFFFFE] mx-auto min-h-screen max-w-[400px] flex flex-col items-center justify-center px-4 py-6 space-y-6 font-sans">
            <div>
                <img src={aitravelAgent} alt="Logo" />
            </div>
            <button
                className="w-fit bg-green-300 pr-8 pl-8 text-center font-bold border-3 border-black rounded-full py-2  hover:bg-green-500 transition cursor-pointer" 
                onClick={()=>setStartPlanning(true)}
            >
                Let's Begin
            </button>
        </div>
    )
}