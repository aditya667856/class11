
var trex ,trexImg , base ,baseImg;

function preload(){
  trexImg = loadAnimation("trex1.png","trex3.png","trex4.png");
  baseImg = loadAnimation("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create trex runner sprite
 trex = createSprite(100, 100 , 50, 50);
 trex.addAnimation("running",trexImg)
 trex.scale=.5;
 base = createSprite(150, 130, 20, 10);
 base.addAnimation("ground",baseImg);
}

function draw(){
  background("black")
  
drawSprites()
}
