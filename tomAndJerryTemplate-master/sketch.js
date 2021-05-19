
function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
    tom1=loadAnimation("images/cat1.png")
    tom2=loadAnimation("images/cat2.png","images/cat3.png")
    tom4=loadAnimation("images/cat4.png")
    jerry1 = loadAnimation("images/mouse2.png")
    jerry2 = loadAnimation("images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600);
    tom.addAnimation("tom",tom1)
    jerry=createSprite(200,600);
    jerry.addAnimation("jerry",jerry1)

    tom.scale=0.2;
    jerry.scale=0.2;


}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if( tom.x - jerry.x < (tom.width-jerry.width)/2){
        tom.addAnimation("tom",tom4)
        jerry.addAnimation("jerry",jerry2)
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode===LEFT_ARROW){
      tom.velocityX=-2
      tom.addAnimation("tom",tom2)
  }

}
