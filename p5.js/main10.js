let images = [];
let photos = [];
let n = 1.1;

function preload() {
  for (let i = 1; i < 3; i++) {
    let photo = loadImage("./assets/" + i + ".png");
    photos.push(photo);
  }
}

function setup() {
  createCanvas(windowWidth/n, windowHeight/n);

  for (let i = 0; i < 100; i++) {
    let randomPhoto = random(photos);
    images.push(randomPhoto);
  }
  shuffle(images, true);
}

function draw() {
  background(20);

  randomSeed(0);
  let rows = [];
  let row_num = 20;
  let col_num = 20;
  let scl = 0.9;

  let row_sum = 0;
  for (let i = 0; i < row_num; i++) {
    let cols = [];
    let m =
      noise(i * 0.1, frameCount * 0.01) *
      map(sin(i * TWO_PI * 0.1), -1, 1, 0, 0.1);
    row_sum += m;
    for (let j = 0; j < col_num; j++) {
      let n =
        noise(i * 0.1, j * 0.1, frameCount * 0.01) *
        map(sin(i * TWO_PI * 0.1 + j * TWO_PI * 0.1 + frameCount * 0.005), -1, 1, 0, 0.1);
      cols.push({ h: m, w: n });
    }
    rows.push(cols);
  }

  let y = 0;
  let h = 0;
  for (let i = 0; i < row_num; i++) {
    let col_sum = 0;
    for (let j = 0; j < col_num; j++) {
      let obj = rows[i][j];
      h = (obj.h / row_sum) * height;
      col_sum += obj.w;
      obj.h = h;
      obj.y = y;
    }
    let x = 0;
    for (let j = 0; j < col_num; j++) {
      let obj = rows[i][j];
      let w = (obj.w / col_sum) * width;
      obj.x = x;
      obj.w = w;
      x += obj.w;
    }
    y += h;
  }

  push();
  translate(width / 2, height / 2);
  scale(scl);
  translate(-width / 2, -height / 2);
  strokeWeight(1 / scl);
  for (let cols of rows) {
    for (let obj of cols) {
      let photo = random(images);
      if (min(obj.w, obj.h) > 5) {
        push();
        translate(obj.x + obj.w / 2, obj.y + obj.h / 2);
        imageMode(CENTER);
        let scaleFactor = min(obj.w, obj.h) / max(photo.width, photo.height);
        image(photo, 0, 0, photo.width * scaleFactor, photo.height * scaleFactor);
        pop();
      }
    }
  }
  pop();
}
