
var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);

movingrect = createSprite(600,400,50,80);

fixedrect = createSprite(400,200,80,30);

fixedrect.shapeColor = "green";
movingrect.shapeColor = "green";


}

function draw() {
  background(0);  

movingrect.x = World.mouseX;
movingrect.y = World.mouseY;

if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
 && fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2
 && movingrect.y - fixedrect.y < fixedrect.width/2 + movingrect.width/2
 && fixedrect.y - movingrect.y < movingrect.width/2 + fixedrect.width/2
  )
{


  fixedrect.shapeColor = "red";
  movingrect.shapeColor = "red";


}

else{
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";

}

  drawSprites();
}