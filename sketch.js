const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var snowImg, snowFlake,snowFlake2,snowFlake3,snowFlake4,snowFlake5;
var bg;


function preload() {
 backgroundImg=loadImage("snow3.jpg")   
 
  
}

function setup() {
  var canvas = createCanvas(1400,1200);
  //snowFlake= new Snow(200,400,50)
  
  engine = Engine.create();
    world = engine.world;
    snowFlake= new Snow(120,200,10)
    snowFlake2= new Snow(240,200,50)
    snowFlake3= new Snow(200,300,50)
    snowFlake4= new Snow(200,400,50)
    snowFlake5= new Snow(200,400,50)
    

}

function draw() {
 
  if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine); 
    snowFlake.display();
    snowFlake2.display();

    snowFlake3.display();


    snowFlake4.display();

    snowFlake5.display();


}
