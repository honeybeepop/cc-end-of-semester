let acidBass;
let canvas;

async function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent("soundHolder");
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();

  acidBass = await loadSound('./assets/acidbass.wav');
  acidBass.loop(true);
}

function draw() {
  background(144, 3, 252);
}

function mousePressed() {
  if(acidBass.isPlaying()) {
    acidBass.stop();
  }
  else {
    acidBass.start();
  }
}