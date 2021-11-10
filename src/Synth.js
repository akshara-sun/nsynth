
import React from "react";
import { useEffect , useRef} from "react";
import "./Synth.css";
import * as Tone from "tone";

export default function pianoKeys() {
  let keyboard = {
    "a": "C4",
    "w": "C#4",
    "s": "D4",
    "e": "D#4",
    "d": "E4",
    "f": "F4",
    "t": "F#4",
    "g": "G4",
    "y": "G#4",
    "h": "A4",
    "u": "A#4",
    "j": "B4",
    "k": "C5",
  };

  let keyboardShortcuts = Object.keys(keyboard);

  //function that looks through object values and filters out the white keys and black keys
  let keyNotes = Object.values(keyboard);
  let whiteKeys = keyNotes.filter((keys) => !keys.includes("#"));

  let blackKeysSet1 = keyNotes.filter((keys) => keys.includes("C#"));
  blackKeysSet1.push(keyNotes.filter((keys) => keys.includes("D#")));

  let blackKeysSet2 = keyNotes.filter((keys) => keys.includes("F#"));
  blackKeysSet2.push(keyNotes.filter((keys) => keys.includes("G#")));
  blackKeysSet2.push(keyNotes.filter((keys) => keys.includes("A#")));

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
        {blackKeysSet1.map((note) => (
          <button
            className="ml-44 space-x-4 text-center font-mono font-bold text-white bg-black rounded-b-lg w-12 pt-40 hover:bg-gray-500 focus:outline-none shadow-2xl"
            id="blackKeys"
            onClick={() => playNote(note)}
          >
            {note}
          </button>
        ))}
        <div className="flex justify-start pl-16 space-x-4">
          {blackKeysSet2.map((note) => (
            <button
              className="space-x-4 text-center font-mono font-bold text-white bg-black rounded-b-lg w-12 pt-40 hover:bg-gray-500 focus:outline-none shadow-2xl"
              id="blackKeys"
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