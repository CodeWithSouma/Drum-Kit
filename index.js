
// detecting button press 
var numberOfDrumButton = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButton; i++){

    document.querySelectorAll("button")[i].addEventListener("click",function (){ //annomas function
        // what to do wnen click detected   
       var buttonName = this.innerText;
       makeSound(buttonName);//pass button name as a key

        // call button animation function
        buttonAnimation(buttonName); // pass button text like w,a,s,d etc
          
    });

}


// detecting key press
document.addEventListener("keypress", function (event){

    makeSound(event.key); // which key press on keybord, pass into function

    // call button animation function
    buttonAnimation(event.key);//pass button text like w,a,s,d etc

    
});


// this function take input as a button name or key and return corrosponding sounds
function makeSound(key){
    switch (key) {
        case 'w':
             var tom1 = new Audio("sounds/tom-1.mp3");
             tom1.play();
         break;

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
             var crash = new Audio("sounds/crash.mp3");
             crash.play();
         break;

         case 'l':
             var kick = new Audio("sounds/kick-bass.mp3");
             kick.play();
         break;

        default:
            console.log(buttonName);
            break;
    }

}




// button animation

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    //restore previous looks 
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);
}