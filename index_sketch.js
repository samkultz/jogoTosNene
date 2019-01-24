function preload() {
  let m = random([0,1,2,3]);
  switch (m) {
    case 0:
      song = loadSound('intro/casa.mp3');
      break;
    case 1:
      song = loadSound('intro/skol.mp3');
      break;
    case 2:
      song = loadSound('intro/ze.mp3');
      break;
    case 3:
        song = loadSound('intro/tracas.mp3');
        break;
  }
}

function setup() {
  noCanvas();
  song.play();
}

function draw() {
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
