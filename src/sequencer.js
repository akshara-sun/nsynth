import React from "react";
import "./styles.css";
import * as Tone from "tone";
import { ToneEvent } from "tone";

export default function Sequencer () {
    const sequencerSounds = {
       1: new Tone.AMSynth().toDestination(),
       2: new Tone.FMSynth().toDestination(),
       3: new Tone.DuoSynth().toDestination(),
       4: new Tone.MembraneSynth().toDestination(),
       5: new Tone.MetalSynth().toDestination(),
       6: new Tone.PluckSynth().toDestination(),
    }

    return (
        <>
         <h1 className="font-mono text-center text-6xl p-10">NSequencer</h1>
        <div className="grid grid-flow-col grid-cols-3 grid-rows-2 justify-items-stretch gap-4 m-10">
            {Object.keys(sequencerSounds).map(sound => <button className="text-center font-mono font-bold border-2 border-black bg-yellow-800 p-20 hover:bg-black hover:border-yellow-100 hover:text-white focus:outline-none shadow-xl">{sound}</button>)}
        </div>
        </>
    )
}