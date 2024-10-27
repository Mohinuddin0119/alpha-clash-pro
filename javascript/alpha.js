
// function play(){
//     // hide home screen
//     const hideSection = document.getElementById('home-screen');
//     // console.log(hideSection.classList);
//     hideSection.classList.add('hidden');

//     // show the playground 
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function continueGame(){
    // generate a random alphabet
    const alphabet = generateARandomAlphabet()
    // console.log("Random Alphabet is :",alphabet.toUpperCase())

    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

// acces by user function (both output is same)
function play(){
    // hide
    hideElementById('home-screen');
    hideElementById('score')
    // show
    showElementById('play-ground')

    // reset and update score and life
    setTextElementById('current-life',5)
    setTextElementById('current-score',0)
    // continue game
    continueGame()
}

// handle keyboard
function handleKeyboardButtonPress(event){
    // player pressed key
    const playerPressKey = event.key;
    // console.log("player fpress key is:",playerPressKey)

    // stop game
    if(playerPressKey === 'Escape' ){
        gameOver();
    }

    // expected key
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const targetAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressKey,targetAlphabet)

    // check right or wrong
    if(playerPressKey === targetAlphabet){
        // console.log('you get a point');

        const currentScore = getTextElementById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementById('current-score', updatedScore)

        // ---------------------------
        // step 1:get the current score element
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore)

        // increase score by 1
        // const newScore = currentScore + 1;

        // show the updated score
        // currentScoreElement.innerText = newScore;

        // start a new round
        // clear highlight alphabet
        removeBackgroundColorById(targetAlphabet)
        continueGame();
    }
    else{
        // console.log('you lost a life')

        const currentLife = getTextElementById('current-life');
        const updatedLife = currentLife - 1;
        // console.log(updatedLife)
        setTextElementById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }

        // -----------------
        // step 1: get the life element
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // console.log(currentLife)

        // decrease life 
        // const newLife = currentLife - 1

        // show the updated life
        // currentLifeElement.innerText = newLife;
    }
}

// capture key of keyboard
document.addEventListener('keyup', handleKeyboardButtonPress)