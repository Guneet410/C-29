const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;


function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

var options = {
  density : 0.001,
}

   rope= new Rope (6, {x: 245,y: 30});
  fruit = Bodies.circle (300,300,15,options) 
  Composite.add (rope.body, fruit)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
 fruitCon = new Link (rope,fruit);


}

function draw() 
{
  background(51);
  ground.show();
  rope.show();
  Engine.update(engine);
  var pos = fruit.position
  ellipse(pos.x,pos.y,15,15)  ;

 
   
}
