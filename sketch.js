var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var groundImg,trackImg;
var reset;

var cars, car1, car2, car3, car4;

function preload(){
  groundImg = loadImage("images/ground.png");
  trackImg = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  back = loadImage("images/cars.jpg");
 
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

 
}


function draw(){
  
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
 // image(logo,displayWidth-100,20)
  }
if(gameState === 2){
  game.end();
 
}


}
