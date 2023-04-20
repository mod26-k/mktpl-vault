![](src/photos/readmeheader.png)

# [LIVE DEMO HERE](https://mktpl-vault.herokuapp.com/)

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![GitHub](https://badgen.net/badge/icon/github?icon=github&label)](https://github.com)
[![Visual Studio](https://badgen.net/badge/icon/visualstudio?icon=visualstudio&label)](https://visualstudio.microsoft.com)
[![Npm](https://badgen.net/badge/icon/npm?icon=npm&label)](https://https://npmjs.com/)
![Terminal](https://badgen.net/badge/icon/terminal?icon=terminal&label)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![macOS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0)
![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
![Zoom](https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)


# Introduction


## How It Works
![](/photos/gamepage.png)
The player starts the game by selecting a category, which generates a word within that category. The category button becomes disabled to prevent players from 

![](/photos/wordgenerated.png)
The game informs the player of how many letters are in the generated word and displays the blank spaces for each letter. There is a guess counter at the bottom that tells the player how many attempts at guessing a letter is remaining.

![](/photos/youwin.png)
If the user guesses the word correctly, they win the game. If they don't guess the word correctly, and they've used all their guesses, they lose.

# Code I Had Trouble With
```
querySelectorAll(`.${guessedLetter}`)
        genWordArr[0].forEach(function(letter) {
            if (letter === guessedLetter) {
                character.forEach(function(guess){
                    guess.style.visibility = "visible"
                })
            }
        })
```
This code took me several hours over the course of days to solve because I had to fix many things to make it work. For example:
1. I had created an array within an array which affected the length and values of some variables I was referencing.
2. I had declared variables within a function and I had trouble figuring out how to reference them. I was eventually able to write the function without referencing them.
There was a lot of researching, trouble shooting, testing, and console logging that took up a large chunk of time.

## Some Immediate Changes I'd Like To Make:
- To add more categories.
- To fix the event-listener to only account for clicks on the letter buttons, not in the entire fieldset.
- To add CSS.
- To be able to start a new game without refreshing the page. Ideally, by selecting a new category at the end of the game.
- To fix the category button so that it does not continuously generate new words without clearing the original array.

## Some Features I Would Like To Add: 
- To change the guess counter to only subtract guesses, if the player guessed incorrectly. It currently counts down regardless of if the guess is correct or not, which will create problems with larger words.
- To add an all or nothing feature that allows the player to type in their guess of the entire word. If they guess the entire word, they win. If they get it wrong, game over.
- To add a timer to prevent unreasonably long game times, but the timer should be able to be toggled on/off by the user.
- To allow for multiple players. I'd like multiple players to be able to take turns guessing the generated word, and to be able to input their own word to have other players guess, rather than just the generated word.
- To be able to keep score for all players.
- To allow players to use their physical keyboard to input words or guesses.