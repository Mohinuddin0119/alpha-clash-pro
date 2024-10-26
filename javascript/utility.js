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

