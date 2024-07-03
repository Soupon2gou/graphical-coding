let angle;
let img1,img2;
let x, y, x_size, y_size,px;
let bpm=180;
function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  img1 = loadImage('./assets/4.png');
  angle = 0;
  x = 0;
  y = 0;
  px = 200;
  x_size = 100;
  y_size = 100;
  text(0,0,"x:"+x);
  frameRate(30);
  circle(0,0,100);
}

function draw() {

  for (let i = 0; i < 150; i+=bpm/90) {
    clear();
    x+=i;
    y+=i;
    //x_size+=i;
    //y_size+=i;
    image(img1,x,y,x_size,y_size);
    if(x>px){
      x =0;
      y =0;
      //x_size = 100;
      //y_size = 100;
      //break;
    }
  
}
}