class Juego {
  constructor() {

    this.personaje= new Personaje();

    this.estado = "inicio";
    this.crearPersonaje();
    this.crearIngredientes();

    this.botonInicio = new Boton ("EMPEZAR", width/2, height*0.75, 100, 40);

    this.puntos=0;
    this.vidas = 3;


    this.ingredientes = [];
    this.ingredientes2 = [];
    this.cant = 4;


    
  }

  actualizar() {
    if (this.estado==="inicio") {
      this.pantallaInicio();
    } else if (this.estado=="jugando") {

      for  ( let i=0; i<this.ingredientes.length; i++) {

        this.ingredientes[i].actualizar();

      }
      
    
    for ( let i=0; i<this.ingredientes.length; i++) {
      if ( this.ingredientes[i].evaluaColision( this.x, this.y, this.ancho, this.alto) ) {
        if ( this.ingredientes[i].tipo == 0 ) {
          this.puntos++;
       
        }
      }
    }
    
    for (let i = 0; i < this.ingredientes2.length; i++) {
      this.ingredientes2[i].actualizar();
      if (this.ingredientes2[i].evaluaColision(this.x, this.y, this.ancho, this.alto)) {
        this.vidas--;
      }
    }
    this.personaje.actualizar();
      this.mostrarPuntosYVidas();
      
       if (this.vidas <= 0) {
      this.estado = "creditos";
       }
  

    if (this.estado==="creditos") {
      this.pantallaCreditos ();
    }
  }
  }
  pantallaInicio() {
    push();
    image (imgInicio, 0, 0);

    this.botonInicio.actualizar();
    pop();
  }

  pantallaCreditos() {
    push();
    background(0, 0, 0, 150);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Fin del Juego", width / 2, height / 3);

    let botonTexto = "REINTENTAR";
    let boton = new Boton(botonTexto, width / 2, height * 0.75, 150, 50);
    boton.actualizar();
    pop();
  }
  
  mostrarPuntosYVidas() {
    fill(0);
    textSize(20);
    textAlign(LEFT, TOP);
    text("Puntos: " + this.puntos, 20, 20);
    text("Vidas: " + this.vidas, 20, 50);
  }


  mousePressed() {
    if ( this.estado==="inicio") {
      if (this.botonInicio.colisionMouse() ) {

        this.estado = "jugando";
        this.puntos=0;
        this.vidas=3;
        this.crearIngredientes();
      }
    } else if (this.estado==="creditos") {
      if (this.botonInicio.colisionMouse()) {
        this.estado = "inicio";
        this.puntos = 0;
        this.vidas = 3;
        this.crearIngredientes();
      }
    }
  }
  crearIngredientes() {
    this.ingredientes = [];
    for (let i=0; i<this.cant; i++) {
      this.ingredientes[i] = new Ingrediente();
    }  
    
    this.ingredientes2 = [];
    for (let i=0; i<this.cant; i++) {
      this.ingredientes2[i] = new IngredienteMalo();        

    }
  }

  crearPersonaje() {
    this.personaje = new Personaje(width/2, 300);
  }

  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }
}
