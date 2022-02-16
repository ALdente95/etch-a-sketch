const container = document.querySelector('.container');

for(let i = 256; i>0; i--){
const square = document.createElement('div');
square.classList.add('square');
container.appendChild(square);
console.log(i);
}

function resetBoard(e){
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.style='background-color: white');
}

function hover(e){
const{offsetWidth: width, offsetHeight: height}  = squares;
let {offsetX: x, offsetY: y} = e;
console.log(e);
console.log(x,y);

console.log(this,e.target);
if(this === e.target){
    e.target.style='background-color: black';
}
}



const squares = document.querySelectorAll('.square');
const reset = document.querySelector('.reset');
reset.addEventListener('click',resetBoard);
squares.forEach(square => square.addEventListener('mousemove',hover));

