var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var select_balloon=1
var score=0;
var green 
var red 
var pink
var blue



function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //crear fondo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  //crear arco para disparar las flechas
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    

   red = createSprite(0,Math.round(random(20,300))),10,10;
   red.scale = 0.09
   red.addImage(red_balloonImage);
   red.velocityX = 3;
   red.lifetime = 130;


   
   green = createSprite(0,Math.round(random(20, 370)), 10, 10);
   green.addImage(green_balloonImage);
   green.velocityX = 4;
   green.lifetime = 150;
   green.scale = 0.1;



   pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
   pink.addImage(pink_balloonImage);
   pink.velocityX = 2;
   pink.lifetime = 250;
   pink.scale = 1


    blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
   blue.addImage(blue_balloonImage);
   blue.velocityX = 3;
   blue.lifetime = 150;
   blue.scale = 0.1;



  
}

function draw() {
 background(0);
  // mover el suelo
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //mover arco
  bow.y = World.mouseY
  
   //liberar las flechas al presionar la barra espaciadora 
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //Descomenta la opción correcta para obtener un número aleatorio entre 1 y 4 
  red = Math.round(random(1,4));
  green = Math.round(random(1,4));

   
  
   if (World.frameCount % 100 == 0) {

    //Descomenta la sentencia switch correcta

             


            switch(red ){
            case 1: redBalloon(red);
            break;
            case 2:blueBalloon(blue);
            break;
            case 3:pinkBalloon(pink);
            break;
            case 4:greenBalloon(green);
            break;
            default:break;
        }


          

}
    
  drawSprites();
}


//Crear flechas para el arco
 //function createArrow() {
 // var arrow= createSprite(100, 100, 60, 10);
 // arrow.addImage(arrowImage);
  //arrow.x = 360;
 // arrow.y=bow.y;
 // arrow.velocityX = -4;
  //arrow.lifetime = 100;
 // arrow.scale = 0.3;
//}







