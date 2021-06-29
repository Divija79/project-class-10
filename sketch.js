var ship;
var ship_moving;
var sea;
var seaImage;


function preload(){
ship_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage=loadImage("sea.png");
}

function setup(){
  
  createCanvas(400,400);
  background("blue")
  
  sea=createSprite(200,200,600,300);
  sea.addImage("sea",seaImage);
  sea.x=200;
  sea.velocityX=-5;
  sea.scale=0.3;
  ship =createSprite(170,250,70,90);
  ship.addAnimation("moving",ship_moving);
  ship.scale=0.3;
}

function draw() {
  background("white");
    sea.velocityX=-5
if(sea.x < 0){
  sea.x = sea.width/8;
}

 drawSprites();
}
