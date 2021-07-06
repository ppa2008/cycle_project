var cycler,cycler1,cycler2, cycler3,cycler4, cycler5, roads,gameState,rand,invroad1,invroad2,gameover;
var PLAY=1;
var END=0;
var gamestate= PLAY;
var cycler1Img, cyclerImg2, cyclerImg3, cyclerImg4, cyclerImg5;
var cyclegroup1, cyclegroup2, cyclegroup3, cyclegroup4, cyclegroup5;
var cycler1ImgFall, cyclerImg2Fall, cyclerImg3Fall, cyclerImg4Fall, cyclerImg5Fall;
var  score = 0

function preload(){
cycling = loadAnimation("mainPlayer1.png","mainPlayer2.png")
cycler1Img = loadAnimation("opponent1.png", "opponent2.png");
cycler2Img = loadAnimation("opponent4.png","opponent5.png");
cycler3Img= loadAnimation("opponent7.png","opponent8.png")
cycler4Img= loadAnimation("opponent10.png","opponent11.png")
cycler5Img= loadAnimation("opponent13.png","opponent14.png")
cyclerfall  = loadAnimation("mainPlayer3.png")
cycler1ImgFall = loadAnimation("opponent3.png")
cycler2ImgFall = loadAnimation("opponent6.png")
cycler3ImgFall = loadAnimation("opponent9.png") 
cycler4ImgFall = loadAnimation("opponent12.png") 
cycler5ImgFall = loadAnimation("opponent15.png") 
gameOver = loadAnimation("gameOver.png");
roads = loadImage("track.jpg")
bellsound= loadSound("bell.mp3")
}

function setup(){
    createCanvas(windowWidth,windowHeight);

    

    road = createSprite (windowWidth/2,windowHeight/2,50,50);
    road.velocityX = -30
    road.addAnimation("rooad",roads)

    invroad1 = createSprite(0,650,700,120);
    invroad1.visible = false;
    invroad2 = createSprite(0,10,700,100);
    invroad2.visible = false;

 gameover= createSprite(575,326,20,20)
 gameover.addAnimation("game",gameOver)
 gameover.visible = false;

console.log(windowWidth)

console.log(windowHeight)
cycler = createSprite(200,100,20,20);
cycler.addAnimation("cycle",cycling);
cycler.addAnimation("cyclefall",cyclerfall);
cycler.scale = 0.05
cycler.setCollider("circle",0,0,500);
cycler.debug = false;



cyclegroup1 = new Group();
cyclegroup2 = new Group();
cyclegroup3 = new Group();
cyclegroup4 = new Group();
cyclegroup5 = new Group();
}

