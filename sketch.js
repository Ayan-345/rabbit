var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg,leavesImg;
var selectSprites;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}



function draw() {
  background(0);
  rabbit.x = World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  drawSprites();
  if (frameCount % 80=== 0) {
    if ( selectSprites== 1,2) {
      createApples()
    } else {
      createLeaves()
    }
}
function createApples() {
  Apples = createSprite(random(50,350),40,10,10)
  Apples.addImage(appleImg)
  Apples.scale = 0.1
  Apples.velocityY= 2
 Apples.lifetime = 300;
}
function createLeaves() {
  leaves = createSprite(random(50,350),40,10,10)
  leaves.addImage(leavesImg)
  leaves.scale = 0.1
  leaves.velocityY= 2
 leaves.lifetime = 300;
}

}
