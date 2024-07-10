var brushSize = 500;


function setup() {
   createCanvas(windowWidth, windowHeight);
  background(255);
  // noCursor();
}


function draw() {
  erase(); 
  ellipse(mouseX,mouseY,brushSize);
   noErase();

}

function mouseDragged() {
  erase(); 
  ellipse(mouseX,mouseY,brushSize);
   noErase();

}






