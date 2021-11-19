/* eslint-disable jsx-a11y/anchor-is-valid */
// Example Component from Tailwind UI
import "./styles.css"


export default function InstrumentTypes() {
  return (
    <div>
    <div class="instruments inline-block relative">
      <button class="bg-gray-300 text-black shadow-xl border border-black py-2 px-4 rounded inline-flex items-center">
        <span class="mr-1 font-serif">Instruments</span>
        <ion-icon name="caret-down" className="justify-items-center" aria-hidden="true" size="small"></ion-icon>
      </button>
      <ul class="instruments-menu absolute hidden text-gray-700 pt-1 shadow-lg">
        <li class="font-serif">
          <a
            class="rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            href="#"
          >
            Drum Machine
          </a>
        </li>
        <li class="font-serif">
          <a
            class="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            href="#"
          >
            Sequencer
          </a>
        </li>
        <li class="font-serif">
          <a
            class="rounded-b bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            href="#"
          >
            Notation
          </a>
        </li>
        <li class="font-serif">
          <a
            class="rounded-b bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            href="#"
          >
            Custom ...
          </a>
        </li>
      </ul>
    </div>
  </div>
  )
}
