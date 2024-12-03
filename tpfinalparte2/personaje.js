class Personaje {
  constructor() {

    this.miColor = color (230, 130, 50);
    this.x = width/2;
    this.y = height-100;
    this.vel = 5;
    this.ancho = 0;
    this.alto = height;
    this.direccion=1;
    this.img = loadImage("data/remy.png");
  }
  actualizar() {
    this.teclaPresionada();
    this.dibujar();
  }

  dibujar() {
    push();
    translate(this.x, this.y);
    scale(this.direccion, 1);
    imageMode(CENTER);
    image( this.img, 0, 0, 180*this.direccion, 180) ;
    pop();
  }

  //se mueve el personaje
  teclaPresionada() {
    if ( keyIsPressed ) {
      if ( keyCode===LEFT_ARROW ) {
        this.x-=this.vel;
        this.direccion=-1; //para que se de vuelta
      } else if ( keyCode===RIGHT_ARROW ) {
        this.x+=this.vel;
        this.direccion=1;
      }

      this.x = constrain(this.x, 30, width-40);
    }
  }
}
