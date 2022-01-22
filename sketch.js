var bgImg;
var cat;
var mouse;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    catSitting= loadImage("images/cat1.png")
    catWalking = loadAnimation("images/cat2.png","images/cat3.png")
    catStanding = loadImage("images/cat4.png")
    mouseStanding = loadImage("images/mouse1.png")
    mouseTeasing = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseFinding  = loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     tom = createSprite(870,600)
    tom.addAnimation("sitting",catSitting)
    tom.addAnimation("walking",catWalking)
    tom.addAnimation("standing",catStanding)
    tom.scale = 0.2
    tom.setCollider("circle",0,0,500)

    jerry = createSprite(200,600)
    jerry.addAnimation("sanding",mouseStanding)
    jerry.addAnimation("teasing",mouseTeasing)
    jerry.addAnimation("Finding",mouseFinding)
    jerry.scale = 0.15
    jerry.setCollider("circle",0,0,50)
    
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.isTouching(jerry)){
        tom.changeAnimation("standing")
        tom.velocityX = 0;
        jerry.changeAnimation("Finding")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === 32){
        tom.changeAnimation("walking");
        tom.velocityX = -3;

        jerry.changeAnimation("teasing");
    }

}
