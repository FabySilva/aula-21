//objetos para função bouceOff
var retFixo, retMovendo;
//objetos para função isTouching
var objetoDeJogo1, objetoDeJogo2;

function setup() {
  createCanvas(1200,800);
  retFixo = createSprite(400, 100, 50, 80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retMovendo = createSprite(400, 800,80,30);
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;

  retMovendo.velocityY = -5;
  retFixo.velocityY = +5;

  //objetos para função isTouching
  objetoDeJogo1 = createSprite(100, 100, 50, 50);
  objetoDeJogo1.shapeColor = "purple";

  objetoDeJogo2 = createSprite(200, 100, 50, 50);
  objetoDeJogo2.shapeColor = "purple";
  

}

function draw() {
  background(0,0,0);  

  objetoDeJogo2.x = World.mouseX;
  objetoDeJogo2.y = World.mouseY;

  bounceOff(retFixo,retMovendo); 
 //condicional para função isTouching
  if(isTouching(objetoDeJogo2, objetoDeJogo1)){
    objetoDeJogo2.shapeColor = "blue";
    objetoDeJogo1.shapeColor = "blue";
  }
  else {
    objetoDeJogo2.shapeColor = "purple";
    objetoDeJogo1.shapeColor = "purple";
  }
  

  drawSprites(); 
} 

