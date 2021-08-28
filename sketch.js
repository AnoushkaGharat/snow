var backgroundIMG;
var engine, world;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var snow = [];



function preload(){
 
  backgroundIMG = loadImage("snow1.jpg")
}

function setup() {
  createCanvas(1500,750);
  
  engine = Engine.create();
  world =  engine.world;


}

function draw() {
  background(backgroundIMG); 
  
  
  
  if(frameCount%5===0){
    snow.push(new Snow(random(100, width - 100),0,50,50));
  }
  
  for(j = 0; j< snow.length;j++){
   snow[j].display();
  }
  //drawSprites();
}