
// this targets the first button and "listens" for a click event to occur to call the function
document.querySelector("button").addEventListener('click', handleClick)

function handleClick () {
    alert("I got clicked!");
}