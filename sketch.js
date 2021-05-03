var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
 var car1;
 var car2;
 var car3;
 var car4;
 var cars;

 var cat;
 var hamster;
 var dust;
 var letter;

 function preload(){
   cat = loadImage("/images/car1.png")
   hamster = loadImage("/images/car2.png")
   dust = loadImage("/images/car3.png")
   letter = loadImage("/images/car4.png")
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
  }
}
