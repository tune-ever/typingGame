
// current index of typing
let index = 0
// current length of things in front of text:
let currentLength = 1
const theText = document.getElementById("write")
const textContent = "this is a typing game try to type all the characters as fast as possible"
let regex = /[a-z]/g

// wrap all characters in a span element to change the color:
textContent.split('').forEach(character => {
    const charSpan = document.createElement('span')
    charSpan.innerText = character
    theText.appendChild(charSpan)
})

// When a user presses a key:
document.addEventListener("keydown", function(event) {
    // Otherwise we do nothing
        currentChar = textContent.charAt(index)
        const chars = document.querySelectorAll('span')
        // check if key pressed was correct:
        if(currentChar == event.key){
            chars[index].className = 'correct'
        }
        else{
            chars[index].className = 'incorrect'
        }
        index++
})

