import React from "react";
import "./styles.css";
import * as Tone from "tone";
// import useKey from "@rooks/use-key";


export default function Synth () {
  let whiteKeys = [
    "C4",
    "D4",
    "E4",
    "F4",
    "G4",
    "A4",
    "B4",
    "C5",
    "D5",
    "E5",
    "F5",
    "G5",
    "A5",
    "B5",
  ];

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

  const synth = new Tone.Synth().toDestination();
  const playNote = (note) => {
    synth.triggerAttackRelease(`${note}`, "8n");
  };

  // Keyboard Event listener - Solution 1

  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case "q":
        playNote('C4');
        break;
      case "2":
        playNote('C#4');
        break;
      case "w":
        playNote('D4');
        break;
      case "3":
        playNote('D#4');
        break;
      case "e":
        playNote('E4');
        break;
      case "r":
        playNote('F4');
        break;
      case "5":
        playNote('F#4');
        break;
      case "t":
        playNote('G4');
        break;
      case "6":
        playNote('G#4');
        break;
      case "y":
        playNote('A4');
        break;
      case "7":
        playNote('A#4');
        break;
      case "u":
        playNote('B4');
        break;
      case "i":
        playNote('C5')
        break;
      case "9":
        playNote('C#5');
        break;
      case "o":
        playNote('D5');
        break;
      case "0":
        playNote('D#5');
        break;
      case "p":
        playNote('E5');
        break;
      case "[":
        playNote('F5');
        break;
      case "=":
        playNote('F#5');
        break;
      case "]":
        playNote('G5');
        break;
      case "a":
        playNote('G#5');
        break;
      case "s":
        playNote('A5');
        break;
      case "d":
        playNote('A#5');
        break;
      case "f":
        playNote('B5');
        break;
      default:
        return;
    } 
  })
//use forEach
  return (
    <>
    <h1 className="font-mono text-center text-6xl p-10">NSynth</h1>
    <div className= "flex justify-center relative sm:mt-32 md:mt-64">  
      {whiteKeys.map(note => <ul onClick={() => playNote(note)} id= "whitekeys" className="relative text-center font-mono font-bold bg-white border border-t-8 border-black rounded-b-lg w-16 pt-52 hover:bg-gray-500 shadow-2xl focus:outline-none">{note}</ul>)}
    </div>
    <div className="flex justify-center relative space-x-4 -m-60">
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


