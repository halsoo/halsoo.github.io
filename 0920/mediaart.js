function setup() {
  var canvas = createCanvas(550, 300);
  canvas.parent(art);
  frameRate(30);
  background(128,128,128);
}

function draw() {
  var r = 630;

  //if(frameCount%90 == 0)
  background(128,128,128);
  var offset = random(1, 30);

  for (var i = 0; i < 360; i+=offset) {
    var x = cos(radians(i)) * r;
    var y = sin(radians(i)) * r;

    line(width/2, height/2, x, y);
  }
}
