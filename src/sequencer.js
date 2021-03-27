import React from "react";
import "./styles.css";
import * as Tone from "tone";

export default function Sequencer () {
    const sequencerSounds = {
       AM: new Tone.AMSynth().toDestination(),
       DUO: new Tone.DuoSynth().toDestination(),
       MEMBRANE: new Tone.MembraneSynth().toDestination(),
       FM: new Tone.FMSynth().toDestination(),
       PLUCK: new Tone.PluckSynth().toDestination(),
       POLY: new Tone.PolySynth().toDestination(),
    }

    const makeSound = (synthType) => {
        sequencerSounds[synthType].triggerAttackRelease("C3", "8n")
    }

    return (
        <>
         <h1 className="font-mono text-center text-6xl p-10">NSequencer</h1>
        <div className="grid grid-flow-col grid-cols-3 grid-rows-2 justify-items-stretch gap-4 m-10">
            {Object.keys(sequencerSounds).map(sound => <button onClick={() => makeSound(sound)}className="text-center font-mono font-bold border-2 border-black bg-yellow-800 p-20 hover:bg-black hover:border-yellow-100 hover:text-white focus:outline-none shadow-xl">{sound}</button>)}
        </div>
        </>
    )
}