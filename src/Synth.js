import React from "react";
import "./Synth.css";
import * as Tone from "tone";
// import OctaveUp from "./octave-up";
// import OctaveDown from "./octave-down";

//Synth component with black and white keys
export default function Synth () {
  let keyboard = [
    "C4",
    "C#4",
    "D4",
    "D#4",
    "E4",
    "F4",
    "F#4",
    "G4",
    "G#4",
    "A4",
    "A#4",
    "B4",
    "C5",
    "C#5",
    "D5",
    "D#5",
    "E5",
    "F5",
    "F#5",
    "G5",
    "G#5",
    "A5",
    "A#5",
    "B5",
  ]
//white keys of the keyboard
  let whiteKeys = keyboard.filter(notes => !notes.includes("#"))

  //black keys of the keyboard
  let blackKeysSet1 = [
    "C#4",
    "D#4",
  ];

  let blackKeysSet2 = [
    "F#4",
    "G#4",
    "A#4"
  ]

  let blackKeysSet3 = [
    "C#5",
    "D#5",
  ];

  let blackKeysSet4 = [
    "F#5",
    "G#5",
    "A#5"
  ]

  //creating synth and connecting to main output
  const synth = new Tone.Synth().toDestination();

  //function that will take a note and play said note for a duration of an 8th note
  const playNote = (note) => {
    synth.triggerAttackRelease(`${note}`, "8n");
  };

  return (
    <>
    <h1 className="font-mono text-center text-6xl p-4">NSynth</h1>
    <div className= "white-keys-styles flex justify-center relative sm:mt-32 md:mt-64">  
      {whiteKeys.map(note => <ul onClick={() => playNote(note)} id= "whitekeys" className="relative text-center font-mono font-bold bg-white border border-t-8 border-black rounded-b-lg w-16 pt-52 hover:bg-gray-500 shadow-2xl focus:outline-none">{note}</ul>)}
    </div>
    <div className="black-keys-styles flex justify-center relative space-x-4 -m-60">
      {blackKeysSet1.map(note => <ul onClick={() => playNote(note)} id= "blackKeys" className="space-x-4 text-center font-mono font-bold text-white bg-black rounded-b-lg w-12 pt-40 hover:bg-gray-500 focus:outline-none shadow-2xl">{note}</ul>)}
      <div className="flex justify-start pl-16 space-x-4">
        {blackKeysSet2.map(note => <ul onClick={() => playNote(note)} id= "blackKeys" className="space-x-4 text-center font-mono font-bold text-white bg-black rounded-b-lg w-12 pt-40 hover:bg-gray-500 focus:outline-none shadow-2xl">{note}</ul>)}
        <div className="flex justify-start pl-16 space-x-4">
          {blackKeysSet3.map(note => <ul onClick={() => playNote(note)} id= "blackKeys" className="space-x-4 text-center font-mono font-bold text-white bg-black rounded-b-lg w-12 pt-40 hover:bg-gray-500 focus:outline-none shadow-2xl">{note}</ul>)}
        </div>
          <div className="flex justify-start pl-16 space-x-4">
          {blackKeysSet4.map(note => <ul onClick={() => playNote(note)} id= "blackKeys" className="space-x-4 text-center font-mono font-bold text-white bg-black rounded-b-lg w-12 pt-40 hover:bg-gray-500 focus:outline-none shadow-2xl">{note}</ul>)}
          </div>
      </div>
    </div>
    </>
  )
}


