class Personaje {
  constructor(){
   
    this.miColor = color (230,130,50);
    this.x = width/2;
    this.y = height-50;
    this.vel = 5;
    this.ancho = 50;
    this.alto = 20;
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
    scale(this.direccion,1);
    imageMode(CENTER);
    image( this.img, 0,-30  ,150*this.direccion,150) ;
    pop();
  }
 
  //se mueve el personaje
teclaPresionada(){
    if ( keyIsPressed ) {
      if ( keyCode===LEFT_ARROW ) {
        this.x-=this.vel;
        this.direccion=-1;
      } else if ( keyCode===RIGHT_ARROW ) {
        this.x+=this.vel;
        this.direccion=1;
      }
      
      this.x = constrain(this.x, 30, width-40);
    }
  }
  
}
