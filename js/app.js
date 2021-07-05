'use strict';


const maxAttempts = 25;
let counter = 0;

function BusMall(name, path) {
  this.name = name;
  this.path = path;
  this.views = 0;
  this.votes = 0;
  BusMall.gloArr.push(this);
}
BusMall.gloArr = [];

new BusMall('bag', '/images/bag.jpg');
new BusMall('banana', '/images/banana.jpg');
new BusMall('bathroom', '/images/bathroom.jpg');
new BusMall('boots', '/images/boots.jpg');
new BusMall('breakfast', '/images/breakfast.jpg');
new BusMall('bubblegum', '/images/bubblegum.jpg');
new BusMall('chair', '/images/chair.jpg');
new BusMall('cthulhu', '/images/cthulhu.jpg');
new BusMall('dog-duck', '/images/dog-duck.jpg');
new BusMall('dragon', '/images/dragon.jpg');
new BusMall('pen', '/images/pen.jpg');
new BusMall('pet-sweep', '/images/pet-sweep.jpg');
new BusMall('scissors', '/images/scissors.jpg');
new BusMall('shark', '/images/shark.jpg');
new BusMall('sweep', '/images/sweep.png');
new BusMall('tauntaun', '/images/tauntaun.jpg');
new BusMall('unicorn', '/images/unicorn.jpg');
new BusMall('water-can', '/images/water-can.jpg');
new BusMall('wine-glass', '/images/wine-glass.jpg');
// console.log(BusMall.gloArr.path);

function randomIndex() {
  return Math.floor(Math.random() * BusMall.gloArr.length);
}

const leftImageElement = document.getElementById('left-image');
const middleImageElement = document.getElementById('middle-image');
const rightImageElement = document.getElementById('right-image');

let leftIndex;
let middleIndex;
let rightIndex;

function renderimgs() {
  leftIndex = randomIndex();
  middleIndex = randomIndex();
  rightIndex = randomIndex();
  console.log(leftIndex);
  console.log(middleIndex);
  console.log(rightIndex);
  while (leftIndex === middleIndex
        || leftIndex === rightIndex
        || rightIndex === middleIndex) {
    leftIndex = randomIndex();
    middleIndex = randomIndex();
    rightIndex = randomIndex();
  }
  leftImageElement.src = BusMall.gloArr[leftIndex].path;
  middleImageElement.src = BusMall.gloArr[middleIndex].path;
  rightImageElement.src = BusMall.gloArr[rightIndex].path;
  BusMall.gloArr[leftIndex].views ++;
  BusMall.gloArr[middleIndex].views ++;
  BusMall.gloArr[rightIndex].views ++;
}
renderimgs();
leftImageElement.addEventListener('click', handleClick);
middleImageElement.addEventListener('click', handleClick);
rightImageElement.addEventListener('click', handleClick);
function handleClick(event) {
  counter++;
  // console.log(event);
  if(maxAttempts >= counter){
    if (event.target.id === 'left-image') {
      BusMall.gloArr[leftIndex].votes++;
    }else if(event.target.id === 'middle-image'){
      BusMall.gloArr[middleIndex].votes++;
    }else if(event.target.id === 'right-image'){
      BusMall.gloArr[rightIndex].votes++;
    }
    renderimgs();
  }else{
    renderList();
  }
}
function renderList() {
  const ul = document.getElementById('unlist');
  for (let i = 0; i < BusMall.gloArr.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${BusMall.gloArr[i].name} has this number of votes ( ${BusMall.gloArr[i].votes} ), and has showed up ( ${BusMall.gloArr[i].views} )`;
  }
  leftImageElement.addEventListener('click', handleClick);
  middleImageElement.addEventListener('click', handleClick);
  rightImageElement.addEventListener('click', handleClick);
}
// function renderimgs() {
//   leftIndex = randomIndex();
//   middleIndex = randomIndex();
//   rightIndex = randomIndex();

//   while (leftImageElement === middleImageElement
//     || leftImageElement === rightImageElement
//     || rightImageElement === middleImageElement) {
//     leftImageElement = randomIndex();
//     middleImageElement = randomIndex();
//     rightImageElement = randomIndex();
//   }
//   leftImageElement.src = BusMall.gloArr[leftIndex].path;
//   middleImageElement.src = BusMall.gloArr[middleIndex].path;
//   rightImageElement.src = BusMall.gloArr[rightIndex].path;
// }
// renderimgs();