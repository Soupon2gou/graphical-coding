let angle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);

  angle = 0;
}

function draw() {
  clear();

  stroke(240);
  noFill();
  line(0, height / 2, width, height / 2);
  line(width / 2, 0, width / 2, height);
  text('0', (width / 2)+10, (height / 2)+10);
  text('1', (width / 2)+10, (height / 4)+10);
  text('-1', (width / 2)+10, (height / 4 * 3)+10);
  text('-1', (width / 4)+10, (height / 2)+10);
  text('1', (width / 4 * 3)+10, (height / 2)+10);

  stroke(240);
  noFill();
  let px = 0;
  let py = height / 2;
  for (let a = 0; a < TWO_PI; a += 0.02) {
    const x = map(a, 0, TWO_PI, 0, width);
    //ここを修正
    const y = map(-a, -10, 10, height / 4, height / 4 * 3);
    line(px, py, x, y);
    px = (width / 2);
    py = (height / 2);
  }

  noStroke();
  fill(240);
  //ここを修正
  circle(map(angle, 0, TWO_PI, 0, width), map(cos(angle), -1, 1, height / 4, height / 4 * 3), 10);
  //ここを修正
  text(`sin(${degrees(angle).toFixed(0)}°) = ${sin(angle).toFixed(2)}`, width / 2, height / 6);

  angle += 0.02;
  angle %= TWO_PI;
}