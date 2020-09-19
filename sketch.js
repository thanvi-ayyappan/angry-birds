const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var box1,box2,box3,box4,box5,ground1;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;
var bg;

function preload(){
    bg=loadImage("sprites/bg.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine=Engine.create();
    world=engine.world; 
    
    ground1=new ground(600,390,1200,20);

    box1=new box(700,380,70,70);
    box2=new box(920,380,70,70);
    pig1=new Pig(810,380);
    log1=new Log(810,290,300,PI/2);

    box3=new box(700,250,70,70);
    box4=new box(920,250,70,70);
    pig2=new Pig(810,250);
    log2=new Log(810,140,300,PI/2);

    box5=new box(810,70,70,70);
    log3=new Log(750,100,150,PI/7);
    log4=new Log(870,100,150,-PI/7);

    bird1=new Bird(100,100);

}

function draw(){
    background(bg);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}