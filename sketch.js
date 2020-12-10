var boxBottom,boxSide1,boxSide2;
var ball1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball1 = new Ball(220,650);

	boxBottom=createSprite(685, 655, 200,20);
	boxBottom.shapeColor=color("navy")

	boxSide1=createSprite(boxBottom.x+100, 615, 20,100);
	boxSide1.shapeColor=color("navy")

	boxSide2=createSprite(boxBottom.x-100, 615, 20,100);
	boxSide2.shapeColor=color("navy")

	boxBottom = Bodies.rectangle(685, 655, 200, 20 , {isStatic:true} );
	World.add(world, boxBottom);

	boxSide1 = Bodies.rectangle(boxBottom.x+100, 615,20, 100 , {isStatic:true} );
	World.add(world, boxSide2);

	boxSide2 = Bodies.rectangle(boxBottom.x-100, 615,20, 100 , {isStatic:true} );
	World.add(world, boxSide2);

	Engine.run(engine);
  


}


function draw() {
	
	rectMode(CENTER);
  background("teal");
  
  ball1.display();

  drawSprites();
 
}


