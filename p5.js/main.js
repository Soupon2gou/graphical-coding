var d = 0;
let img2;

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(8);
	img2 = loadImage("assets/back.png");
}

function draw() {
	//背景写真の表示
	image(img2,0,0, windowWidth, windowHeight);
}