let trails = [];

function setup() {
  const canvas = createCanvas(windowWidth, document.body.scrollHeight);
  canvas.style("position", "absolute"); // Position the canvas absolutely
  canvas.style("top", "0");
  canvas.style("left", "0");
  canvas.style("z-index", "-100"); // Send the canvas behind other elements
  canvas.style("pointer-events", "none"); // Allow clicks to pass through the canvas
  noCursor();
  noFill();
}

function draw() {
    background(100, 149, 237, 20); // Cornflower blue background with low opacity for fading effect

  heart(mouseX, mouseY, 15);
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}