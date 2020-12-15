var movrect,fixrect,r1,r2,r3,r4;
var ob1,ob2;
function setup() {
  createCanvas(400,400);
  movrect=createSprite(100, 200, 50, 50);
  movrect.shapeColor="gold";
  fixrect=createSprite(250,200,100,50);
  fixrect.shapeColor="gold";

  r1=createSprite(140,150,50,100);
  r2=createSprite(160,100,50,100);
  r3=createSprite(220,310,40,80);
  r4=createSprite(270,80,40,80);
}

function draw() {
  background(170,122,150); 
  
  movrect.x=mouseX;
  movrect.y=mouseY;

    isTouching(movrect,fixrect);
    isTouching(movrect,r1);
    isTouching(movrect,r2);
  
  drawSprites();
}

function isTouching(ob1,ob2){
  if(ob1.x-ob2.x<ob2.width/2+ob1.width/2&&
    ob2.x-ob1.x<ob2.width/2+ob1.width/2&&
    ob1.y-ob2.y<ob2.height/2+ob1.height/2&&
    ob2.y-ob1.y<ob2.height/2+ob1.height/2){
   
    ob1.shapeColor="green";
    ob2.shapeColor="green";
    
  }
  
  else{
    ob2.shapeColor="gold";
    ob1.shapeColor="gold";
  }

}