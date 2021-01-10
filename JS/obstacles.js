class Obstacle {
  constructor (image, x, y, width, height, speed) {
      this.img = new Image(); 
      this.img.src = image;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.speed = speed;
  }
}

function random(min,max){
  return Math.round(Math.random() * (max-min) + min);
}

function setObstical(){
 if (Math.round(Math.random())){
   return "images/branch.png";
 }
}

function dropBox(){
 var length = random(100, ($(".game").width() - 100));
 var velocity = random(850, 10000);
 var size = random(50, 150);
 var thisBox = $("<div/>", {
   class: "box",
   style:  "width:" +size+ "px; height:"+size+"px; left:" + length+  "px; transition: transform " +velocity+ "ms linear;"
 });
 
//  //set data and bg based on data
//  thisBox.data("test", Math.round(Math.random()));
//  if(thisBox.data("test")){
//    thisBox.css({"background": "images/branch.png})
//  }