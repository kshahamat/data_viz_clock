// setup() is called once at page-load
// function setup() {
//     createCanvas(800,600); // make an HTML canvas element width x height pixels
// }

// // draw() is called 60 times per second
// function draw() {
//     let hr = hour();
//     let min = minute();
//     let sec = second();

//     background(225);
//     textSize(32);
//     fill(180);
//     text(hr, 10, 30);
//     fill(100);
//     text(min, 10, 60);
//     fill(0);
//     text(sec, 10, 90);
// }

let hourRectWidth = 300; // Width of the hour rectangle
let hourRectHeight = 60; // Height of the hour rectangle

let minuteRectWidth = 300; // Width of the minute rectangle
let minuteRectHeight = 180; // Height of the minute rectangle

let secondRectWidth = 300; // Width of the second rectangle
let secondRectHeight = 180; // Height of the second rectangle

let hourSquareSize; // Size of each square for hours
let minuteSquareSize; // Size of each square for minutes
let secondSquareSize; // Size of each square for seconds

function setup() {
  createCanvas(400, 800); // Create a canvas with extra height for three rectangles
  hourSquareSize = hourRectWidth / 12; // 12 squares for hours (12-hour format)
  minuteSquareSize = minuteRectWidth / 10; // 10 squares per row for minutes
  secondSquareSize = secondRectWidth / 10; // 10 squares per row for seconds
}

function draw() {
  background(220); // Light gray background

  let h = hour() % 12 || 12; // Current hour (12-hour format)
  let m = minute(); // Current minute (0-59)
  let s = second(); // Current second (0-59)

  drawHourRectangle(h); // Draw the hour rectangle filling up with squares
  drawMinuteRectangle(m); // Draw the minute rectangle filling up with squares
  drawSecondRectangle(s); // Draw the second rectangle filling up with squares
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

    let x = startX + col * hourSquareSize*11; // X position of the square
    let y = startY + row * hourSquareSize; // Y position of the square

    rect(x, y, hourSquareSize, hourSquareSize); // Draw the square
  }

  // Draw the rectangle border
  noFill();
  stroke(0);
  rect(startX, startY, hourRectWidth, hourRectHeight);
}

function drawMinuteRectangle(minuteCount) {
  let startX = width / 2 - minuteRectWidth / 2; // Center the rectangle horizontally
  let startY = 300; // Position the minute rectangle below the hour rectangle

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

  // Draw the rectangle border
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
