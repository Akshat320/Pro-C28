
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Constraint = Matter.Constraint;

//var boy, boyImg;
//var stone, stoneImg;

function preload()
{
//stoneImg = loadImage("stone.png");
//boyImg = loadImage("boy.png");	
}

function setup() {
	createCanvas(1500, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(750, 740, 1500, 20);
    tree = new Tree(900, 270, 50, 200);
    mango1 = new Mango(950,400,3);
    mango2 = new Mango(1025,365,3);
    mango3 = new Mango(1090,320,3);
    mango4 = new Mango(1100,395,3);
    mango5 = new Mango(1250,360,3);
    mango6 = new Mango(1180,340,3);
    mango7 = new Mango(1020,450,3);
    mango8 = new Mango(1170,435,3);
    mango9 = new Mango(1280,435,3);

    

  stone = new Stone(240,640,2);

  boy = new Boy(220,580,20,50);
 
  slingshot = new SlingShot(stone.body,{x: 200, y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  Engine.update(engine);

  fill("red");
  text("Press Space for another try",50 ,50);
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
 
  boy.display();
  stone.display();

  slingshot.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);

  drawSprites();
 
}

  function mouseDragged()
  {
   Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
  }

  function mouseReleased()
  {
    slingshot.fly();
  }

  function keyPressed()
  {
    if (keyCode === 32)
    {
      Matter.Body.setPosition(stone.body, {x:240, y:640});
      slingshot.attach();
    }
  }

function detectCollision(lstone, lmango)
{
  
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
 
 if(distance<=lmango.r+lstone.r)
 {
 Matter.Body.setStatic(lmango.body, false);
 }
}