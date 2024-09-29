

import random

# Greets user, explains the rules
print("Welcome to Wordle!")
print("The rules are simple: enter a FIVE-LETTER word.")
print("The code will let you know if letters are correct and/or correctly placed.")

# Ready to play
found = "yes"
while found == 'yes':
    # Open the word list file
    with open("visual\\tamuClassic.txt", "r") as file:
        allText = file.read()
        words = list(map(str, allText.split()))
        # Chooses a random word as the Wordle
        wordle = 'Class'
        #random.choice(words)
        print("This is the random Wordle:", wordle)

    # Function to check for correct letter placement
    def check_place(char_g, char_w, place):
        if char_g == char_w:
            print(f"{place} letter: right letter, right place!")

    # User's first guess
    guess = input("Enter a word: ")
    # Forces the user to enter ONLY a five-letter word
    while len(guess) != 5:
        print("That was not a five-letter word!")
        guess = input("Enter a word: ")

    # Loop for a total of six guesses
    for i in range(6):
        # Checks if the Wordle has been guessed
        if guess == wordle:
            print("You guessed it!")
            break
        
        # Check each letter's placement and correctness
        for index in range(5):
            check_place(guess[index], wordle[index], ["First", "Second", "Third", "Fourth", "Fifth"][index])
            if guess[index] != wordle[index]:
                if guess[index] in wordle:
                    print(f"{['First', 'Second', 'Third', 'Fourth', 'Fifth'][index]} letter: right letter, wrong place.")

        # Prompts user to keep guessing
        guess = input("Enter a word: ")
        while len(guess) != 5:
            print("That was not a five-letter word!")
            guess = input("Enter a word: ")

    if guess != wordle:
        print("You have used up your guesses. The Wordle was " + wordle + ".")
        print("Try again next time!")

    found = 'no'
#WOO
