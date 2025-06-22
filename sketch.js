let car;
let deliveryMade = false;
let buildings = [];

function setup() {
  createCanvas(1000, 400);
  car = new Car();

  // Gerar prédios com alturas aleatórias (fixas)
  for (let i = width / 2 + 40; i < width; i += 100) {
    let h = random(60, 100);
    buildings.push({ x: i, height: h });
  }
}

function draw() {
  drawScene();
  car.display();
  car.move();

  if (car.x > width - car.size - 10 && !deliveryMade) {
    deliveryMade = true;
  }

  if (deliveryMade) {
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("🍎 𝗙𝗿𝘂𝘁𝗮𝘀 𝗲𝗻𝘁𝗿𝗲𝗴𝘂𝗲𝘀 𝗻𝗮 𝗰𝗶𝗱𝗮𝗱𝗲!", width / 2, 50);
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    car.setDirection(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    car.setDirection(-1, 0);
  } else if (keyCode === UP_ARROW) {
    car.setDirection(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    car.setDirection(0, 1);
  }
}

class Car {
  constructor() {
    this.x = 50;
    this.y = height - 70;
    this.size = 50;
    this.speed = 3;
    this.xdir = 0;
    this.ydir = 0;
  }

  setDirection(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  move() {
    this.x += this.xdir * this.speed;
    this.y += this.ydir * this.speed;

    this.x = constrain(this.x, 0, width - this.size);
    this.y = constrain(this.y, 0, height - this.size);
  }

  display() {
    fill(255, 100, 100);
    rect(this.x, this.y, this.size, this.size * 0.6, 8);
    fill(80);
    ellipse(this.x + 10, this.y + this.size * 0.6, 15);
    ellipse(this.x + this.size - 10, this.y + this.size * 0.6, 15);

    // Frutas no teto
    fill(255, 0, 0);
    ellipse(this.x + 15, this.y - 5, 10);
    fill(255, 165, 0);
    ellipse(this.x + 25, this.y - 5, 10);
    fill(255, 255, 0);
    ellipse(this.x + 35, this.y - 5, 10);
  }
}

function drawScene() {
  background(135, 206, 235); // Céu

  // CAMPO - lado esquerdo
  fill(34, 139, 34); // Verde
  rect(0, height * 0.6, width / 2, height * 0.4);

  // CIDADE - lado direito
  fill(180); // Cinza claro
  rect(width / 2, height * 0.6, width / 2, height * 0.4);

  // ESTRADA NA CIDADE
  fill(50); // Asfalto
  let roadY = height * 0.6 + 40;
  let roadHeight = 60;
  rect(width / 2, roadY, width / 2, roadHeight);

  // FAIXAS BRANCAS DA ESTRADA
  stroke(255);
  strokeWeight(4);
  for (let i = width / 2 + 20; i < width; i += 40) {
    line(i, roadY + roadHeight / 2, i + 20, roadY + roadHeight / 2);
  }
  noStroke();

  // Árvores no campo
  for (let i = 50; i < width / 2; i += 100) {
    drawTree(i, height * 0.6 - 40);
     
    
  }

  // Prédios fixos na cidade
  for (let b of buildings) {
    drawBuilding(b.x, height * 0.6 - b.height);
  }
}

function drawTree(x, y) {
  fill(139, 69, 20); // Tronco
  rect(x + 10, y + 30, 10, 30);
  fill(34, 139, 34); // Copa
  ellipse(x + 15, y + 20, 40, 40);
}

function drawBuilding(x, y) {
  fill(100);
  rect(x, y, 60, height * 0.6 - y);
  fill(255);
  for (let i = 0; i < 3; i++) {
    rect(x + 10, y + 10 + i * 20, 10, 10);
    rect(x + 35, y + 10 + i * 20, 10, 10);
    
    circle(100, 60, 90);
    fill("yellow");
     circle(100, 60, 70);
    fill("orange");
    
    textSize(50)
    text("🌾", 0, 350, 200);
    text("🌾", 100, 250, 200);
    text("🌾", 200, 300, 600);
    text("🌾", 0, 300, 200);
    text("👩‍🌾", 100, 300, 200);
    text("🐥", 250, 300, 200);
  }
}

  