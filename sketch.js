var rectm, rectf

function setup() {
  createCanvas(800,400);
  rectm=createSprite(400, 200, 50, 50);
  rectm.shapeColor="red";
  rectf=createSprite(400, 200, 50, 50);
  rectf.shapeColor="red";
}

function draw() {
  background(255,255,255); 
  rectm.x=World.mouseX 
  rectm.y=World.mouseY 
  if(rectm.x-rectf.x<rectm.width/2+rectf.width/2&&
    rectf.x-rectm.x<rectm.width/2+rectf.width/2&&
    rectm.y-rectf.y<rectm.height/2+rectf.height/2&&
    rectf.y-rectm.y<rectm.height/2+rectf.height/2){
    rectf.shapeColor="green";
    rectm.shapeColor="green"; 
  }
  else{
    rectf.shapeColor="red"
    rectm.shapeColor="red";  
  }
  drawSprites();
}