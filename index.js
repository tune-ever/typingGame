
// current index of typing
let index = 0
let wrong = 0
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
    // if key pressed was a single letter, we do something:
    if(event.key.length == 1){
        //start timer at first press:
        if(index == 0){
            let sec = 0
            let timer = setInterval(function () {
             document.getElementById('timer').innerHTML = "Seconds: " + sec
            sec++
            }, 1000)
        }
        // do something only if we have not reached the end of text:
        if(index < textContent.length){
            currentChar = textContent.charAt(index)
            // check if key pressed was correct:
            if(currentChar == event.key){
                chars[index].className = 'correct'
            }
            else{
                chars[index].className = 'incorrect'
                wrong++
                document.getElementById('wrong').innerHTML = "mistakes: " + wrong
            }
            index++
            //special case check: if we reached last letter
            // then we dont add the line id anymore
            if(index != textContent.length){
                //move the line that shows current index:
                chars[index].id = 'current'
                // stop timer at last letter:
            }
            // remove id from the last element
            chars[index-1].id = ''
        }
        else{
            //stop timer
            clearInterval(timer)
        }
    }
})

function timer(num) {
    
    if(num == 0){
        clearInterval(1)
    }
}
