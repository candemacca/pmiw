//Link Youtube: https://youtu.be/19H6ORWvlMs
//Alumna: Candela Macca
//Legajo: 119072/9
//Comision 3
//profesor: David Bedoian
let referencia;
let cant=12;
let corazonesCant=13;
let ubic;


function preload() {
  referencia = loadImage ("data/obra.jpg");
}

function setup() {
  createCanvas(800, 400);
}


function draw() {
  background(230);
  image(referencia, 0, 0);

  ubic = 400/cant;

  for (let i = 0; i < cant; i++) {
    for (let j = 0; j < cant; j++) {
      if ((i + j) % 2 == 0) {
        fill(250, 193, 220);
      } else {
        fill(188, 112, 184);
      }
      noStroke();
      rect(400+i*ubic, j*ubic, ubic, ubic);
    }
  }
  for (let i = 0; i < corazonesCant; i++) {
    for (let j = 0; j < corazonesCant; j++) {
      let tam = calcularTam(400+i*ubic, j*ubic);

      if ((i + j) == 1 || (i+j) == 4 || (i+j) == 6 || (i+j) == 7 ||(i+j) == 9 || (i+j) == 12 || (i+j) == 15 ||(i+j) == 17 || (i+j) == 19 || (i+j) == 20|| (i+j) == 22) {
        fill(255);
      } else {
        fill(152, 38, 38);
      }
      noStroke();
      corazon(400+i*ubic, j*ubic, tam);
    }
  }
}
function corazon( x, y, size) {
  let escala = size / 10;
  beginShape();
  vertex(x, y);
  bezierVertex(x + escala*5, y - escala*5, x + escala*10, y, x, y + escala*12);
  bezierVertex(x - escala*10, y, x - escala*5, y - escala*5, x, y);
  endShape();
}

function calcularTam(x, y) {

  let distancia = dist(mouseX, mouseY, x, y);
  let diagonal = dist(0, 0, width, height);
  return map(distancia, 100, diagonal, 5, ubic/2);
}
function mousePressed() {
  if (cant > 2) {
    cant--;
  }
}

function keyPressed() {
  cant = 12;
}
