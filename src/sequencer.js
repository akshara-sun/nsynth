import React from "react";
import "./styles.css";


export default function Sequencer () {
    return (
        <>
         <h1 className="font-mono text-center text-6xl p-10">NSequencer</h1>
        <div className="grid grid-flow-col grid-cols-3 grid-rows-2 justify-items-stretch gap-4 m-10">
            <div className="text-center font-mono font-bold border-2 border-black bg-yellow-100 p-20 hover:bg-black hover:border-yellow-100 hover:text-white focus:outline-none shadow-xl">1</div>
            <div className="text-center font-mono font-bold border-2 border-black bg-yellow-100 p-20 hover:bg-black hover:border-yellow-100 hover:text-white focus:outline-none shadow-xl">2</div>
            <div className="text-center font-mono font-bold border-2 border-black bg-yellow-100 p-20 hover:bg-black hover:border-yellow-100 hover:text-white focus:outline-none shadow-xl">3</div>
            <div className="text-center font-mono font-bold border-2 border-black bg-yellow-100 p-20 hover:bg-black hover:border-yellow-100 hover:text-white focus:outline-none shadow-xl">4</div>
            <div className="text-center font-mono font-bold border-2 border-black bg-yellow-100 p-20 hover:bg-black hover:border-yellow-100 hover:text-white focus:outline-none shadow-xl">5</div>
            <div className="text-center font-mono font-bold border-2 border-black bg-yellow-100 p-20 hover:bg-black hover:border-yellow-100 hover:text-white focus:outline-none shadow-xl">6</div>
        </div>
        </>
    )
}