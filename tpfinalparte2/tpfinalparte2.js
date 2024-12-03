//Link Youtube:
//Alumna: Candela Macca
//Legajo: 119072/9
//Comision 3
//Profesor: David Bedoian

let juego;

function preload() {
  imgInicio = loadImage("data/pantallaInicio4.png");
  imgRemyPiola= loadImage("data/remyPiola.png");
  fuente= loadFont("data/fuente/VCR_OSD_MONO_1.001.ttf");
}
function setup() {
  createCanvas (640, 480);
  juego = new Juego();
}

function draw() {
  textFont(fuente);
  background(227, 184, 119);
  juego.actualizar();
}

function keyPressed() {
  juego.teclaPresionada(keyCode);
}

function mousePressed() {
  juego.mousePressed();
}
