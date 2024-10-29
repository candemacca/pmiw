
function inicializar() {
  estado = 0;

  textos [1] = "Sos Remy, la rata chef, con tu familia roban comida de la basura,\npero tu sueño es convertirte en un chef como tu idolo Gusteau, un\ndia espiando la casa de una ancianita en busca de comida, ves en la\ntelevisión un anuncio del restaurante Gusteau’s, lo que despierta\naún más tu pasión por la cocina. Mientras intentas acercarte a\nla pantalla, la anciana te descubre"
    botonA [1] = "Continuar"

    textos [2] ="Mientras intentas escapar junto a tu familia, algo capta \ntu atención: el famoso libro de Gusteau.\nSin pensarlo dos veces, te apresuras para tomarlo \nantes de escapar. Con el libro en tus patas, \n ves a tu familia entrar por unas cañerias \n y corrés hacia ahí pero ellos ya han huido."
    botonA [2] = "Continuar"

    textos [3] = "Sigues flotando por un rato dentro de\nlas cañerías inundadas,te encontras \n con dos salidas\n\n¿Por qué tubería te metes para volver con tu familia?"
    botonA [3] = "Tubería izquierda"
    botonB [3] = "Tubería derecha"

    textos [4] ="¡Bien hecho!\nLograste encontrarte con tu familia, fue una aventura\nemocionante pero ahora toca volver a la rutina,\nrobando comida de la basura."
    botonA [4] = "Reintentar"
    botonB [4] = "Créditos"

    textos [5] ="No pudiste reencontrarte con tu familia,\npero las brillantes luces de la ciudad te hipnotizan.\nJusto en frente tuyo, se alza el restaurante de\ntu ídolo, Gusteau’s.\n¡Es como si estuvieras soñando!"
    botonA [5] = "Continuar"

    textos [6] ="Te deslizas por los conductos de ventilación y \nllegás a lo alto de la cocina. Desde allí, ves al chico \nde la limpieza arruinando una sopa. No podés ignorarlo,\ntu instinto de chef te obliga a intervenir.\n¿Intentar arreglar la sopa?"
    botonA [6] = "Seguir escondido"
    botonB [6] = "Arreglar la sopa"

    textos [7] ="Optás por mantenerte en las sombras para\nno ser detectado, pero después de un tiempo \n Logran encontrarte y llaman a los\ninspectores de sanidad.\n ¡Te llevan con ellos!"
    botonA [7] = "Reintentar"
    botonB [7] = "Créditos"
    
    textos [8] ="Te colás sigilosamente en la cocina, hasta que llegás a\nla olla de sopa que necesita un arreglo urgente. Comenzas a añadir\ningredientes para arreglarla, pero de repente... ¡te descubren!\nEn medio del caos, el chico de limpieza, llamado Linguini, te atrapa.\nAunque le ordenan deshacerse de vos, te libera. Luego, te lleva a su \ncasa y descubren que pueden cocinar haciendo un gran equipo."
    botonA [8] = "Continuar"
    
    textos [9] = "El restaurante prospera gracias a tu y Linguini. Pero hay\nun problema: Skinner, el chef principal, empieza a sospechar\ny está atento. Un día, estando el restaurante cerrado,\nestás recorriendo la cocina, pero ¡cuidado! Skinner\nsalio de su oficina, y tienes que esconderte.\n¡Rápido! ¿Dónde te escondes?"
    botonA [9] = "Ir a la ventilacion"
    botonB [9] = "Debajo de un colador"

    textos [10] ="Skinner logró encontrarte \ny llamó a los inspectores de sanidad. \nTe sacan del restaurante encerrado en una jaula\n y tus sueños de ser un chef profesional\nse hacen pedazos."
    botonA [10] = "Reintentar"
    botonB [10] = "Créditos"
    
    textos [11] = "Conseguís escapar sin ser visto, y los días pasan sin que\nnadie descubra tu secreto. Pero los problemas siguen:\nAnton Ego, un crítico temido, llega al restaurante y \nsu evaluación podría ponerlo en peligro. Ahora, más que\nnunca, hay que dar lo mejor para impresionarlo.\n¿Intentar sorprender a Ego con un platillo nuevo?"
    botonA [11] = "Ir a lo seguro"
    botonB [11] = "Creo un algo nuevo"
    
    textos [12] = "Van a lo seguro y cocinan un plato dentro del menú,\ndecepcionando a Ego y provocando que deje una \nmala crítica, por esto el restaurante pierde éxito y\nse ven obligados a clausurarlo\n¡Que mala suerte!"
    botonA [12] = "Reintentar"
    botonB [12] = "Créditos"
    
    textos [13] = "Cocinan Ratatouille, haciendo que Ego vuelva\na su infancia con uno de sus platos favoritos\n¡Felicidades!\nGracias a esto deja una buena crítica y\nel restaurante tiene mas exito que nunca"
    botonA [13] = "Reintentar"
    botonB [13] = "Créditos"
}

