var numberOfDrumButton = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfDrumButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click",
    function() {
      var soundType = this.innerHTML;
      playSound(soundType);
      animation(soundType);

    });
}
document.addEventListener("keydown" ,function(event){
  var soundType = event.key;
  playSound(soundType);
  animation(soundType);
})



function playSound(soundType){
  switch (soundType) {
    case "w":
    var sound = new Audio('sounds/tom-1.mp3');
    sound.play();
      break;

    case "a":
    var sound = new Audio('sounds/tom-2.mp3');
    sound.play();
      break;

    case "s":
    var sound = new Audio('sounds/tom-3.mp3');
    sound.play();
      break;

    case "d":
    var sound = new Audio('sounds/tom-4.mp3');
    sound.play();
      break;

    case "j":
    var sound = new Audio('sounds/snare.mp3')
     sound.play();
      break;

    case "k":
    var sound = new Audio('sounds/crash.mp3');
    sound.play();
      break;

    case "l":
    var sound = new Audio('sounds/kick-bass.mp3');
    sound.play();
    break;

    default : allert(soundType);
  }
}

function animation(currentKey){
  var keyPressed  = document.querySelector("."+currentKey)
  keyPressed.classList.add("pressed");

  setTimeout(function(){
    keyPressed.classList.remove("pressed");
  },100);

}
