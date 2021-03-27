import React from "react";
import "./styles.css";
import * as Tone from "tone";
import { IonIcon } from "@ionic/react"; 
import { playSharp } from "ionicons/icons";

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

    function preset1 () {
        new Tone.Sequence((time, note) => {
            Object.values(sequencerSounds).triggerAttackRelease(note, 0.1, time);
            // subdivisions are given as subarrays
        }, ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]].start)
        Tone.Transport.start()
    }
    

    return (
        <>
         <h1 className="font-mono text-center text-6xl p-10">NSequencer</h1>
        <div className="grid grid-flow-col grid-cols-3 grid-rows-2 justify-items-stretch gap-4 m-10">
            {Object.keys(sequencerSounds).map(sound => <button onClick={() => makeSound(sound)}className="text-center font-mono font-bold border-2 border-black bg-yellow-800 p-20 hover:bg-black hover:border-yellow-100 hover:text-white focus:outline-none shadow-xl">{sound}</button>)}
        </div>
        <IonIcon onClick={() => {preset1()}} className="ml-20 bg-purple hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50" icon={playSharp} size="large"/> 
        </>
    )
}