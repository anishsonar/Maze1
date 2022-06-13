var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 Body = Matter.Body
var particles;
var divisions =[];
//var divisionHeight=300;
var score =0;
var division1,division2,division3,division4, division5, division6;
var division7,division8,division9,division10, division11, division12;
var division13,division14,division15,division16, division17, division18;
var division19,division20,division21,division22, division23, division24;
var goal;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  //engine.world.gravity.y = 1;
  //create division objects
  division1 = new Divisions(50, 133, 10, 135);
  division2 = new Divisions(120, 100, 10, 70);
  division3 = new Divisions(340, 140, 450, 10);
  division4 = new Divisions(117, 195, 145, 10);
  division5 = new Divisions(190, 250, 10, 120);
  division6 = new Divisions(260, 310, 150, 10);
  division7 = new Divisions(330, 295, 10, 40);
  division8 = new Divisions(345, 280, 40, 10);
  division9 = new Divisions(370, 265, 10, 40);
  division10 = new Divisions(385, 250, 40, 10);
  division11 = new Divisions(400, 235, 10, 40);
  division12 = new Divisions(435, 220, 80, 10);
  division13 = new Divisions(560, 285, 10, 300);
  division14 = new Divisions(470, 285, 10, 140);
  division15 = new Divisions(260, 350, 430, 10);
  division16 = new Divisions(350, 430, 430, 10);
  division17 = new Divisions(50, 430, 10, 150);
  division18 = new Divisions(345, 500, 600, 10);
  division19 = new Divisions(650, 355, 10, 300);
  division20 = new Divisions(390, 70, 550, 10);
//goal
  division21 = new Divisions(650, 140, 50, 120);

  particles = new Particles(70,120);

//goal = createSprite(390,70,10,10);

    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  
if(particles.x >=550){
  fill("yellow");
  text("You won!!!");
  
}
 
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  division9.display();
  division10.display();
  division11.display();
  division12.display();
  division13.display();
  division14.display();
  division15.display();
  division16.display();
  division17.display();
  division18.display();
  division19.display();
  division20.display();
division21.display();

  particles.display();
  //drawSprites();

}