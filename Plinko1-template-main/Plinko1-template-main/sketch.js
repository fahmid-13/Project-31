var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var score = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <= 80; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <= width; j = j + 50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <= width; j = j + 50) { 
    plinkos.push(new Plinko(j,275));
  }

  //create 4th row of plinko objects
  for (var j = 75; j <= width; j = j + 50) { 
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
  }
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  /* Displaying particles
  for (var N = 30; N <= width; N = N + 90){
    particles.push(new Particle(N, 100))
  } 

  for (var N = 50; N <= width; N = N + 90){
    particles.push(new Particle(N, 200))
  } 

  for (var N = 70; N <= width; N = N + 90){
    particles.push(new Particle(N, 300))
  }*/

  //display the paricles 
  for (var m = 50; m < particles.length; m++){
    particles[m].display();
  }

  for (var m = 100; m < particles.length; m++){
    particles[m].display();
  }

  for (var m = 150; m < particles.length; m++){
    particles[m].display();
  }

  for (var m = 200; m < particles.length; m++){
    particles[m].display();
  }
}