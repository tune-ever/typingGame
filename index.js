
// current index of typing
let index = 0
// current length of things in front of text:
let currentLength = 1
const theText = document.getElementById("write")
const textContent = "this is a typing game try to type all the characters as fast as possible"


// wrap all characters in a span element to change the color:
textContent.split('').forEach(character => {
    const charSpan = document.createElement('span')
    charSpan.innerText = character
    theText.appendChild(charSpan)
})

//initialize line:
const chars = document.querySelectorAll('span')
chars[0].id = 'current'

// When a user presses a key:
document.addEventListener("keydown", function(event) {
    //start timer at first press:
    if(index == 0){
        timer();
    }
    if(index < textContent.length){
        currentChar = textContent.charAt(index)
        // check if key pressed was correct:
        if(currentChar == event.key){
            chars[index].className = 'correct'
        }
        else{
            chars[index].className = 'incorrect'
        }
        //move the line that shows current index:
        // remove class from the last element
        index++
        chars[index].id = 'current'
        chars[index-1].id = ''
    }
})



function timer() {
    let sec = 0
    let timer = setInterval(function () {
        document.getElementById('timer').innerHTML = sec
        sec++
    }, 1000)
}