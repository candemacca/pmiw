class Ingrediente { //ingredientes buenos
  constructor() {
    this.tipo = int (random(0, 4));
    this.reiniciarUbicacion();

    this.despX=0;
    this.despY= 0;
    this.lado = 60; //tamaño 

    this.img = loadImage("data/ingredientes/ingrediente_"+this.tipo+".png");
    this.vivo=true;
  }
  actualizar() {
    this.mover();
    this.dibujar();
  }
  mover() { //caen los ingredientes
    this.y+=4; 
    if ( this.y>height+30) {
      this.reiniciarUbicacion();
    }
  }
  dibujar() {
    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    image(this.img, 0, -18, this.lado, this.lado ) ; //el -18 para que no aparezcan en la esquina
    pop();
  }


  reiniciarUbicacion() {
    this.x = random (0+this.lado/2, width-this.lado/2);
    this.y = -random(10, 200);
  }

  evaluaColision(x_, y_ ) {

    if ( dist( this.x, this.y, x_, y_) < this.lado/2 ) {
      this.reiniciarUbicacion();
      return true;
    } else {
      return false;
    }
  }
}
//fin de la clase de ingredientes buenos

//ingredientes malos
class IngredienteMalo { //moscas
  constructor() {
    this.reiniciarUbicacion();

    this.despX=0;
    this.despY= 0;
    this.lado = 90; //tamaño 

    this.img = loadImage("data/ingredientes2/ingredientemalo.png");
  }
  actualizar() {

    this.mover();
    this.dibujar();
  }
  mover() {
    this.y+=5; //bajan mas rapido

    if ( this.y>height+15) {
      this.reiniciarUbicacion();
    }
  }
  dibujar() {
    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    image(this.img, 0, -18, this.lado, this.lado ) ; //el -18 para que no aparezcan en la esquina
    pop();
  }


  reiniciarUbicacion() {
    this.x = random (0+this.lado/2, width-this.lado/2);
    this.y = -random(10, 200);
  }

  evaluaColision( x_, y_ ) {

    if ( dist( this.x, this.y, x_, y_ ) < this.lado/2 ) {
      this.reiniciarUbicacion();
      return true;
    } else {
      return false;
    }
  }
}
//fin de la clase de ingredientes malos
