/* eslint-disable jsx-a11y/anchor-is-valid */
// Tailwind CSS Component from CodePen -> https://codepen.io/huphtur/pen/ordMeN
import "./styles.css"


export default function ToneBank() {
  return (
    <div>
    <div class="tone-bank inline-block relative">
      <button class="bg-gray-300 text-black shadow-xl border border-black py-2 px-4 rounded inline-flex items-center">
        <span class="mr-1 font-serif">Tone Bank</span>
        <ion-icon name="caret-down" className="justify-items-center" aria-hidden="true" size="small"></ion-icon>
      </button>
      <ul class="tone-bank-menu absolute hidden text-gray-700 pt-1 shadow-lg">
        <li class="font-serif">
          <a
            class="rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            href="#"
          >
            AM Synth
          </a>
        </li>
        <li class="font-serif">
          <a
            class="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            href="#"
          >
            FM Synth
          </a>
        </li>
        <li class="font-serif">
          <a
            class="rounded-b bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            href="#"
          >
            DUO Synth
          </a>
        </li>
        <li class="font-serif">
          <a
            class="rounded-b bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            href="#"
          >
            Poly Synth
          </a>
        </li>
      </ul>
    </div>
  </div>
  )
}
