// function play(){
//     // hide home screen
//     const hideSection = document.getElementById('home-screen');
//     // console.log(hideSection.classList);
//     hideSection.classList.add('hidden');

//     // show the playground 
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

// acces by user function (both output is same)
function play(){
    // hide
    hideElementById('home-screen');
    // show
    showElementById('play-ground')
}