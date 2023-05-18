let vw, vh, value, circleColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleColor = color('red');
}

function draw() {
  vw = windowWidth;
  vh = windowHeight;
  
  
  background(173, 216, 230);

  fill(circleColor);
  circle(300, vh/2, vw/2);

  fill('blue');
  rect(0, vh / 2, vw, vh);

  fill('green');
  triangle(vw, vh / 2, vw / 1.5, vh / 6, vw / 3, vh / 2);

  if (mouseIsPressed) {
   
    
    circleColor = color(random(255), random(255), random(255));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
