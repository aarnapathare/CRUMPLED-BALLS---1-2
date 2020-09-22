
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
  //Create the Bodies Here.
  
ground1 = new Ground(width/2,650,width,10)
dustbin = new Dustbin(1000,650)
  


paper = new Paper(40,380,20,20, {restitution:1})
var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } });
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground1.display();

  dustbin.display();
  paper.display();


}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:85, y:-85})
	}
}
