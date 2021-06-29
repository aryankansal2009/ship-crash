var shipImg,ship,seaImage,sea;
function preload(){

  shipImg=loadAnimation("ship1.png", "ship2.png")
  seaImage=loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);

  ship=createSprite(70,180,20,20)
  ship.addAnimation("ship",shipImg)
  ship.scale=0.2
  sea.x=sea.width/2
  sea.velocityX=-2;
  sea.visible=false
  
}

function draw() {
  background("blue");
  if(keyDown("space")){
   
  }
  ship.velocityY = ship.velocityY+0.8

  if(sea.x<0){
    sea.x=sea.width/2;
  }
 ship.collide(sea);
 drawSprites()
}