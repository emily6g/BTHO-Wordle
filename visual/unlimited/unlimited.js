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
let guessWord = words[Math.floor(Math.random() * words.length)]
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

initBoard()