const para = document.querySelector("p");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerHTML;

let iteration = 0;
let interval;

function randomText(){
  const str = text
      .split("")
      .map((char, index) => {
        if (index < iteration) {
          return char;
        }
        return characters.split("")[Math.floor(Math.random() * 52)];
      })
      .join("");
      para.innerText = str;
      iteration += 0.4;

      if(iteration >= text.length){
        clearInterval(interval);
      }
}
para.addEventListener('mouseenter', ()=>{
  clearInterval(interval)
  iteration = 0;

  interval = setInterval(randomText, 35);

})
