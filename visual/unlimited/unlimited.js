words = [
    "MidnightYell", "SilverTaps", "Muster", "FishCamp", "Bonfire", "Zachary", "CenturyTree", 
    "PondHopping", "Hullabaloo", "YellPractice", "WarHymn", "TwelveMan", "Reveille", 
    "Rudder", "RingDance", "ElephantWalk", "CollegeStation", "Msc", "Commons", "Duncan", 
    "SpiritBus", "Reed", "Recreation", "Football", "TU", "Tamu", "TicketPull", "AggieRing", 
    "Mays", "RingDunk", "Graduation", "Band", "YellLeaders", "Maroon", "CaboGrill", 
    "HoustonSubs", "SmoothieKing", "ETAM", "Caneck", "DiningHall", "KyleField", "BTHO"
]

const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;
let guessWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
console.log(guessWord)
let letters = guessWord.length


function initBoard() {
    let board = document.getElementById("gameboard");
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("div")
        row.className = "letter-row"
        for (let j = 0; j < letters; j++) {
            let box = document.createElement("div")
            box.className = "letter-box"
            row.appendChild(box)
        }
        board.appendChild(row)
    }
}

initBoard();

document.addEventListener('keyup', (e) => {
    if (guessesRemaining === 0) {
        return;
    }


    let pressedKey = String(e.key);
    if (pressedKey === "Backspace" && nextLetter !== 0) {
        deleteLetter();
        return;
    }


    if (pressedKey === "Enter") {
        checkGuess();
        return;
    }


    let found = pressedKey.match(/[a-z]/gi);
    if (!found || found.length > 1) {
        return;
    } else {
        insertLetter(pressedKey);
    }
});

function insertLetter(pressedKey) {
    if (nextLetter === letters) {
        return;
    }


    pressedKey = pressedKey.toLowerCase();
    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining];
    let box = row.children[nextLetter];
    box.textContent = pressedKey;
    box.classList.add("filled-box");
    currentGuess.push(pressedKey);
    nextLetter += 1;
}


function deleteLetter() {
    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining];
    let box = row.children[nextLetter - 1];
    box.textContent = "";
    box.classList.remove("filled-box");
    currentGuess.pop();
    nextLetter -= 1;
}


function checkGuess() {
    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining];
    let guessString = currentGuess.join('');
    let rightGuess = Array.from(guessWord);


    if (guessString.length !== letters) {
        alert("Not enough letters!");
        return;
    }


    for (let i = 0; i < letters; i++) {
        let box = row.children[i];
        let letter = currentGuess[i];
        let letterColor = '';


        if (rightGuess[i] === letter) {
            letterColor = 'green';
        } else if (rightGuess.includes(letter)) {
            letterColor = 'yellow';
        } else {
            letterColor = 'grey';
        }


        setTimeout(() => {
            box.classList.add(letterColor);
        }, 250 * i);
    }


    if (guessString === guessWord) {
        alert("You guessed right! Game over!");
        guessesRemaining = 0;
        return;
    } else {
        guessesRemaining -= 1;
        currentGuess = [];
        nextLetter = 0;


        if (guessesRemaining === 0) {
            alert(`You've run out of guesses! The correct word was: "${guessWord}"`);
        }
    }
}
#woooo
