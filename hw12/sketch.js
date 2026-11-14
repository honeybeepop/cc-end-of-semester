let acidBass;
let canvas;

async function setup() {
   acidBass.onended(stopSound);
  canvas = createCanvas(400, 400);
  canvas.parent("soundHolder");
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();

  acidBass = await loadSound('./assets/acidbass.wav');
  acidBass.loop(true);
}

function draw() {
 background(0);
}

function mousePressed() {
  if(acidBass.isPlaying()) {
    acidBass.start();
  }
  else {
    acidBass.loop(false);
  }
}
function stopSound() {
  acidBass.stop();
}