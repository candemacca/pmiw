class Ingrediente {
  constructor(){
    this.tipo = int (random(0,4));  
    this.reiniciarUbicacion();
    
    this.despX=0;
    this.despY= 4;
    this.lado = 50;
    
    this.img = loadImage("data/ingredientes/ingrediente_"+this.tipo+".png");
    this.vivo=true;
  }
  actualizar(){
    this.mover();
    this.dibujar();
    
  }
  mover(){ //caen los ingredientes
    this.y+=6
    if ( this.y>height ) {
      this.reiniciarUbicacion();
    }
  }
  dibujar(){
  push();
    translate(this.x, this.y);
   imageMode(CENTER);
    image(this.img,0,-10, this.lado, this.lado ) ; //el -10 para que no aparezcan en la esquina
    pop();
  }
    
  
 reiniciarUbicacion(){
   this.x = random (0+this.lado/2,width-this.lado/2);
   this.y = -random(10,200);
 }
 
 evaluaColision(x, y, ancho, alto) {
  // Verificar si el ingrediente está dentro de los límites del personaje
  let colisionHorizontal = this.x + this.lado / 2 > x - ancho / 2 &&
                           this.x - this.lado / 2 < x + ancho / 2;

  let colisionVertical = this.y + this.lado / 2 > y - alto / 2 &&
                         this.y - this.lado / 2 < y + alto / 2;

  if (colisionHorizontal && colisionVertical) {
    this.reiniciarUbicacion(); // Reinicia la ubicación del ingrediente tras colisión
    return true;
  }
  return false;
}
    
    }
//fin de la clase de ingredientes buenos

//ingredientes malos
class IngredienteMalo{
  constructor(){
    this.tipo = int (random(0,4));  
    this.reiniciarUbicacion();
    
    this.despX=0;
    this.despY= 4;
    this.lado = 50;
    
    this.img = loadImage("data/ingredientes2/ingredientemalo_"+this.tipo+".png");
    this.vivo=true;
  }
  actualizar(){
    this.mover();
    this.dibujar();
    
  }
  mover(){
    this.y+=6;
    if ( this.y>height+30 ) {
      this.reiniciarUbicacion();
    }
  }
  dibujar(){
  push();
    translate(this.x, this.y);
   imageMode(CENTER);
    image(this.img,0,-10, this.lado, this.lado ) ; //el -10 para que no aparezcan en la esquina
    pop();
  }
    
  
 reiniciarUbicacion(){
   this.x = random (0+this.lado/2,width-this.lado/2);
   this.y = -random(10,200);
 }
 
evaluaColision(x, y, ancho, alto) {
  // Verificar si el ingrediente está dentro de los límites del personaje
  let colisionHorizontal = this.x + this.lado / 2 > x - ancho / 2 &&
                           this.x - this.lado / 2 < x + ancho / 2;

  let colisionVertical = this.y + this.lado / 2 > y - alto / 2 &&
                         this.y - this.lado / 2 < y + alto / 2;

  if (colisionHorizontal && colisionVertical) {
    this.reiniciarUbicacion(); // Reinicia la ubicación del ingrediente tras colisión
    return true;
  }
  return false;
}
    
}
  //fin de la clase de ingredientes malos

  