function preload(){
  imagenes[0] = loadImage("data/fotos/pantalla_01.jpeg");
  imagenes[1] = loadImage("data/fotos/pantalla_02.jpeg"); 
  imagenes[2] = loadImage("data/fotos/pantalla_03.jpeg"); 
  imagenes[3] = loadImage("data/fotos/pantalla_04.jpeg"); 
  imagenes[4] = loadImage("data/fotos/pantalla_05.jpeg"); 
  imagenes[5] = loadImage("data/fotos/pantalla_06.jpeg");
  imagenes[6] = loadImage("data/fotos/pantalla_07.jpeg"); 
  imagenes[7] = loadImage("data/fotos/pantalla_08.jpeg"); 
  imagenes[8] = loadImage("data/fotos/pantalla_09.jpeg"); 
  imagenes[9] = loadImage("data/fotos/pantalla_10.jpeg"); 
  imagenes[10] = loadImage("data/fotos/pantalla_11.jpeg");
  imagenes[11] = loadImage("data/fotos/pantalla_12.jpeg"); 
  imagenes[12] = loadImage("data/fotos/pantalla_13.jpeg");
  imagenes[13] = loadImage("data/fotos/pantalla_14.jpeg");
  imagenes[14] = loadImage("data/fotos/pantalla_15.jpeg");

}


function dibujaBoton(txt, x, y, w, h) {
  push();
  rectMode(CENTER);
  
  stroke(0);
  strokeWeight(1);
  if (colisionBoton(x, y, w, h)) {
    fill(57,54,49);
  } else {
    fill(165,147,112);
  }
  rect(x, y, w, h);
  noStroke();
  textAlign(CENTER, CENTER);
  fill(255);
  text(txt, x, y);
  pop();
}

function colisionBoton(x, y, w, h) {

  return (mouseX>x-w/2 && mouseX<x+w/2 && mouseY>y-h/2 && mouseY<y+h/2);
}

function pantallaInicio() {
  push();
   background(135,146,183);
   image(imagenes[estado], 5,5,625,465); 
     
  noStroke();
  fill(0,100);
  rect(20,10,600,100);
  fill(255);
  textAlign(CENTER);
  textSize(35);
  text("¿Estás preparado para esta\naventura culinaria?", width/2, 50);

  //botones:
  textSize(23);
 
  dibujaBoton("EMPEZAR", width/2, height*0.75, 200, 40);
  dibujaBoton("CRÉDITOS", width/2, height*0.75+60, 200, 40);

  pop();
}

function pantallaCreditos() {
  push();
  background(135,146,183);
  image(imagenes[estado], 5,5,625,465); 
   noStroke();
  fill(203,194,175,100);
  rect(123,200,400,150);
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text("Hecho por:\n Tomas Medina Legajo:119088/9\ny\n Candela Macca Legajo:119072/9", width/2, height/2);

  //botones:
  dibujaBoton("VOLVER", width/2, height*0.75+60, 200, 40);

  pop();
}

function pantallaHistoriaDosBotones( txt_pantalla, txt_btn_A, txt_btn_B ) {
  push();
 background(216,207,136);
    image(imagenes[estado], 5,5,625,465); 
  
    
  noStroke();
  fill(203,194,175,150);
  rect(20,10,600,150);

  fill(255);
  textAlign(CENTER);
  textSize(21);
  text(txt_pantalla, 320, 30);
  

  //botones:
  //A:
  dibujaBoton(txt_btn_A, width/2-200, height*0.75+60, 200, 40);
  //B:
  dibujaBoton(txt_btn_B, width/2+200, height*0.75+60, 200, 40);

  pop();
}



function pantallaHistoriaUnBoton( txt_pantalla, txt_btn_A ) {
  push();
 background(216,207,136);
    image(imagenes[estado], 5,5,625,465);  
 
  
  noStroke();
  fill(203,194,175,130);
  rect(8,10,620,150);


  fill(255);
  textAlign(CENTER);
  textSize(18);
  text(txt_pantalla, width/2, 30);
  

  //boton A:
  dibujaBoton(txt_btn_A, width/2-200, height*0.75+60, 200, 40);
 strokeWeight(10);

  pop();
}
