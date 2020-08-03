const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var boxPart1,boxPart2,boxPart3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	boxPart1 = createSprite(300,600,20,100);
	boxPart2 = createSprite(500,600,20,100);
	boxPart3 = createSprite(400,650,200,20);

	paper = new Paper(200,200);

	paper = Bodies.circle(height , width , 5);
	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
 	background(0);
	paper.display();
  	drawSprites();
}