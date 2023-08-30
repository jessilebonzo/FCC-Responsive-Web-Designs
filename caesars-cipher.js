//  Caesars-Cipher
// JavaScript Algorithms and Data Structures Projects (freeCodeCamp)

function rot13(str) {
  const alphabets = "nopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
  const alphabets = "NOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"

  str.split("").map((letter) => {
    const index = alphabets.lastIndexOf(letter)

    if(index === -1) {
      return letter
    }

    return alphabets[index - 13]
  }).join("")

}

rot13("SERR PBQR PNZC");
