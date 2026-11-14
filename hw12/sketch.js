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
 background(220);
 if (!sample.playing) {
   text("click to play the sound and it will loop", 0, 20, width);
 }
 else {
   text("click to stop the looping", 0, 20, width);
 }
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