function setup(){
  createCanvas(windowWidth, windowHeight);
  noSmooth();
  background(255);
  push();
  translate(width/2, height/2);
  for(let d=width*sqrt(2);d>0;d-=5){
    rectMode(CENTER);
    rect(0,0,d);
  }
  pop();
}
function draw(){
  for(let i=0;i<200;i++){
    let x1= int(random(width));
    let y1= int(random(width));
    let w1=constrain(int(random(1,width-x1)/2),1,width);
    let h1=constrain(int(random(1,height-y1)/2),1,height);

    let x2= int(random(width));
    let y2= int(random(width));
    let w2=constrain(int(random(1,width-x2)/2),1,width);
    let h2=constrain(int(random(1,height-y2)/2),1,height);

    let g1=get(x1,y1,w1,h1);
    let g2=get(x2,y2,w2,h2);

    image(g1, x2, y2, w2, h2);  
    image(g2, x1, y1, w1, h1);

    
  }
  noloop();
}