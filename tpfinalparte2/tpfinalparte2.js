

let juego;

function preload(){
 imgInicio = loadImage("data/pantallainicio.png");
}
function setup() {
  createCanvas (640,480);
  juego = new Juego();
}

function draw() {
  background(192,221,227);
  juego.actualizar();
  
}
 
function keyPressed(){
  juego.teclaPresionada(keyCode);
  
  
}

function mousePressed() {
  juego.mousePressed();
}
