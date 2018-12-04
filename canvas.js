//canvas setup
window.onload = function() {
  var canvas = document.getElementById("game-board");
  var ctx = canvas.getContext("2d");
  var gameStarted = false;
  var levels = 3;
  var count = 20;
  var speed = 2;

  //falling objects
  var positionXpanier = 220;
  var img = new Image();
  var obstacles = [];
  var images = ["images/banana.png", "images/orange.png", "images/fruit1.png"];
  var frame = 0;

// Function Start Game
function startGame() {
  img.src = "./images/panier.png";
  img.onload = function() {
    ctx.drawImage(img, positionXpanier, 410, 100, 100);
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
};

  // Right and left
  document.onkeydown = function(event) {
    var key = event.keyCode;
    if (key === 37) {
      if (positionXpanier <= 0) {
        positionXpanier = -20;
      } else {
        positionXpanier -= 15;
      }
    } else if (key === 39) {
      if (positionXpanier >= 450) {
        positionXpanier = 470;
      } else {
        positionXpanier += 15;
      }
    }
  };
  