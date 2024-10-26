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
    console.log(index,alphabet)
    return alphabet

}
