words = [
    "Whoop", "Howdy", "Gigem", "Corps", "Aggie", "Spirit", "Honor", "Study", "Yells", 
    "Pride", "Loyal", "Games", "Evans", "Annex", "Sbisa", "Unity", "Class", "Panda", 
    "Trust", "Texas", "Cadet", "Fight", "Finals", "Alumn"
]

const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;
let guessWord = words[Math.floor(Math.random() * words.length)]
console.log(guessWord)

function initBoard() {
    let board = document.getElementById("gameboard");
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("div")
        row.className = "letter-row"
        for (let j = 0; j < 5; j++) {
            let box = document.createElement("div")
            box.className = "letter-box"
            row.appendChild(box)
        }
        board.appendChild(row)
    }
}

initBoard()

document.addEventListener('keyup', (e)=>{
    if (guessesRemaining === 0) {
        return
    }
    
    let pressedKey = String(e.key)
    if (pressedKey === "Backspace" && nextLetter !== 0) {
        deleteLetter()
        return
    }
    
    if (pressedKey === "Enter") {
        checkGuess()
        return
    }
    
    let found = pressedKey.match(/[a-z]/gi)
    if (!found || found.length > 1) {
        return
    } else {
        insertLetter(pressedKey)
    }
})

function insertLetter (pressedKey) {
    if (nextLetter === 5) {
      return
    }
    
    pressedKey = pressedKey.toLowerCase()
    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
    let box = row.children[nextLetter]
    box.textContent = pressedKey
    box.classList.add("filled-box")
    currentGuess.push(pressedKey)
    nextLetter += 1
}

function deleteLetter(){
    let row = document.getElementsByClassName("letter-row")[6- guessesRemaining]
    let box = row.children[nextLetter - 1]
    box.textContent = ""
    box.classList.remove("filled-box")
    currentGuess.pop()
    nextLetter -=1
}

function checkGuess(){
    let row = document.getElementsByClassName("letter-row")[6-guessesRemaining]
    let guessStr = ''
    let rightGuess = Array.from(guessWord)
    for(const val of currentGuess){
        guessStr += val
    }

    if (guessStr.length != 5){
        return
    }

    
}