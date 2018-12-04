//canvas setup
window.onload = function() {
  var canvas = document.getElementById("game-board");
  var ctx = canvas.getContext("2d");
  var gameStarted = false;
  var levels = 3;
  var count = 20;
  var speed = 2;

  //falling objects
  var positionSloth = 220;
  var img = new Image();
  var obstacles = [];
  var images = ["images/branch.png"];
  var frame = 0;

// Function Start Game
function startGame() {
  img.src = "./images/Sloth2.png";
  img.onload = function() {
    ctx.drawImage(img, positionSloth, 410, 100, 100);
  };
  for (let i = 0; i < lives; i++) {
    hearts.push(heart);
  }
  updateCanvas();
}

// Start Button
document.getElementById("button").onclick = function() {
  if (!gameStarted) {
    startGame();
    gameStarted = true;
  }
}

function branchFall() {
//amount of branches that fall
}

function branchSpeed () {
//speed increase function
}

function 
//intersect function where branches dissapear when intersects with sloth

function leafFall () {

}

function leafSpeed () {
  //when sloth hits leaf, the branches slow down
}


















  // Right and left
  document.onkeydown = function(event) {
    var key = event.keyCode;
    if (key === 37) {
      if (positionSloth <= 0) {
        positionSloth = -20;
      } else {
        positionSloth -= 15;
      }
    } else if (key === 39) {
      if (positionSloth >= 450) {
        positionSloth = 470;
      } else {
        positionSloth += 15;
      }
    }
  };
  