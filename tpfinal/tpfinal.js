// Link Youtube: https://youtube.com/watch?v=XV5aPZiN6Eg
//Alumna: Candela Macca
//Legajo: 119072/9
//Comision 3
//Profesor: David Bedoian

let estado;
let textos = [];
let botonA = [];
let botonB = [];
let imagenes = [];
let sonidoMusica;

//Cargar imagenes y fuente
function preload(){
  for (let i = 0; i < 15; i++) {
    imagenes [i] = loadImage ("data/fotos/pantalla_" +nf(i+1,2) + ".jpeg")
    fuente = loadFont("data/Fuentes/Totote.ttf");
  }
  
  console.log(imagenes);
}


function setup() {
  sonidoMusica = document.getElementById("sonido-musica");
  createCanvas (640, 480);
  inicializar();
  
 
}

function draw() {
   textFont(fuente);
  if (estado===0) {
    sonidoMusica.currentTime=0;
    pantallaInicio();
  } else if (estado===14) {
    pantallaCreditos();
  } else if  (estado===3 || estado===4 || estado===6 || estado===7 || estado===9 || estado===10 ||estado===11 || estado===12 || estado===13) {
  
    pantallaHistoriaDosBotones (textos[estado], botonA[estado], botonB[estado]);
  } else if (estado===1 || estado===2 || estado===5 || estado===8) {
    pantallaHistoriaUnBoton (textos [estado], botonA [estado]);
  }
}

function mousePressed() {
  textFont(fuente);
  if (estado===0) {
    if (colisionBoton (width/2, height*0.75, 200, 40)) {
      sonidoMusica.play();
      estado=1;
    } else if (colisionBoton (width/2, height*0.75+60, 200, 40)) {
      estado=14;
    }
  } else if (estado===14) {
    if (colisionBoton(width/2, height*0.75+60, 200, 40)) {
      estado=0;
    }
  } else if (estado===1) {
    if (colisionBoton (width/2-200, height*0.75+60, 200, 40)) {
      estado=2;
    }
  } else if (estado===2) {
    if (colisionBoton (width/2-200, height*0.75+60, 200, 40)) {
      estado=3;
    }
  } //Decision tuberias
  else if (estado===3) {
    if (colisionBoton (width/2-200, height*0.75+60, 200, 40)) {
      estado=4;
    } else if (colisionBoton (width/2+200, height*0.75+60, 200, 40)) {
      estado=5;
    }
  } else if (estado===4) {
    if (colisionBoton (width/2-200, height*0.75+60, 200, 40)) {
      estado=0;
    }if (colisionBoton (width/2+200, height*0.75+60, 200, 40)){
      estado=14;
    }
  } //
  else if (estado===5) {
    if (colisionBoton (width/2-200, height*0.75+60, 200, 40)) {
      estado=6;
    }
  } //Decision sopa:
  else if (estado===6) {
    if (colisionBoton (width/2-200, height*0.75+60, 200, 40)) {
      estado=7;
    } else if (colisionBoton (width/2+200, height*0.75+60, 200, 40)) {
      estado=8;
    }
  } else if (estado===7){
    if (colisionBoton (width/2+200, height*0.75+60, 200, 40)){
      estado=14;
    }if (colisionBoton (width/2-200, height*0.75+60, 200, 40)) {
      estado=0;
    }
  } //
  else if (estado===8) {
    if (colisionBoton (width/2-200, height*0.75+60, 200, 40)) {
      estado=9;
    }
  } // decision escondite:
  else if (estado===9) {
    if (colisionBoton (width/2-200, height*0.75+60, 200, 40)) {
      estado=11;
    } else if (colisionBoton (width/2+200, height*0.75+60, 200, 40)) {
      estado=10;
    }
  }else if (estado===10){
    if (colisionBoton (width/2+200, height*0.75+60, 200, 40)){
      estado=14;
    }if (colisionBoton (width/2-200, height*0.75+60, 200, 40)) {
      estado=0;
    }
  } //
    //decision comida
  else if (estado===11) {
    if (colisionBoton (width/2-200, height*0.75+60, 200, 40)) {
      estado=12;
    } if (colisionBoton (width/2+200,height*0.75+60,200,40)){
      estado=13
  } 
  }else if (estado===12) {
    if (colisionBoton (width/2-200, height*0.75+60, 200, 40)) {
      estado=0;
    } if (colisionBoton (width/2+200, height*0.75+60,200, 40)) {
      estado=14;
    }
  }//
  else if (estado===13) {
    if (colisionBoton (width/2-200, height*0.75+60, 200, 40)) {
      estado=0;
    }if (colisionBoton(width/2+200, height*0.75+60,200,40)){
      estado=14;
    }
  }
  console.log("estado:" +estado);

}
