let h4 = document.querySelector("main h4");
const sounds = {
  KeyA : new Audio("audios/A0.mp3"),
  KeyS : new Audio("audios/A1.mp3"),
  KeyD : new Audio("audios/A2.mp3"),
  KeyF : new Audio("audios/A3.mp3"),
  KeyG : new Audio("audios/A4.mp3"),
  KeyH : new Audio("audios/A5.mp3")

}

addEventListener("keydown",(event) => {
  console.log(event.code);
  h4.innerHTML = event.code;
  if (sounds[event.code]) {
    sounds[event.code].currentTime = 0
    sounds[event.code].play();
  }
});
