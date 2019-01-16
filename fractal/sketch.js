function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
}

function mousePressed() {
}

class ParticleSystem {
  constructor(pos) {
    this.particles = [];
  }

  update() {
    for(const p of this.particles) {
      p.update();
      p.draw();
    }
  }

  draw() {}

  gush(pos, life) {
    const n = life / 5;
    const r = life / 10;
  }
}

class Particle {
  constructor(pos, rad) {
    this.pos = pos;
    this.rad = rad;
    this.speed = createVector();
  }

  update() {
    this.pos.add(this.speed);
  }

  draw() {
    push();
    noStroke();
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.rad, this.rad);
    pop();
  }
}