function draw(){
background("black")

drawSprites();
textSize(30)
stroke("white");
strokeWeight(5)
textFont("jokerman")
text("score  :   "+score,850,40)



if(gamestate===PLAY)  {
cycler.y= mouseY


score = score +1

if(keyDown("space")){
    bellsound.play();
}


if (road.x < 0){
    road.x = road.width/2
}
var rand= Math.round(random(1,5));
if(rand ===1){
    spawncycler1();
}
else if(rand ===2){
    spawncycler2();
} else if(rand===3){
    spawncycler3();

} else if(rand===4){
    spawncycler4();

} else if(rand===5){
    spawncycler5();
}


    
//}
var edges = createEdgeSprites()
cycler.collide(edges[0]);
cycler.collide(edges[1]);
cycler.collide(edges[2]);
cycler.collide(edges[3]);
cycler.collide(invroad1);
cycler.collide(invroad2);
    
    for(var i=0; i< cyclegroup1.length; i++){
        if(cyclegroup1.get(i).isTouching(cycler)) {
            gameover.visible = true;
        gamestate=END;
        cyclegroup1.get(i).changeAnimation("cycler1fall", cycler1ImgFall)
        }
    }

    for(var i=0; i< cyclegroup2.length; i++){
        if(cyclegroup2.get(i).isTouching(cycler)) {
            gameover.visible = true;
        gamestate=END;
        cyclegroup2.get(i).changeAnimation("cycler2fall", cycler2ImgFall)
        }
    }
    for(var i=0; i< cyclegroup3.length; i++){
        if(cyclegroup3.get(i).isTouching(cycler)) {
            gameover.visible = true;
        gamestate=END;
        cyclegroup3.get(i).changeAnimation("cycler3fall", cycler3ImgFall)
        }
    }
    for(var i=0; i< cyclegroup4.length; i++){
        if(cyclegroup4.get(i).isTouching(cycler)) {
            gameover.visible = true;
        gamestate=END;
        cyclegroup4.get(i).changeAnimation("cycler4fall", cycler4ImgFall)
        }
    }
    for(var i=0; i< cyclegroup5.length; i++){
        if(cyclegroup5.get(i).isTouching(cycler)) {
            gameover.visible = true;
        gamestate=END;
        cyclegroup5.get(i).changeAnimation("cycler5fall", cycler5ImgFall)
        }
    }



} else if(gamestate===END) {
    road.velocityX = 0;
       cycler.velocityY = 0 ;
       
    cycler.changeAnimation("cyclefall",cyclerfall  )
    cyclegroup1.animation.looping(false);
    cyclegroup2.animation.looping(false);
    cyclegroup3.animation.looping(false);
    cyclegroup4.animation.looping(false);
    cyclegroup5.animation.looping(false);
    cyclegroup1.setVelocityXEach(0);
    cyclegroup2.setVelocityXEach(0);
    cyclegroup3.setVelocityXEach(0);
    cyclegroup4.setVelocityXEach(0);
    cyclegroup5.setVelocityXEach(0);


   
}




 
}

function spawncycler1(){
 if(frameCount % 75=== 0){
cycler1= createSprite(windowWidth,100,50,50)
cycler1.velocityX = -3
cycler1.scale = 0.05
cycler1.y = random(100,550)
cycler1.addAnimation("cycler1", cycler1Img)
cycler1.addAnimation("cycler1fall", cycler1ImgFall)
cyclegroup1.add(cycler1);
}
}

function spawncycler2(){
    if(frameCount % 100 === 0){
   cycler2= createSprite(windowWidth,100,50,50)
   cycler2.velocityX = -3
   cycler2.scale = 0.05
   cycler2.y = random(100,550)
   cycler2.addAnimation("cycler2", cycler2Img)
   cycler2.addAnimation("cycler2fall", cycler2ImgFall)
   cyclegroup2.add(cycler2);
   }
   }
   function spawncycler3(){
    if(frameCount % 50 === 0){
   cycler3= createSprite(windowWidth,100,50,50)
   cycler3.velocityX = -3
   cycler3.scale = 0.05
   cycler3.y = random(100,550)
   cycler3.addAnimation("cycler3", cycler3Img)
   cycler3.addAnimation("cycler3fall", cycler3ImgFall)
   cyclegroup3.add(cycler3);
   }
   }

   function spawncycler4(){
    if(frameCount % 60 === 0){
   cycler4= createSprite(windowWidth,100,50,50)
   cycler4.velocityX = -3
   cycler4.scale = 0.05
   cycler4.y = random(100,550)
   cycler4.addAnimation("cycler4", cycler4Img)
   cycler4.addAnimation("cycler4fall", cycler4ImgFall)
   cyclegroup4.add(cycler4);
   }
   }

   function spawncycler5(){
    if(frameCount % 120 === 0){
   cycler5= createSprite(windowWidth,100,50,50)
   cycler5.velocityX = -3
   cycler5.scale = 0.05
   cycler5.y = random(100,550)
   cycler5.addAnimation("cycler5", cycler5Img)
   cycler5.addAnimation("cycler5fall", cycler5ImgFall)
   cyclegroup5.add(cycler5);
   }
   }
  
   