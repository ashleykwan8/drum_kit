
// length of the number of buttons on the page
// Detecting Button Press
const numOfDrumButtons = document.querySelectorAll(".drum").length;

// use For Loop to go through all the buttons and add an event listener to each 
for (var i=0; i<numOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click', function() {
        // 'this' is the identity of button that is triggered by the event listener
        
        // targets the button and will change the text color to white when clicked
        // this.style.color = "white";

        // switch statement
        // target the button
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        // adding animation to button
        buttonAnimation(buttonInnerHTML);

        // switch (buttonInnerHTML) {
        //     case 'w':
        //         var tom1 = new Audio("sounds/tom-1.mp3");
        //         tom1.play();
        //         break; /*stops the code*/
        //     case 'a':
        //         var tom2 = new Audio("sounds/tom-2.mp3");
        //         tom2.play();
        //         break;
        //     case 's':
        //         var tom3 = new Audio("sounds/tom-3.mp3");
        //         tom3.play();
        //         break;
        //     case 'd':
        //         var tom4 = new Audio("sounds/tom-4.mp3");
        //         tom4.play();
        //         break;
        //     case 'j':
        //         var snare = new Audio("sounds/snare.mp3");
        //         snare.play();
        //         break;
        //     case 'k':
        //         var crash  = new Audio("sounds/crash.mp3");
        //         crash.play();
        //         break;
        //     case 'l':
        //         var kick = new Audio("sounds/kick-bass.mp3");
        //         kick.play();
        //         break;
    
        //     default:
        //         console.log(buttonInnerHTML) /*use case*/
        //         break;
        // }
    });
}

// Detecting keyboard press
document.addEventListener('keydown', function(event) {
    /*we want the key property related to the key pressed*/
    makeSound(event.key);

    // add animation to key that's pressed
    buttonAnimation(event.key);
})

function makeSound(key){

    switch (key) {
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break; /*stops the code*/
        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'k':
            var crash  = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'l':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(key); /*use case*/
            break;
    }

}

function buttonAnimation (currentKey) {

    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    // after pressed class is added, delay and remove "pressed" to get rid of the shadow effect
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100); 

}









// targets the first button and "listens" for a click event to occur to call the function
// document.querySelector("button").addEventListener('click', handleClick);

// function playSound () {
//     var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
// }