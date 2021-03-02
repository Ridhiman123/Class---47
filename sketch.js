const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var ground, ball;
var basketi,balli,audience;

function preload(){
  balli = loadImage("ball.png")
  basketi = loadImage("basket.png")
  audience = loadImage("Audience.jpg")
}
function setup() {
  createCanvas(1200,515);
  engine = Engine.create();
  world = engine.world;

  var still=
  {
    isStatic:true
  }
  ground = Bodies.rectangle(100,500,2300,10,still);
  World.add(world,ground);

  var dribble = {
    restitution:1,
    density:8,
    friction:1
  }
  ball = Bodies.circle(300,110,29,dribble)
  World.add(world,ball)

  
}
  



function draw() {
  background("lightgreen");  
  Engine.update(engine); 
  rectMode(CENTER)
  rect(100,500,2300,10);
  
  push()
  translate(ball.position.x,ball.position.y)
  imageMode(CENTER)
  image(balli,0,0,60,50)
  pop()
  imageMode(CENTER)

  image(basketi,1010,250,300,500)
  drawSprites();
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:200,y:-180})
  }
}