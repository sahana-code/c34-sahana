var canvas 
var gameState = 0
var playerCount
var database
var player,game 


function setup(){
    database= firebase.database()
   canvas =  createCanvas(500,500);
  game = new Game()
  game.getState(
      game.start()
  )
}

function draw(){



}


function mousePressed(){
    stroke(10)
    fill("green")
}
function mouseReleased(){
    line(10)
}