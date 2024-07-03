function setup() {
    createCanvas(300, 300);
    noLoop();
  }

  let a=60;
  var b=0;
  const c=0;
  let dia = [30, 15, 70, 50, 25, 90];
  
  function draw() {
    //noStroke()
    background(124);
    fill(255);
    square(50, 50, 100);
    square(150, 50, 100);
    triangle(50, 150, 250, 150, 150, 250);
    fill(0);
    circle(100, 100, 20);
    circle(200, 100, 20);
    strokeWeight(weight = 5)
    strokeCap(cap = ROUND)
    //strokeJoin(join = BEVEL)
    stroke("red");
    line(120, 200, 180, 200)
    
  }