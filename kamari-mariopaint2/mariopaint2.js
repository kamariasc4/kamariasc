function setup(){
    createCanvas(1200,700)
    background("purple")
}
var value = 0;
function draw() {
  fill(value);
  rect(25, 25, 250, 250);
}

function mouseClicked() {
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }
}
// var value = 0;
// function draw() {
//   fill(value);
//   quad(25, 25, 50, 50);
// }

// function mouseClicked() {
//   if (value == 0) {
//     value = 255;
//   } else {
//     value = 0;
//   }
// }
//  var value = 0;
// function draw() {
//   fill(random);
//   rect(25, 25, 50, 50);
// }
// function mousePressed() {
//   if (value == 0) {
//     value = 255;
//   } else {
//     value = 0;
//   }
// }
//  function mousePressed(){
//      rect( mouseX, mouseY, 19, 8);
//      return false;
//  }
