let num = document.querySelector('.number');
let increment = document.querySelector('.increment');
let decrement = document.querySelector('.decrement');

let counter = 0;
increment.addEventListener('click',() =>{
  console.log("increment")
  counter++;
  num.innerHTML = counter;
})
decrement.addEventListener('click',() =>{
  console.log("increment")
  counter--;
  num.innerHTML = counter;
})