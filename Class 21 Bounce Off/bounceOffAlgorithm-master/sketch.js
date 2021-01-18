var fixedRect, movingRect;
var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(300,400,50,100);
  rect2 = createSprite(300,600,50,100);
  rect1.shapeColor = "red";
  rect2.shapeColor = "blue";
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

 rect2.velocityY = -5;
  rect1.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(rect1,rect2);
  drawSprites();
  
}
