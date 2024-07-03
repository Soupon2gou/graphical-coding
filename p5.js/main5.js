let bpm = 180; // BPMの設定
let interval; // インターバルの変数

function setup() {
  createCanvas(400, 400);
  frameRate(60); // フレームレートを設定

  // BPMに合わせてインターバルを計算
  let intervalInMilliseconds = 60000 / bpm;
  
  // インターバルごとに落ちるコマを設定
  interval = setInterval(dropBall, intervalInMilliseconds);
}

var x =0;
var y =0;
  function x() {
    x = x + 10;
  }
  function y() {
    y = y + 10;
  }

function draw() {
  background(220);
  // ここに描画ロジックを追加
  noStroke();
  fill(255, 0, 0);
  ellipse(random(100,150), random(100,150), 20, 20);
}

function dropBall() {
  // コマが落ちる処理を追加
  ellipse(random(100,150), random(100,150), 20, 20);
}

/*function keyPressed() {
  if (key === ' ') {
    clearInterval(interval); // インターバルのクリア
    bpm = 180; // ランダムなBPMを設定
    let intervalInMilliseconds = 60000 / bpm;
    interval = setInterval(dropBall, intervalInMilliseconds); // 新しいインターバルを設定
  }
}*/
