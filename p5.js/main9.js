let img,img2, images;
//let keyColor = color(24, 255, 0); // クロマキー色を指定 (ここでは緑色)

function preload() {
  img = loadImage("assets/4.png");
  img2 = loadImage("assets/back.png");
  
  // クロマキー合成
    /*img.loadPixels();
    for (let y = 0; y < img.height; y++) {
      for (let x = 0; x < img.width; x++) {
        const index = (x + y * img.width) * 4;
        const r = img.pixels[index + 0];
        const g = img.pixels[index + 1];
        const b = img.pixels[index + 2];
        const a = img.pixels[index + 3];
        if (dist(r, g, b, red(keyColor), green(keyColor), blue(keyColor)) < 50) {
          img.pixels[index + 3] = 0;
        }
      }
    }
    img.updatePixels();*/
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth();
  imageMode(CENTER);
  //背景色を緑にする  
  background(0,255,0);
  images = [];
  for (let i = 0; i < 5; i++) {
    images.push({ x: 0, y: 0 });
  }
}

function draw() {
  clear();
  //背景色を緑にする  
  background(0,255,0);
  //背景写真の表示
  //image(img2,windowWidth/2,windowHeight/2, windowWidth, windowHeight);
  for (let i = 0; i < images.length; i++) {
    const cur = images[i];
    if (i === 0) {
      cur.x = mouseX;
      cur.y = mouseY;
    } else {
      const prev = images[i - 1];
      cur.x = cur.x + (prev.x - cur.x) / 10;
      cur.y = cur.y + (prev.y - cur.y) / 10;
    }

    
    
    image(img, cur.x, cur.y, img.width/4, img.height/4);
  }
}