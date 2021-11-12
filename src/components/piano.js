//Main piano components 
import React from "react";
import { miniKeyboard } from "./miniKeyboard";
import "./synth.css";
import * as Tone from "tone";

export default function Synth() {
    //separating values of object into array of whitekeys and blackeys
    let whiteKeys = miniKeyboard.filter((keys) => !keys.includes("#"));
  
    let twoBlackKeys = miniKeyboard.filter((keys) => keys.includes("C#"));
    twoBlackKeys = twoBlackKeys.concat(miniKeyboard.filter((keys) => keys.includes("D#")));
  
    let threeBlackKeys = miniKeyboard.filter((keys) => keys.includes("F#"));
    threeBlackKeys = threeBlackKeys.concat(miniKeyboard.filter((keys) => keys.includes("G#")));
    threeBlackKeys = threeBlackKeys.concat(miniKeyboard.filter((keys) => keys.includes("A#")));

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
            className="white relative text-center font-mono font-bold bg-white border border-t-8 border-black rounded-b-lg w-16 pt-52"
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
            className="black text-s text-white ml-44 space-x-4 bg-black rounded-b-lg w-12 pt-40"
            id="twoBlackKeys"
            onClick={() => playNote(note)}
          >
            {note}
          </button>
        ))}
        <div className="flex justify-start pl-20 space-x-8">
          {threeBlackKeys.map((note) => (
            <button
              className="black text-s text-white space-x-4 bg-black rounded-b-lg w-12 pt-40"
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
