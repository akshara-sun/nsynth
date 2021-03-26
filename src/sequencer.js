import React from "react";
import "./styles.css";


export default function Sequencer () {
    return (
        <>
         <h1 className="font-mono text-center text-6xl p-10">NSequencer</h1>
        <div className="grid grid-flow-col grid-cols-3 grid-rows-2 justify-items-stretch gap-4 m-10">
            <div className="text-center font-mono font-bold border-2 border-black bg-yellow-800 p-20 hover:bg-black hover:border-yellow-100 hover:text-white focus:outline-none shadow-xl">Hi Tom
            <audio autoPlay="false">
            </audio>
            </div>
            <div className="text-center font-mono font-bold border-2 border-black bg-yellow-800 p-20 hover:bg-black hover:border-yellow-100 hover:text-white focus:outline-none shadow-xl">Mid Tom</div>
            <div className="text-center font-mono font-bold border-2 border-black bg-yellow-800 p-20 hover:bg-black hover:border-yellow-100 hover:text-white focus:outline-none shadow-xl">Hi-Hat</div>
            <div className="text-center font-mono font-bold border-2 border-black bg-yellow-800 p-20 hover:bg-black hover:border-yellow-100 hover:text-white focus:outline-none shadow-xl">Kick</div>
            <div className="text-center font-mono font-bold border-2 border-black bg-yellow-800 p-20 hover:bg-black hover:border-yellow-100 hover:text-white focus:outline-none shadow-xl">Snare</div>
            <div className="text-center font-mono font-bold border-2 border-black bg-yellow-800 p-20 hover:bg-black hover:border-yellow-100 hover:text-white focus:outline-none shadow-xl">Crash</div>
        </div>
        </>
    )
}