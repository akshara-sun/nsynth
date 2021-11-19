// Main piano components 
import React from "react";
import { notes } from "./notes";
import "./styles.css";
import * as Tone from "tone";
import InstrumentTypes from "./instrument-types";
import ToneBank from "./tone-bank";

export default function Piano() {
    //separating values of object into array of whitekeys and blackeys
    let whiteKeys = notes.filter((keys) => !keys.includes("#"));
  
    let twoBlackKeys = notes.filter((keys) => keys.includes("C#"));
    twoBlackKeys = twoBlackKeys.concat(notes.filter((keys) => keys.includes("D#")));
  
    let threeBlackKeys = notes.filter((keys) => keys.includes("F#"));
    threeBlackKeys = threeBlackKeys.concat(notes.filter((keys) => keys.includes("G#")));
    threeBlackKeys = threeBlackKeys.concat(notes.filter((keys) => keys.includes("A#")));

  //creating piano and connecting to main output source
  const piano = new Tone.Synth().toDestination();

  //function that takes care of playing a specific sound
  const playNote = (note) => {
    piano.triggerAttackRelease(`${note}`, "8n");
  };

  return (
    <>
      <h1 className="font-serif text-center text-6xl pt-10 pb-4">NSynth</h1>
      <h3 className="font-serif text-center text-l">Make music from anywhere, anytime.</h3>
      <div className="container mx-auto">
        <div className="flex justify-center relative sm:mt-24 md:mt-44">
          {whiteKeys.map((note) => (
            <button
              className="white relative text-center font-serif font-bold bg-white border border-t-8 border-black rounded-b-lg w-16 pt-52"
              id="whitekeys"
              onClick={() => playNote(note)}
            >
              {note[0]}
            </button>
          ))}
        </div>
        <div className="flex justify-center relative space-x-8 -m-64 pr-12">
          {twoBlackKeys.map((note) => (
            <button
              className="black font-serif text-sm text-white ml-44 space-x-4 bg-black rounded-b-lg w-12 pt-36"
              id="twoBlackKeys"
              onClick={() => playNote(note)}
            >
              {note[0]}{note[1]}
            </button>
          ))}
          <div className="flex justify-start pl-20 space-x-8">
            {threeBlackKeys.map((note) => (
              <button
                className="black font-serif text-sm text-white space-x-4 bg-black rounded-b-lg w-12 pt-36"
                id="threeBlackKeys"
                onClick={() => playNote(note)}
              >
                {note[0]}{note[1]}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="dropdown grid grid-rows-1 grid-flow-col float-right mr-64 mt-20 gap-4">
        <InstrumentTypes/>
        <ToneBank />
      </div>
      
    </>
  );
}
