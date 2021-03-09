import React from "react";
import "./App.css";
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

  // document.addEventListener('keydown', (event) => {
  //   if (event.key === 'a') {
  //     playNote('C4');
  //   } else if (event.key === 's') {
  //     playNote('D4')
  //   } else if (event.key === 'd') {
  //     playNote('E4')
  //   } else if (event.key === 'f') {
  //     playNote('F4')
  //   } else if (event.key === 'g') {
  //       playNote('G4')
  //   } else if (event.key === 'h') {
  //       playNote('A4')
  //   } else if (event.key === 'j') {
  //       playNote('B4')       
  //   } else if (event.key === 'k') {
  //       playNote('C5') 
  //   } else {
  //     alert("Invalid note")
  //   }
  // })

  // Keyboard event listener using custom react hook: useKey - Solution 2
  // let alphabet = ["a", "s", "d", "f", "g", "h", "j", "k"]

  // function keyboardShortcut(event) {
  //   if (event.key === 'a') {
  //     playNote('C4');
  //   } else if (event.key === 's') {
  //     playNote('D4')
  //   } else if (event.key === 'd') {
  //     playNote('E4')
  //   } else if (event.key === 'f') {
  //     playNote('F4')
  //   } else if (event.key === 'g') {
  //       playNote('G4')
  //   } else if (event.key === 'h') {
  //       playNote('A4')
  //   } else if (event.key === 'j') {
  //       playNote('B4')       
  //   } else if (event.key === 'k') {
  //       playNote('C5') 
  //   } else {
  //     alert("Invalid note")
  //   }
  // }
  
  // useKey([alphabet[0]], keyboardShortcut);
  // useKey([alphabet[1]], keyboardShortcut);
  // useKey([alphabet[2]], keyboardShortcut);
  // useKey([alphabet[3]], keyboardShortcut);
  // useKey([alphabet[4]], keyboardShortcut);
  // useKey([alphabet[5]], keyboardShortcut);
  // useKey([alphabet[6]], keyboardShortcut);
  // useKey([alphabet[7]], keyboardShortcut);


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


