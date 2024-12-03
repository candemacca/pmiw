class Juego {
  constructor() {
    this.estado="inicio";
    this.crearPersonaje();
    this.crearIngredientes();

    this.botonInicio = new BotonInicio ("EMPEZAR", width/2, height*0.82, 150, 40);
    this.botonInstrucciones = new BotonInicio("INSTRUCCIONES", width / 2, height * 0.93, 150, 40);
    this.botonReinicio = new BotonReinicio ("VOLVER", width/2, height*0.80, 150, 40);
    this.botonCreditos = new BotonCreditos ("CRÉDITOS", width/2, height*0.70, 150, 40);


    this.puntos=0;
    this.vidas = 3;

    this.ingredientes = [];
    this.ingredientes2 = [];
  }

  actualizar() { //declaro todos los estados
    if (this.estado==="inicio") {
      this.pantallaInicio();
    } else if (this.estado ==="instrucciones") {
      this.pantallaInstrucciones();
    } else if (this.estado==="jugando") {
      this.juego();
    } else if (this.estado==="perder") {
      this.pantallaPerder();
    } else if (this.estado==="ganar") {
      this.pantallaGanar();
    } else if (this.estado==="creditos") {
      this.pantallaCreditos();
    }
  }

  juego() {
    fill(113, 84, 54);
    rect(0-20, 420, width+35, 70); //rectangulo abajo

    for ( let i=0; i<this.ingredientes.length; i++) {
      this.ingredientes[i].actualizar();
      if ( this.ingredientes[i].evaluaColision( this.personaje.x, this.personaje.y, this.personaje.ancho, this.personaje.alto) ) {
        if ( this.ingredientes[i].tipo <=4 ) {
          this.puntos++;
          if (this.puntos>= 20) {
            this.estado = "ganar";
          }
        }
      }
    }
    for (let i = 0; i < this.ingredientes2.length; i++) {
      this.ingredientes2[i].actualizar();
      if (this.ingredientes2[i].evaluaColision(this.personaje.x, this.personaje.y, this.personaje.ancho, this.personaje.alto)) {
        this.vidas--;
        if (this.vidas <= 0) {
          this.estado = "perder";
        }
      }
    }
    this.personaje.actualizar();
    this.mostrarPuntosYVidas();
  }

  //****** PANTALLAS ******

  pantallaInicio() {
    push();
    image (imgInicio, 0, -70);

    fill(227, 184, 119, 200);
    noStroke();
    rect(120, 10, 405, 100);

    textSize(50);
    fill(255);
    textAlign(CENTER, CENTER);
    text("CATCH N' COOK", 320, 45);
    textSize(30);
    text("Una aventura culinaria", 320, 90);

    stroke(0); //para el texto en los botones
    strokeWeight(1);
    this.botonInicio.actualizar();
    this.botonInstrucciones.actualizar();
    pop();
  }

  pantallaPerder() {
    push();
    background(224, 193, 147);

    fill(108, 82, 42, 200);
    rect(90, 45, 450, 100);

    fill(255);
    strokeWeight(4);
    textAlign(CENTER, TOP);
    textSize(70);
    text("PERDISTE :(", 320, 60);
    strokeWeight(2);
    textSize(30);
    text("Si aceptaron ratas en la cocina,\n¿Qué problema hay con unas moscas?", 320, 210);

    stroke(0); //para el texto en los botones
    strokeWeight(1);
    this.botonCreditos.actualizar();
    pop();
  }

  pantallaGanar() {
    push();
    background(224, 193, 147);

    fill(108, 82, 42, 200);
    rect(120, 45, 405, 100);

    fill(255);
    strokeWeight(4);
    textAlign(CENTER, TOP);
    textSize(70);
    text("¡GANASTE!", 320, 60);
    strokeWeight(2);
    textSize(30);
    text("Atrapaste todos los\ningredientes correctos\n¡Felicidades!", 320, 200);

    stroke(0); //para el texto en los botones
    strokeWeight(1);
    this.botonCreditos.actualizar();
    pop();
  }

  pantallaInstrucciones() {
    push();

    background(67, 46, 26);
    textSize(50);
    fill(227, 184, 119);
    textAlign(CENTER, TOP);
    text("INSTRUCCIONES", 320, 30);
    fill(255);
    textSize(24);
    text("Colectá los ingredientes que Remy\nnecesita para cocinar un buen guiso, pero\n¡Cuidado! Hay una plaga de moscas\ndentro de la cocina, intentá que\nno caigan en la olla\n\nUtilizá las flechas para que Remy se mueva.\n\n¡Mucha suerte y buen provecho!", 320, 100);

    stroke(0); //para el texto en los botones
    strokeWeight(1);
    this.botonInicio.actualizar();
    pop();
  }

  pantallaCreditos() {
    push();
    background(67, 46, 26);
    image(imgRemyPiola, 430, 310, 220, 170);
    fill(255);
    strokeWeight(4);
    textAlign(CENTER, TOP);
    textSize(35);
    text("HECHO POR:\nCandela Macca\n119072/9\ny\nTomas Medina\n119088/9", 320, 60);


    stroke(0); //para el texto en los botones
    strokeWeight(1);
    this.botonReinicio.actualizar();
    pop();
  }

  //****** FIN DE PANTALLAS ******

  mostrarPuntosYVidas() {
    stroke(0);
    fill(108, 82, 42);
    textSize(25);
    textAlign(LEFT, TOP);
    text("INGREDIENTES: " + this.puntos+" / 20", 20, 20);
    text("VIDAS: " + this.vidas, 20, 50);
  }

  crearIngredientes() {
    this.ingredientes = [];
    for (let i=0; i<4; i++) { //cantidad de ingredinetes q caen
      this.ingredientes[i] = new Ingrediente();
    }

    this.ingredientes2 = [];
    for (let i=0; i<1; i++) { //cantidad de ingredinetes q caen
      this.ingredientes2[i] = new IngredienteMalo();
    }
  }

  crearPersonaje() {
    this.personaje = new Personaje(width/2, 300);
  }

  mousePressed() {
    if ( this.estado==="inicio") {
      if (this.botonInicio.colisionMouse() ) {

        this.estado = "jugando";
        this.puntos=0;
        this.vidas=3;
        this.crearIngredientes();
      } else if (this.botonInstrucciones.colisionMouse()) {
        this.estado="instrucciones";
      }
    }
    if (this.estado==="instrucciones") {
      if (this.botonInicio.colisionMouse()) {
        this.estado = "jugando";
        this.puntos=0;
        this.vidas=3;
        this.crearIngredientes();
      }
    }

    if (this.estado=== "perder") {
      if (this.botonCreditos.colisionMouse()) {
        this.estado="creditos";
      }
    }
    if (this.estado==="ganar") {
      if (this.botonCreditos.colisionMouse()) {
        this.estado="creditos";
      }
    }
    if (this.estado==="creditos") {
      if (this.botonReinicio.colisionMouse()) {
        this.estado="inicio";
      }
    }
  }

  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }
}
