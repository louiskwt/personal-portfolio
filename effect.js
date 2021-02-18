// Typing effect

const subtitleText = document.querySelector('#animated-text');
const textArr = ["I'm a self-taught web developer", "I'm an educator", "I'm a self-starter"];
const speed = 100;
let text = "";

let currentTextIndex = -1;
let letterIndex = -1;

// Update Text
function updateText() {
    currentTextIndex++;
    // reset currentTextIndex once it reaches to the end of the array
    if(currentTextIndex === textArr.length) {
        currentTextIndex = 0;
    }
    // update text
    text = textArr[currentTextIndex];
    typeLetter();
}

function typeLetter() {
    letterIndex++
    if(letterIndex < text.length) {
        setTimeout(() => {
            subtitleText.textContent += text[letterIndex];
            typeLetter()
        }, speed);
    } else {
        // 
        setTimeout(() => {
            removeLetter()
        }, 1000)
    }
}

function removeLetter() {
    // decrement letter Index to get to the next letter
    letterIndex--
    if(letterIndex >= 0) {
        setTimeout(() => {
            subtitleText.textContent = text.slice(0, letterIndex);
            removeLetter()
        }, speed)
    } else {
        // no more letter to be removed
        // recall updateText to start again
        updateText()
    }

}
// Intial Call to start the effect
updateText()