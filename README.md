Fun little project aimed to sharpen and test my front end skills. Made with NextJS 

## Things left to add
- Add a fully working keyboard that allows users to click on letters.
- Add implmentation of local storage to allow users to save progress
- Responsiveness (wasn't really the focus)

## Topics learned and used during this project
- Made a custom hook
- Used NextJS built in API to host my own "word bank" API
- Sharpened my CSS skills (needs a bit more work though haha)
- Basic React/Next file structure
- Use of useState & useEffect

## Application overview
- Fetches from /api/words to fetch a random word and stores in state
- Allows for user to input 5 different letters
- Takes user input, creates an object of each letter and assigns it a color value.
- Checks if input matches exactly (green), is in the word but not at the right position (yellow), or not in the word at all (grey)
- Keeps track of previous guesses
- Updates keyboard colors to match

