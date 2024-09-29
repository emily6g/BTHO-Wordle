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
    let guessString = ''
    let rightGuess = Array.from(guessWord)
    for(const val of currentGuess){
        guessString += val
    }
    
    for(let i=0; i<5; i++){
        let letterColor = ''
        let box = row.children[i]
        let letter = currentGuess[i]
        let letterPosition = rightGuess.indexOf(currentGuess[i])
    
        if(letterPosition === -1){
            letterColor = "#FF8DC"
        } else {
            if(currentGuess[i] === rightGuess[i]){
                letterColor = '#7FFF00'
            } else{
                letterColor = '#FFD700'
            }
            rightGuess[letterPosition] = "#"
        }
    
        let delay = 250 * i
        setTimeout(()=> {
            box.style.border = letterColor
            //shadeKeyBoard(letter,letterColor)
        }, delay)
    }
    
    if(guessString === guessWord){
        alert("You guessed right! Game over!")
        guessesRemaining = 0
        return
    } else {
        guessesRemaining -= 1
        currentGuess = []
        nextLetter = 0
        if(guessesRemaining === 0){
            alert("You've run out of guesses! Game over!")
            alert(`The right word was: "${guessWord}"`)
        }
    }
}

// function shadeKeyBoard(letter,color){
//     for (const elem of document.getElementsByClassName("letter-box")){
//         if(elem.textContent === letter){
//         let oldColor = elem.style.backgroundColor
//             if(oldColor === 'green'){
//                 return
//             }
//         }
//     }
// }

function check2(){
    const fs = require('fs');

    let found = "yes";

while (found === 'yes') {
    // Open the word list file
    // const allText = fs.readFileSync("visual/tamuClassic.txt", "utf-8");
    // const words = allText.split(/\s+/);
    wordle = guessWord
    alert("This is the random Wordle: " + wordle);

    // Function to check for correct letter placement
    function checkPlace(charG, charW, place) {
        if (charG === charW) {
            alert(`${place} letter: right letter, right place!`);
        }
    }

    // User's first guess
    let guess = prompt("Enter a word: ");
    
    // Forces the user to enter ONLY a five-letter word
    while (guess.length !== 5) {
        alert("That was not a five-letter word!");
        guess = prompt("Enter a word: ");
    }

    // Loop for a total of six guesses
    for (let i = 0; i < 6; i++) {
        // Checks if the Wordle has been guessed
        if (guess === wordle) {
            alert("You guessed it!");
            break;
        }
        
        // Check each letter's placement and correctness
        for (let index = 0; index < 5; index++) {
            checkPlace(guess[index], wordle[index], ["First", "Second", "Third", "Fourth", "Fifth"][index]);
            if (guess[index] !== wordle[index]) {
                if (wordle.includes(guess[index])) {
                    alert(`${['First', 'Second', 'Third', 'Fourth', 'Fifth'][index]} letter: right letter, wrong place.`);
                }
            }
        }

        // Prompts user to keep guessing
        guess = prompt("Enter a word: ");
        while (guess.length !== 5) {
            alert("That was not a five-letter word!");
            guess = prompt("Enter a word: ");
        }
    }

    if (guess !== wordle) {
        alert("You have used up your guesses. The Wordle was " + wordle + ".");
        alert("Try again next time!");
    }

    found = 'no';
}
}