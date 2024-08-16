function setup() {
    createCanvas(400, 400);
    background("white")
  }
  
  function draw() {
    stroke("rgb(250,11,11)9,235) ");
    fill("#D10707");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  