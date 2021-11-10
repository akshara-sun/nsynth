//Function that will change all keyboard notes to be down an octave
export default function OctaveDown(arr) {
    let parsed;
    let str = "";
      for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr[i].length; j++) {
          parsed = parseInt(arr[i][j])
          parsed = parsed - 1;
          str = parsed.toString()
          arr[i] = arr[i].replace(arr[i][j], str)
        }
      } 
      return arr;
}


