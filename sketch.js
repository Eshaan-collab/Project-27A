
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var box;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
box=new Box(400,100,400,20);
ball1=new Ball(300,100);
ball2=new Ball(400,100);
ball3=new Ball(420,100);
ball4=new Ball(480,100);
ball5=new Ball(540,100);
rope1=new Rope(ball1.body,{x:300,y:100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  box.display();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
 rope1.display();


}



