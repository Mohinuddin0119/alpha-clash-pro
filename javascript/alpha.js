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
    console.log("Random Alphabet is : ",alphabet)

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
    // show
    showElementById('play-ground')
    // continue game
    continueGame()
}