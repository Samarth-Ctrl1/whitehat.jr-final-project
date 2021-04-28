var bg, backgroundIMG
var plat1, plat2, plat3, plat4, plat5, plat6, plat7;
var plat1Img, plat2Img, plat3Img, plat4Img, plat5Img, plat6Img, plat7Img;
var player, playerIMG;
var game_over,gameOverImg;


function preload(){
    backgroundIMG = loadImage("images/background.PNG")
    plat1Img = loadImage("images/plat 1.PNG")
    plat2Img = loadImage("images/plat 2.PNG")
    plat3Img = loadImage("images/plat 3.PNG")
    plat4Img = loadImage("images/plat 4.png")
    plat5Img = loadImage("images/plat 5.png")
    plat6Img = loadImage("images/plat 6.png")
    plat7Img = loadImage("images/plat 7.PNG")
    gameOverImg = loadImage("images/game_over.png")
    playerIMG = loadAnimation("images/p1.png", "images/p2.png", "images/p3.png")
    fireBallImg = loadAnimation("images/F1.PNG","images/F2.PNG","images/F3.PNG","images/F4.PNG","images/F5.PNG",)
}


function setup(){
 createCanvas(1100, 650);
 bg = createSprite(550, 300, 50, 50);
 bg.addImage(backgroundIMG);
 bg.scale = 2
 
fireBall = createSprite(350,800, 50, 50);
fireBall.scale = 1.7;
fireBall.velocityY = -5
fireBall.addAnimation("fireBallImg", fireBallImg)

fireBall1 = createSprite(750, 800, 50, 50)
fireBall1.scale = 1.7;
fireBall1.velocityY = -7;
fireBall1.addAnimation("fireBallImg", fireBallImg)

fireBall2 = createSprite(900, 800, 50, 50)
fireBall2.scale = 1.7;
fireBall2.velocityY = -10;
fireBall2.addAnimation("fireBallImg", fireBallImg)


//game_over.addImage("gameOverImg", gameOverImg);

 plat1=createSprite(100,600,300,300);
 
 plat2=createSprite(550, 350, 150, 150);
 plat3=createSprite(1050, 300, 150, 150);
// plat4=createSprite();
// plat5=createSprite();
// plat6=createSprite();
//  plat7=createSprite();

player = createSprite(100,450,25,60);
player.addAnimation("player", playerIMG)
player.scale=0.3;
player.debug=true;

player.setCollider("rectangle", 0,0,350,525);
plat1.addImage(plat1Img);
plat2.addImage(plat2Img);
plat3.addImage(plat5Img);

bg1 = createSprite(550, 350, 50, 50);
bg1.addImage(gameOverImg);
bg1.visible = false;
}

function draw(){
  background(0)
  //createEdgeSprites()
  player.collide(plat1);
  player.collide(plat2);
  player.collide(plat3);
  
 // player.collide("leftEdge");
  if(keyDown("space") && player.y>=100){
 player.velocityY = -10
 player.velocityX = 7
  }
  if(fireBall.y < 0){
    fireBall.y = 750
  }
  if(fireBall1.y < 0){
    fireBall1.y = 750
  }
  if(fireBall2.y < 0){
    fireBall2.y = 750
  }
  if(player.isTouching(fireBall) || player.isTouching(fireBall1) || player.isTouching(fireBall2)){
    player.destroy();
  bg1.visible = true;
  plat2.visible = false;
  plat1.visible = false;
  plat3.visible = false;
  fireBall.visible = false;
  fireBall1.visible = false;
  fireBall2.visible = false;
  
  
  }
  
  


  player.velocityY = player.velocityY+1

  drawSprites();
  
  
}