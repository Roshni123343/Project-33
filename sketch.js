const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var bg;
var ice=[];
var maxSnow=100;
var ground;
var boy;
var boyImg;

function preload(){
  bg=loadImage("snow1.jpg");
  boyImg = loadImage("boy.jpg");
}

function setup() {
  
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  boy = createSprite(1000,450,50,50);
  boy.addImage(boyImg);
  boy.scale = 1.25;
  


  ground = createSprite(600,580,1200,70);
  ground.visible = false;
  
  if(frameCount % 105 === 0){
  for(var i=0; i<maxSnow; i++){
  ice.push(new Snow(Math.round((random(0,10))), Math.round(random(0,50))));
  }
 }


}

function draw() {
  background(bg);  
  Engine.update(engine);

  

  if(keyCode===32 && boy.y>=200){
    boy.velocityY = -13;
  }

  boy.velocityY = boy.velocityY+0.5;

  boy.collide(ground);
  
  textSize(25);
  fill("black")
  stroke("black");
  strokeWeight(2);
  textFont("Times New Roman");
  text("PRESS THE 'SPACE BAR' TO MAKE THE SPRITE JUMP!",550,125);

  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
    }    

  
  drawSprites();

}