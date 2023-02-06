const hamburger = document.querySelector('#hamburger');
const shortCutlinks = document.querySelector('.shortCutlinks');

hamburger.addEventListener("click", ()=>{
    shortCutlinks.style.width = 0;
});
