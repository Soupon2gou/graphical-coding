let img1,img2;
function preload() {
  img1 = loadImage('./assets/4.png');
  img2 = loadImage('./assets/4.png');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight , WEBGL);
  background(0,255,0);
  //noLoop();
}

function draw() { 
  push();
  rotateY(millis() / 1000);
  image(img1, -img1.width, -img1.height);
  pop();

  push();
  rotateY(millis() / 1000);
  image(img1, 0, 0);
  pop();

   // img1を正方向にrotateY
   push();
   texture(img1);
   rotateY(frameCount * 0.01); // 回転の速度を調整
   plane(200, 200);
   pop();

   // img2を負方向にrotateY
  push();
  texture(img1);
  rotateY(-frameCount * 0.01); // 負の角度で回転
  translate(250, 0); // img2を横に移動
  plane(200, 200);
  pop();

}