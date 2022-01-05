var background, ship;
var planet, planet1, planet2, planet3, planet4, planet5;
var alien, aliens, alien2, alien3;
var lives = 3;
var gameState = "PLAY";

function preload(){
    backgroundImg = loadImage("./assets/bg.jpg");
    alienImg = loadImage("./assets/bird.jpg");
    planetImg1 = loadImage("./assets/planet.png");
    planetImg2 = loadImage("./assets/planet1.png");
    planetImg3 = loadImage("./assets/planet2.png");
    planetImg4 = loadImage("./assets/planet3.png");
    planetImg5 = loadImage("./assets/planet4.png");
    planetImg6 = loadImage("./assets/planet5.png");
    shipImg = loadImage("./assets/bird1.png");


}

function setup() {
    createCanvas(1200,800);
    background = createSprite(200,200,10,10);
    background.addImage(backgroundImg);
    background.scale = 0.5;
    //planets sprite start
    /*
    planet1 = createSprite(700,50,10,10);
    planet1.addImage(planetImg2);
    planet1.scale = 0.2;

    planet3 = createSprite(600,500,10,10);
    planet3.addImage(planetImg4);
    planet3.scale = 0.2;

    planet4 = createSprite(374,550,10,10);
    planet4.addImage(planetImg5);
    planet4.scale = 0.2;

    planet5 = createSprite(100,100,10,10);
    planet5.addImage(planetImg6);
    planet5.scale = 0.2;
    */
    //planet sprite finish
    ship = createSprite(30,320,50,50);
    ship.addImage(shipImg, "run");
    ship.scale = 0.2;
    aliens = createGroup();
    createEdgeSprites();
}

function draw() {
    
    if(gameState === "PLAY"){
        ship.y = World.mouseY;
        //ship.bounceOff(edges);
        spawnAliens();
        
        console.log(World.frameCount);
        World.framerate = 60;
    }
    
    if(ship.isTouching(aliens)){
        aliens.destroyEach();
        lives = lives - 1;
    }

    if(lives === 0){
        aliens.destroyEach();
        gameState = "END";
    }

    drawSprites();
    if(gameState === "END"){
        ship.destroy();
        fill("Red");
        textSize(50);
        text("Game Over! Try Again!", 150,300);
    }
    fill("white");
    textSize(35);
    text("Lives: "+ lives, 700,150);    
}


function spawnAliens() {
    //write code here to spawn the aliens
    if (frameCount % 100 === 0) {
      alien = createSprite(800,100,40,10);
      alien.addImage(alienImg)
      alien.y = Math.round(random(10,500))
      alien.scale = 0.2;
      alien.velocityX = -10;
      
      
      //assigning lifetime to the variable
      alien.lifetime = 400;
      
        aliens.add(alien);
      }
  }
  