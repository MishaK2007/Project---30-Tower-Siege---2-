const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var slingshot,polygeon;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16;
var blocks1,blocks2,blocks3,blocks4,blocks5,blocks6;
var blocks7,blocks8,blocks9;
var polygonImg;
var engine,world;
var ground, stand1, stand2;

function preload(){
   polygonImg = loadImage("polygon.png");//for presaving or preloading the image;
}
function setup(){
    createCanvas(900,400);
    engine = Engine.create();//creating an engine;
    world = engine.world;//creating a world using the engine;

    ground = new Ground();

    polygoen = Bodies.circle(50,200,20);//creating a circle body;
    World.add(world, polygoen);

    slingshot = new SlingShot(this.polygoen,{x:100,y:200});//creating a slingshot using the commands written in the Slinshot class 
    //this.polygoen = this.bodyA;

    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);

   //level one
   block1 = new Block(300,275,30,40);
   block2 = new Block(330,275,30,40);
   block3 = new Block(360,275,30,40);
   block4 = new Block(390,275,30,40);
   block5 = new Block(420,275,30,40);
   block6 = new Block(450,275,30,40);
   block7 = new Block(480,275,30,40);
   //level two
   block8 = new Block(330,235,30,40);
   block9 = new Block(360,235,30,40);
   block10 = new Block(390,235,30,40);
   block11 = new Block(420,235,30,40);
   block12 = new Block(450,235,30,40);
   //level three
   block13 = new Block(360,195,30,40);
   block14 = new Block(390,195,30,40);
   block15 = new Block(420,195,30,40);
   //top
   block16 = new Block(390,155,30,40);


  //second pyramid
  blocks1 = new Block(640,175,30,40);
  
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //top
  blocks9 = new Block(700,95,30,40);
}
function draw(){
   background("black");
   Engine.update(engine);//used for updating the engine;
   Engine.run(engine);//used for updating the engine;
   fill("gold");
   imageMode(CENTER);
   image(polygonImg,polygoen.position.x,polygoen.position.y,48,48);//for displaying the image;
 
   textSize(20);
   fill("lightyellow");
   text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 100, 50 );
 
   ground.display();
   stand1.display();
   stand2.display();
   
   strokeWeight(2);
   stroke(15);
   fill("skyblue");
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
  
   fill("pink");
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
  
   fill("lightgreen");
   block13.display();
   block14.display();
   block15.display();

   fill("red");
   block16.display();

   //second pyramid
   fill("skyblue");
   blocks1.display();
   blocks2.display();
   blocks3.display();
   blocks4.display();
   blocks5.display();

   fill("lightgreen");
   blocks6.display();
   blocks7.display();
   blocks8.display();

   fill("pink");
   blocks9.display();

  slingshot.display();

  mouseDragged();
  mouseReleased();
  keyPressed();
}

   function mouseDragged(){
      Matter.Body.setPosition(this.polygoen,{x: mouseX, y: mouseY});//Ma'am plz tell why this is written?
   }

   function mouseReleased(){
      slingshot.fly();
   }//this function means that when the mouse is pressed the slingshot/polygon will be released from the constraint;

   function keyPressed(){
      if(keyCode === 32){
         slingshot.attach(this.polygoen);
      }
   }//this function means that when the game is over and then spacebar is pressed then the polygon will again be attached to the contraint;

