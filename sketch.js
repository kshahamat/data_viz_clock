//setup() is called once at page-load
function setup() {
  createCanvas(400, 700); // make an HTML canvas element width x height pixels
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
  let hr = hour() % 12 || 12; 
  let min = minute(); 
  let sec = second(); 

  background(180);

  // drawing the rectangles to be filled for each of the time sections
  drawHourRectangle(hr); 
  drawMinuteRectangle(min); 
  drawSecondRectangle(sec); f
}

function drawHourRectangle(hourCount) {
  let startX = width / 2 - hourRectWidth / 2; // Center the rectangle horizontally
  let startY = 50; // Position the hour rectangle at the top

  let squaresPerRow = 12; // One square per hour
  let totalRows = 1; // Only one row needed for 12 hours

  fill(153, 102, 255); // Purple color for hours
  noStroke();

  for (let i = 0; i < hourCount; i++) {
    let row = floor(i / squaresPerRow); // Current row
    let col = i % squaresPerRow; // Current column

    let x = startX + col * hourSquareSize; // X position of the square
    let y = startY + row * hourSquareSize; // Y position of the square

    rect(x, y, hourSquareSize, hourSquareSize); // Draw the square
  }

  // Draw the rectangle border
  noFill();
  stroke(0);
  rect(startX, startY, hourRectWidth, hourRectHeight);
}

function drawMinuteRectangle(minuteCount) {
  let startX = width / 2 - minuteRectWidth / 2; 
  let startY = 300; 

  let squaresPerRow = 10; // 10 squares per row
  let totalRows = 6; // Total rows to make 60 squares

  fill(255, 102, 51); // Orangey-red color for minutes
  noStroke();

  for (let i = 0; i < minuteCount; i++) {
    let row = floor(i / squaresPerRow); // Current row
    let col = i % squaresPerRow; // Current column

    let x = startX + col * minuteSquareSize; // X position of the square
    let y = startY + row * minuteSquareSize; // Y position of the square

    rect(x, y, minuteSquareSize, minuteSquareSize); // Draw the square
  }

  noFill();
  stroke(0);
  rect(startX, startY, minuteRectWidth, minuteRectHeight);
}

function drawSecondRectangle(secondCount) {
  let startX = width / 2 - secondRectWidth / 2; // Center the rectangle horizontally
  let startY = 500; // Position the second rectangle below the minute rectangle

  let squaresPerRow = 10; // 10 squares per row
  let totalRows = 6; // Total rows to make 60 squares

  fill(100, 150, 255); // Blue color for seconds
  noStroke();

  for (let i = 0; i < secondCount; i++) {
    let row = floor(i / squaresPerRow); // Current row
    let col = i % squaresPerRow; // Current column

    let x = startX + col * secondSquareSize; // X position of the square
    let y = startY + row * secondSquareSize; // Y position of the square

    rect(x, y, secondSquareSize, secondSquareSize); // Draw the square
  }

  // Draw the rectangle border
  noFill();
  stroke(0);
  rect(startX, startY, secondRectWidth, secondRectHeight);
}
