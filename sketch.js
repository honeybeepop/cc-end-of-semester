let vid;
let playing = true;

function setup() {
  createCanvas(400, 400);

vid = createVideo("./assets/furyofjane.mp4")
vid.size(1024, 1364);
vid.volume(0);
vid.loop();
vid.hide();
}

function draw() {
  background(220);
  let img = vid.get();
  image(img, 0, 0);
  textSize(40);
  counter = nf(vid.time(), 0, 2); 
  text(counter, 10, 300);
}

function mousePressed() {
 if (playing) {
   vid.pause();
 }
  else {
    vid.play();
  }
  playing = !playing;
}