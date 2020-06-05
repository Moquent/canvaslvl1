var drawing = [];

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(0);  

  if(mouseIsPressed){
    var point = {
      x: mouseX,
      y: mouseY
    }
    drawing.push(point);
    console.log(point);
  }

  beginShape();
  stroke(255);
  strokeWeight(4);
  noFill();
  for(var i = 0; i < drawing.length; i++){
    vertex(drawing[i].x, drawing[i].y);
  }
  endShape();

  drawSprites();
}
