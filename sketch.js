var sword,simage;
var fruit,monster,fruitg,enemyg,score,r,gameover,f1,f2,f3,f4;
var monsteri;
var PLAY=1;
var END=0;

var gameState=1;

var knifesound;

var gameoversound;

var position;



function preload() {
  simage=loadImage("knife.png");          f1=loadImage("fruit1.png");
 f2=loadImage("fruit2.png");
  f3=loadImage("fruit3.png");
  f4=loadImage("fruit4.png");
  
  gameover=loadImage("gameover.png");
  
  monsteri=loadAnimation("alien1.png","alien2.png");
  
  knifesound=loadSound("knifeSwooshSound.mp3");
  
  gameoversound=loadSound("gameover.mp3");



  
 
}

function setup(){
  createCanvas(600,600);
  sword=createSprite(40,200,20,20);
  sword.addImage(simage);
  sword.scale=0.1;
  sword.setCollider("rectangle",0,0,40,40);
  
  score=0;
  
  fruitg=new Group();
  enemyg=new Group();

}

function draw(){
  background("lightblue");
  
  if (gameState===PLAY){
    fruits();
    enemy();
      
  
  sword.x=World.mouseX;
  sword.y=World.mouseY;
  
  if (fruitg.isTouching(sword)){
    fruitg.destroyEach();
    score=score+2;
    knifesound.play();
      }
  else if (enemyg.isTouching(sword)){
  gameState=END;
  fruitg.destroyEach();
  enemyg.destroyEach();
  fruitg.setVelocityXEach(0);
  enemyg.setVelocityXEach(0);
  
  sword.addImage(gameover);
  sword.x=300;
  sword.y=300;
    
  sword.scale = 2.5;
    
  gameoversound.play();

      }

}

  

  drawSprites();
  text("score: "+score,400,30);
}


function fruits(){
  if(World.frameCount % 50 === 0){
    
    fruit=createSprite(400,200,20,20);
    
    fruit.scale=0.2;
  
     position=Math.round(random(1,4));
    
    
    if (position== 1) {
      fruit.x=400;
      fruit.velocityX= -(7+(score/4));
      fruit.x=400;
      fruit.velocityX= -(7+(score/4));
      fruit.addImage(f1);
      
    } else if (position == 2) {
      fruit.x=0;
      fruit.velocityX= (7+(score/4));
      fruit.addImage(f2);
      
    } else if (position == 3) {
      fruit.x=400;
      fruit.velocityX= -(7+(score/4));
      fruit.addImage(f3);
      
    } else if (position==4){ 
      fruit.x=0;
      fruit.velocityX= (7+(score/4));
      fruit.addImage(f4);
    }
    
    
    
    fruit.y=Math.round(random(50,340));
   
    
  
    fruit.setLifetime=100;
    
    fruitg.add(fruit);
  }
  
}
  

  
    
    
    
    
   


function enemy(){
  if(frameCount%200===0){
    monster=createSprite(400,200,20,20);
    monster.addAnimation("moving",monsteri);
    monster.y=Math.round(random(100,380));
    
    monster.velocityX=-(8+(score/10));
    monster.setLifetime=50;
    
    enemyg.add(monster);
  
  }
}
