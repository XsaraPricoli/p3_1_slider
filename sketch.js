var slider=document.getElementById("slider");
function setup() {
  var c = createCanvas(400, 400);
  c.parent("canvasWrapper");
}

function draw() {
  noStroke();
  background("#173aecff");
  fill("#23f84eff");
  ellipse(width/2, height/2, slider.value, slider.value);
}