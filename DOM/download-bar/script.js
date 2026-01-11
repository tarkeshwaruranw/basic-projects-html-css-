let h4 = document.querySelector('h4');
let btn = document.querySelector('button');
let bar = document.getElementById('bar');


let grow = 0;
btn.addEventListener('click', () =>{
  btn.style.pointerEvents='none'
  var int = setInterval(() =>{
    grow++;
    h4.innerHTML = grow+'%';
    bar.style.width= grow+'%';
    
  },100)

  setTimeout(() =>{
    clearInterval(int)
    btn.innerHTML='Downloaded'
    btn.style.opacity='0.5'
  },10000)
})