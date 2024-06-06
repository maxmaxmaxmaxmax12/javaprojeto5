let xbola = 500;
let ybola = 400;
let diametro = 20;
let raio = diametro / 2;
let xvb = 6;
let yvb = 6;
let xr=5;
let yr=150;
let lr=7;
let ar=80;
let xri=790;
let yri=150;
let meuspontos = 0
let pontosinimigo = 0
let imagem;
let ponto;
let raquetada;
let fundo;

function setup() {
  createCanvas(800, 500);
  fundo.loop();
}

function draw() {
  image(imagem,0,0,800,500)
  fill ("deeppink");
  mostrabola();
  mexebola();
  quicabola();
  mostraraquete(xr,yr);
  mostraraquete(xri,yri);
  mexeraquete();
  mexeraqueteinimigo();
  quicaraquetebola(xri, yri);
  quicaraquetebola(xr,yr);
  placar();
  pontos();
  texto();

}

function preload(){
  imagem = loadImage("ratinho.png");
  fundo = loadSound("cannibalcorpse.mp3");
  ponto = loadSound("sinistro.wav");
  raquetada = loadSound("saltar.wav");
}

function placar(){
  stroke("pink");
  textAlign(CENTER);
  textSize(20);
  fill ("violet");
  rect(150,10,40,20);
  fill("white");
  text(meuspontos,170,12);
  fill("violet");
  rect(600,10,40,20);
  fill("white");
  text(pontosinimigo, 620,12)
}

function mostrabola() {
  circle(xbola, ybola, diametro);
}

function mexebola(){
  xbola += xvb;
  ybola += yvb;
}
function quicabola(){
  if (xbola + raio > width || xbola - raio < 0) {
    xvb *= -1;
  }
  if (ybola + raio > height || ybola - raio < 0) {
    yvb *= -1;
    
  }
}

function mostraraquete(x,y){
  rect(x,y,lr,ar);
}  
  function mexeraquete(){
    if (keyIsDown(UP_ARROW))
      yr-=10;
    
    if(keyIsDown( DOWN_ARROW))
      yr+=10;
    
  }
function mexeraqueteinimigo(){
   if (keyIsDown(87))
      yri-=10;
    
    if(keyIsDown(83))
      yri+=10;
}

function quicaraquetebola(x,y){
  colidiu = collideRectCircle(x,y,lr,ar,xbola,ybola,raio);
  if(colidiu){
    xvb *= -1;
    raquetada.play();
  }
}

function pontos(){
  if (xbola > 790){
      meuspontos += 1
    ponto.play();
      }
  
  if (xbola < 10){
      pontosinimigo += 1
    ponto.play();
      }
}
function texto(){
  let frase = "MEUS PONTOS"
  let xf = 90;
  let yf = 40;
  textSize(20);
  textAlign(LEFT, TOP)
  fill("slateblue");
  text(frase, xf,yf);
  
  let frase2 = "PONTOS OPONENTE"
  let xf2 = 520;
  let yf2 = 40;
  textSize(20);
  textAlign(LEFT, TOP)
  fill("slateblue");
  text(frase2, xf2,yf2);
}