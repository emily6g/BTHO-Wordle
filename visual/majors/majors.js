acronyms = [
    "ACCT", "AERO", "AGLS", "AGSC", "ANSC", "ARCH", "ARSC", "ARTS", "ASTR", "BAEN", "BESC", "BICH", 
    "BIMS", "BIOL", "BMEN", "BUSN", "CARC", "CHEM", "CHEN", "CHIN", "CLEN", "COMM", "COSC", "CSCE", 
    "CVEN", "CYBR", "DAEN", "DCED", "DDHS", "ECCB", "ECDE", "ECEN", "ECMT", "ECON", "EHRD", "ENDG", 
    "ENDS", "ENGL", "ENGR", "ENST", "ENTC", "ENTO", "EPFB", "EPSY", "ESET", "EURO", "EVEN", "FILM", 
    "FINC", "FINP", "FIVS", "FREN", "FSCI", "FSTC", "GENE", "GEOG", "GEOL", "GEOP", "GEOS", "GERM", 
    "GLST", "HBRW", "HHUM", "HISP", "HIST", "HLTH", "HORT", "HUMA", "IBUS", "IDIS", "INST", "INTA", 
    "ISEN", "ISTM", "ITAL", "ITDE", "JAPN", "JOUR", "JWST", "KINE", "LAND", "LING", "LMAS", "MARB", 
    "MARE", "MARS", "MASE", "MAST", "MATH", "MEEN", "MEPS", "MGMT", "MICR", "MKTG", "MLSC", "MMET", 
    "MODL", "MSEN", "MTDE", "MUSC", "MUST", "MXET", "NAUT", "NRSC", "NUEN", "NURS", "NUTR", "OCEN", 
    "OCNG", "PBSI", "PERF", "PETE", "PHIL", "PHLT", "PHYS", "POLS", "PORT", "POSC", "PVFA", "RDNG", 
    "RELS", "RUSS", "SCMT", "SOCI", "SPAN", "SPED", "SPMT", "STAT", "TCMG", "TEED", "THEA", "UGST", 
    "URPN", "VIBS", "VIST", "VSCS", "WGST", "ZOOL"
]

const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;
//let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]
//console.log(rightGuessString)

function initBoard() {
    let board = document.getElementById("gameboard");
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("div")
        row.className = "letter-row"
        for (let j = 0; j < 4; j++) {
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
    
}