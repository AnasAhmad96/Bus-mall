'use stirct';

let prodNames =[];
let prodVotes = [];
let prodShown = [];
BusMall.lastShown = [];

const images = document.getElementById('Result-msg');
const maxAttempts = 25;

let counter = 0;

function BusMall(name, source) {
  this.name = name;
  this.source = source;
  this.views = 0;
  this.votes = 0;
  BusMall.gloArr.push(this);
  prodNames.push(this.name);

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

function randomIndex() {
  return Math.floor(Math.random() * BusMall.gloArr.length);
}

console.log(prodNames);

const img1 = document.getElementById('left-image');
const img2 = document.getElementById('middle-image');
const img3 = document.getElementById('right-image');


let leftIndex;
let middleIndex ;
let rightIndex ;


function renderimgs() {
  leftIndex = randomIndex();
  middleIndex = randomIndex();
  rightIndex = randomIndex();
  console.log(leftIndex);
  console.log(middleIndex);
  console.log(rightIndex);


  while (leftIndex === middleIndex
        || leftIndex === rightIndex
        || rightIndex === middleIndex
        || BusMall.lastShown.includes(leftIndex)
        || BusMall.lastShown.includes(middleIndex)
        || BusMall.lastShown.includes(rightIndex)) {
    leftIndex = randomIndex();
    middleIndex = randomIndex();
    rightIndex = randomIndex();
  }

  BusMall.gloArr[leftIndex].views++;
  BusMall.gloArr[middleIndex].views++;
  BusMall.gloArr[rightIndex].views++;

  BusMall.lastShown[0] = leftIndex;
  BusMall.lastShown[1] = middleIndex;
  BusMall.lastShown[2] = rightIndex;

  img1.src = BusMall.gloArr[leftIndex].source;
  img2.src = BusMall.gloArr[middleIndex].source;
  img3.src = BusMall.gloArr[rightIndex].source;

}
renderimgs();


const imgSection = document.getElementById('sec1');
imgSection.addEventListener('click', handleClick);

let resultBtn;


function handleClick(event) {
  counter++;
  console.log(event);
  if(maxAttempts >= counter){
    if (event.target.id === 'left-image') {
      BusMall.gloArr[leftIndex].votes++;
    }else if(event.target.id === 'middle-image'){
      BusMall.gloArr[middleIndex].votes++;
    }else if(event.target.id === 'right-image'){
      BusMall.gloArr[rightIndex].votes++;
    }else{
      counter--;
      return;
    }
    renderimgs();
  }
  else{

    resultBtn = document.getElementById('btn');
    resultBtn.addEventListener('click', handleShow);
    imgSection.removeEventListener('click', handleClick);

  }
}

function handleShow() {
  renderList();
  displayChart();

  resultBtn.removeEventListener('click', handleShow);
}

function renderList() {
  const ul = document.getElementById('unlist');

  for (let i = 0; i < BusMall.gloArr.length; i++) {
    prodVotes.push(BusMall.gloArr[i].votes);
    prodShown.push(BusMall.gloArr[i].views);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${BusMall.gloArr[i].name} has this number of votes ( ${BusMall.gloArr[i].votes} ), and has showed up ( ${BusMall.gloArr[i].views} )`;


  }

}

console.log(prodVotes);


function displayChart(){

  let ctx = document.getElementById('myChart');
  let chartColors = ['#e6194b', '#3cb44b', '#ffe119', '#0082c8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#d2f53c', '#fabebe', '#008080', '#e6beff', '#aa6e28', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000080', '#000000'];
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: prodNames,
      datasets: [{
        label: '# of Votes',
        data: prodVotes,
        backgroundColor: chartColors,
        borderWidth: 1,
      },{
        label: 'Times Displayed',
        data: prodShown,
        borderWidth: 1,
      }]
    },
  });
}
