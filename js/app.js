'use strict';

const leftImageElement = document.getElementById('left-image');
const middleImageElement = document.getElementById('middle-image');
const rightImageElement = document.getElementById('right-image');
// const maxAttempts = 25;
// let counter = 0;

function BusMall(name, path) {
  this.name = name;
  this.path = path;
  this.views = 0;
  this.votes = 0;
  BusMall.gloArr.push(this);
}
BusMall.gloArr = [];

new BusMall('bag', 'images/bag.jpg');
new BusMall('banana', 'images/banana.jpg');
new BusMall('bathroom', 'images/bathroom.jpg');
new BusMall('boots', 'images/boots.jpg');
new BusMall('breakfast', 'images/breakfast.jpg');
new BusMall('bubblegum', 'images/bubblegum.jpg');
new BusMall('chair', 'images/chair.jpg');
new BusMall('cthulhu', 'images/cthulhu.jpg');
new BusMall('dog-duck', 'images/dog-duck.jpg');
new BusMall('dragon', 'images/dragon.jpg');
new BusMall('pen', 'images/pen.jpg');
new BusMall('pet-sweep', 'images/pet-sweep.jpg');
new BusMall('scissors', 'images/scissors.jpg');
new BusMall('shark', 'images/shark.jpg');
new BusMall('sweep', 'images/sweep.png');
new BusMall('tauntaun', 'images/tauntaun.jpg');
new BusMall('unicorn', 'images/unicorn.jpg');
new BusMall('water-can', 'images/water-can.jpg');
new BusMall('wine-glass', 'images/wine-glass.jpg');
// console.log(BusMall.gloArr.path);

function randomIndex() {
  return Math.floor(Math.random() * BusMall.gloArr.length);
}



let leftIndex;
let middleIndex;
let rightIndex;

function renderimgs() {
  leftIndex = randomIndex();
  middleIndex = randomIndex();
  rightIndex = randomIndex();
  //   console.log(leftIndex);
  //   console.log(middleIndex);
  //   console.log(rightIndex);
  leftImageElement.src = BusMall.gloArr[leftIndex].path;
  middleImageElement.src = BusMall.gloArr[middleIndex].path;
  rightImageElement.src = BusMall.gloArr[rightIndex].path;
}
renderimgs();