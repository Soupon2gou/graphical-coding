let ary = [];

function setup() {
  createCanvas(400, 100);
  background(220);
  noLoop();
}

function draw() {
  strokeWeight(2);

  // 乱数で配列の値を生成（円の x 座標）
  for (let i = 0; i < 10; i += 1) {
    ary.push(random(0, width)); // 乱数を配列に追加
  }

  // 塗りつぶしの明るさをランダムに設定
  let val = random(0, 255); // 乱数を変数に代入
  fill(val);

  // 乱数で生成した位置に円を描画
  for (let i = 0; i < 10; i += 1) {
    circle(ary[i], height / 2, 50);
  }
}