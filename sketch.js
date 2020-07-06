const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ball,g2,w1,w2,w3,ball,ballIMG,w1IMG;
function preload(){
ballIMG = loadImage("paper.png");
w1IMG = loadImage("bin.png");
}
function setup(){
    createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
   // w1 = new Wall(700,370,150,10)
    w21 = new Wall(780,320,100,500)
    w3 = new Wall(620,350,10,100)    
    g2 = new Ground(400,390,900,20) 

    w2 = createSprite(700,310,10,10);
    w2.addImage(w1IMG);   
    ball1 = createSprite(20,100,20,20);
    ball1.addImage(ballIMG);
     var ball_options ={
        restitution: 0.3,        
        friction:0.5,
        density:1.2
    }

    ball = Bodies.circle(24,100,20, ball_options);   
    World.add(world,ball);
    
    

    var options = {
        isStatic: true
        }
    w1 = Bodies.rectangle(700,310,10, options);
    World.add(world,w1);
    console.log(ground);
}

function draw(){
    background(255,255,255);
    Engine.update(engine);
    fill("yellow");
    imageMode(CENTER);    
    image(w1IMG,w1.position.x, w1.position.y, 10, 10);
    
    fill("pink")
    imageMode(CENTER);
    image(ballIMG,ball.position.x, ball.position.y, 55, 55);


     //w1.display();
     w2.display();
     w3.display();
     g2.display();

}

function keyPressed(){
    if (keyCode === UP_ARROW){

    Matter.Body.applyForce(ball,ball.position,{x:65,y:-65})
    }
}