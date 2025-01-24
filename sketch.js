//setup() is called once at page-load
function setup() {
  createCanvas(400, 600); // make an HTML canvas element width x height pixels
}

//setting widths and heights for the different rectangles to be filled
let hourRectWidth = 350; 
let hourRectHeight = 30; 

let minuteRectWidth = 300; 
let minuteRectHeight = 180; 

let secondRectWidth = 300; 
let secondRectHeight = 180; 

let hourSquareSize = hourRectWidth / 12; 
let minuteSquareSize = minuteRectWidth / 10; 
let secondSquareSize = secondRectWidth / 10;

function draw() {
  let hr = hour() % 12 || 12; //keeping 12 hr formatt
  let min = minute(); 
  let sec = second(); 

  background(180);

  // drawing the rectangles to be filled for each of the time sections
  drawHourRectangle(hr); 
  drawMinuteRectangle(min); 
  drawSecondRectangle(sec);
}

function drawHourRectangle(hourCount) {
  let startX = width/2- hourRectWidth/2;
  // let startX = width- hourRectWidth/2;
  let startY = 30;
  let squaresPerRow = 12; 

  // reference: https://processing.org/tutorials/color
  fill(153, 102, 255);
  noStroke();

   //looping to add each of the mini rectangles representing the hours
  for (let i = 0; i< hourCount; i++) {
    let row = floor(i/squaresPerRow); 
    let col = i % squaresPerRow; 

    let x = startX + col * hourSquareSize; 
    let y = startY + row * hourSquareSize; 

    //creating mini rect
    rect(x, y, hourSquareSize, hourSquareSize); 
  }

  //creating the border
  noFill();
  stroke(0);
  rect(startX, startY, hourRectWidth, hourRectHeight);
}

// copying code above for minute with adjustments to make it work for 60 minutes
function drawMinuteRectangle(minuteCount) {
  let startX = width/2 - minuteRectWidth/2; 
  // let startX = width- hourRectWidth/2;
  let startY = 100; 
  let squaresPerRow = 10;

  // reference: https://processing.org/tutorials/color
  fill(255, 102, 51); 
  noStroke();

   //looping to add each of the mini rectangles representing the mimnnutes
  for (let i = 0; i< minuteCount; i++) {
    let row = floor(i/squaresPerRow); 
    let col = i % squaresPerRow; 

    let x = startX + col *minuteSquareSize; 
    let y = startY + row *minuteSquareSize; 
    //creating mini rect
    rect(x, y, minuteSquareSize, minuteSquareSize); 
  }
  
  //creating the border
  noFill();
  stroke(0);
  rect(startX, startY, minuteRectWidth, minuteRectHeight);
}

// copying code above for seconds, replacing variable names
function drawSecondRectangle(secondCount) {
  let startX = width/2 - secondRectWidth/2; 
  // let startX = width- hourRectWidth/2;
  let startY = 330; 
  let squaresPerRow = 10; 

  // reference: https://processing.org/tutorials/color
  fill(100, 150, 255); 
  noStroke();

  //looping to add each of the mini rectangles representing the seconds
  for (let i = 0; i< secondCount; i++) {
    let row = floor(i/squaresPerRow); 
    let col = i % squaresPerRow; 

    let x = startX + col * secondSquareSize; 
    let y = startY + row * secondSquareSize;

    //creating mini rect
    rect(x, y, secondSquareSize, secondSquareSize); 
  }

  // creating border
  noFill();
  stroke(0);
  rect(startX, startY, secondRectWidth, secondRectHeight);
}
