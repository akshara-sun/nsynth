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

  //Keyboard Event Listeners
    document.addEventListener("keydown", (event) => {
      // eslint-disable-next-line default-case
      switch (event.key) {
        case "a":
          playNote('C4');
          break;
        case "w":
          playNote('C#4');
          break;
        case "s":
          playNote('D4');
          break;
        case "e":
          playNote('D#4');
          break;
        case "d":
          playNote('E4');
          break;
        case "f":
          playNote('F4');
          break;
        case "t":
          playNote('F#4');
          break;
        case "g":
          playNote('G4');
          break;
        case "y":
          playNote('G#4');
          break;
        case "h":
          playNote('A4');
          break;
        case "u":
          playNote('A#4');
          break;
        case "j":
          playNote('B4');
          break;
        case "k":
          playNote('C5')
          break;
    } 
  })

  return (
    <>
      <h1 className="font-serif text-center text-6xl p-10">NSynth</h1>
      <div className="flex justify-center relative sm:mt-24 md:mt-44">
        {whiteKeys.map((note) => (
          <button
            className="keys relative text-center font-mono font-bold bg-white border border-t-8 border-black rounded-b-lg w-16 pt-52"
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
            className="keys ml-44 space-x-4 text-center font-mono font-bold text-white bg-black rounded-b-lg w-12 pt-40"
            id="twoBlackKeys"
            onClick={() => playNote(note)}
          >
            {note}
          </button>
        ))}
        <div className="flex justify-start pl-16 space-x-4">
          {threeBlackKeys.map((note) => (
            <button
              className="keys space-x-4 text-center font-mono font-bold text-white bg-black rounded-b-lg w-12 pt-40"
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
