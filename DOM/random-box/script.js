const main = document.querySelector('main');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  var c1 = Math.floor(Math.random()*256);
  var c2 = Math.floor(Math.random()*256);
  var c3 = Math.floor(Math.random()*256);
  var x = Math.floor(Math.random()*100);
  var y = Math.floor(Math.random()*100);

  var div = document.createElement('div');
  div.style.height = "65px";
  div.style.width = "65px";
  div.style.position = "absolute";
  div.style.left = x+"%"
  div.style.top = y+"%"
  div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
  // div.style.backgroundColor = 'red';
  main.appendChild(div);
  console.log(div)
})