
// length of the number of buttons on the page
const numOfDrumButtons = document.querySelectorAll(".drum").length;

// use For Loop to go through all the buttons to handle the event listener 
for (var i=0; i<numOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click', function() {
        // 'this' is the identity of button that is triggered by the event listener
        
        // targets the button and will change the text color to white when clicked
        this.style.color = "white";
    });
}









// targets the first button and "listens" for a click event to occur to call the function
// document.querySelector("button").addEventListener('click', handleClick);

// function playSound () {
//     var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
// }