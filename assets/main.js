//Declare variables

let inputname = document.getElementById('username');
let buttoninput = document.getElementById('button');
let paragraph = document.getElementById('text')

function WelcomeGreeting(){
  buttoninput.addEventListener('click', ()=>{
    paragraph.innerText = `Hello ${inputname.value}, welcome to the bootcamp.`
  })
}
//Event listener, specify the event and action to be taken
//paragraph.innertext fixes string that will be displayed (use back ticks).
//$fixes a variable within a string, .value to display the exact value within input string

WelcomeGreeting();