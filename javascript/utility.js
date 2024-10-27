// acces by function
// hide element
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
// show element by id
function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden');
}
// generate random alphabet
function generateARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');
    // console.log(alphabets)

    // show random index
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    // console.log(index)

    // show random alphabet using index
    const alphabet = alphabets[index]
    // console.log(index,alphabet)
    return alphabet
}

// set background color by id
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}
// remove background color by id
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}
// getTextElementById
function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
// setTextElementById
function setTextElementById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
// gameOver()
function gameOver(){
    hideElementById('play-ground');
    showElementById('score');

    // display final score
    const lastScore = getTextElementById('current-score');
    // console.log(lastScore);
    setTextElementById('last-score',lastScore)

    // clear highlight alphabet
    const currentAlphabet = getElmentTextById('current-alphabet');
    // console.log(currentAlphabet)
    removeBackgroundColorById(currentAlphabet)

}
// find element 
function getElmentTextById(elementId){
    const element = document.getElementById(elementId)
    const text = element.innerText
    return text;
}