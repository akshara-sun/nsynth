//Main piano components 
import React from "react";
import { keyboard } from "./keyboard";
import "./synth.css";
import * as Tone from "tone";

export default function Synth() {
    //separating values of object into array of whitekeys and blackeys
    let keyNotes = Object.values(keyboard);
    let whiteKeys = keyNotes.filter((keys) => !keys.includes("#"));
  
    let twoBlackKeys = keyNotes.filter((keys) => keys.includes("C#"));
    twoBlackKeys = twoBlackKeys.concat(keyNotes.filter((keys) => keys.includes("D#")));
  
    let threeBlackKeys = keyNotes.filter((keys) => keys.includes("F#"));
    threeBlackKeys = threeBlackKeys.concat(keyNotes.filter((keys) => keys.includes("G#")));
    threeBlackKeys = threeBlackKeys.concat(keyNotes.filter((keys) => keys.includes("A#")));

  //creating piano and connecting to main output source
  const piano = new Tone.Synth().toDestination();

  //function that takes care of playing a specific sound
  const playNote = (note) => {
    piano.triggerAttackRelease(`${note}`, "8n");
  };

  return (
    <>
      <h1 className="font-serif text-center text-6xl p-10">NSynth</h1>
      <div className="flex justify-center relative sm:mt-24 md:mt-44">
        {whiteKeys.map((note) => (
          <button
            className="relative text-center font-mono font-bold bg-white border border-t-8 border-black rounded-b-lg w-16 pt-52 hover:bg-gray-500 shadow-2xl focus:outline-none"
            id="whitekeys"
            onClick={() => playNote(note)}
          >
            {note}
          </button>
        ))}
      </div>
      <div className="flex justify-center relative space-x-4 -m-60 mr-2">
        {twoBlackKeys.map((note) => (
          <button
            className="ml-44 space-x-4 text-center font-mono font-bold text-white bg-black rounded-b-lg w-12 pt-40 hover:bg-gray-500 focus:outline-none shadow-2xl"
            id="twoBlackKeys"
            onClick={() => playNote(note)}
          >
            {note}
          </button>
        ))}
        <div className="flex justify-start pl-16 space-x-4">
          {threeBlackKeys.map((note) => (
            <button
              className="space-x-4 text-center font-mono font-bold text-white bg-black rounded-b-lg w-12 pt-40 hover:bg-gray-500 focus:outline-none shadow-2xl"
              id="threeBlackKeys"
              onClick={() => playNote(note)}
            >
              {note}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
