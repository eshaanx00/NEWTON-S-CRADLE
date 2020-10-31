
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1=new bob(200,500)
	bob2=new bob(260,500)
	bob3=new bob(320,500);
	bob4=new bob(380,500);
	bob5=new bob(440,500)

	roof1=new roof(320,200,300,30)

	rope1=new Rope(bob1.body,roof1.body,-120,0)
	rope2=new Rope(bob2.body,roof1.body,-60,0)
	rope3=new Rope(bob3.body,roof1.body,0,0)
	rope4=new Rope(bob4.body,roof1.body,60,0)
	rope5=new Rope(bob5.body,roof1.body,120,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-145,y:-145})
	}
  }



