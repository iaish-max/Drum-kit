for (var i = 0; i < document.querySelectorAll(".drum").length; i++)
{

  // for click
  document.querySelectorAll(".drum")[i].addEventListener("click", function()
  {

    var buttonInnerText = this.textContent;
    makeSound(buttonInnerText);
    buttonAnimation(buttonInnerText);
  }   );
}

// for keypress
document.addEventListener("keypress", function(event)
{
  makeSound(event.key);
  buttonAnimation(event.key);
}    );

function makeSound(key)
{
  switch (key)
  {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "l":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "k":
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    default:

  }
}

function buttonAnimation(key){
  var currentKey = "."+key;
  document.querySelector(currentKey).classList.toggle("pressed");
  setTimeout(function(){document.querySelector(currentKey).classList.toggle("pressed");},100);
  console.log(currentKey);
}
