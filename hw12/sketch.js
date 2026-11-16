let acidBass;
let canvas;
let soundfile, fft;
let img;

async function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent("sketchHolder");
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();

  acidBass = await loadSound('./assets/acidbass.wav');
  acidBass.loop(true);

   fft = new p5.FFT();
 soundfile.connect(fft);
 soundfile.loop();

 img= await loadImage('./assets/metro.jpg')
}

function mousePressed() {
 if(acidBass.isPlaying()) {
   acidBass.play();
 }
 else {
   acidBass.stop();
 }
}

function draw() {
background(0)
 
 text('tap to play', width/2, height/2 - 20);
 let spectrum = fft.analyze();
 
 noStroke();
 fill(0);

 for (let i = 0; i < spectrum.length; i++) {
   let x = map(i, 0, spectrum.length, 0, width);     
   let h = -height + map(spectrum[i], 0, 0.1, height, 0);
   rect(x, height, width / spectrum.length, h * 4)
 }
}

//I cant get the canvas and therefore the analyze function is. not there. trust I've been trying I don't know what's going on.