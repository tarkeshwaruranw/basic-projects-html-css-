let img = document.querySelector("img");
let like = document.querySelector("#like");

let lastTap = 0;

img.addEventListener("pointerdown", () => {
  const now = Date.now();
  if (now - lastTap < 300) {
    like.style.opacity = '1';
    like.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';

  }
   lastTap = now;

  setTimeout(function(){
    like.style.transform = 'translate(-50%, -300%) scale(1) rotate(0deg)';

  },700)
  setTimeout(function(){
    like.style.opacity = '0';
  },1000)
  setTimeout(function(){
    like.style.transform = 'translate(-50%, -50%) scale(0) rotate(-45deg)';
  },1200)
});
