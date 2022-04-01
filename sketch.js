const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var solo;
var fruta, corda;
var con;
var botao2, botao3, botao1;

var corda1, corda2,corda3;

var cenarioIMG, frutaIMG, coelhoIMG, coelho;
var botaoVentilador;

var comendo, piscando;

var somFundo, somComendo, somCorte; 


function preload() {

    //imagens
    cenarioIMG = loadImage("background.png");
    frutaIMG = loadImage("fruta.png");
    coelhoIMG = loadImage("coelho.png");

    //animações
    comendo = loadAnimation("comer1.png", "comer2.png", "comer3.png", "comer4.png", "comer5.png");
    piscando = loadAnimation("piscar1.png", "piscar2.png", "piscar3.png");
    triste = loadAnimation("triste1.png", "triste2.png", "triste3.png");


    piscando.playing = true;
    comendo.playing = true;

    piscando.looping = true;
    comendo.looping = false;

    triste.looping = true;
    triste.looping = false;

    //sons

    somFundo = loadSound("fundo.mp3");


}


function setup() {
    createCanvas(500, 700);
    frameRate(80);

    piscando.frameDelay = 20;
    comendo.frameDelay = 20;
    triste.frameDelay = 20;

    //botões
    botao = createImg("botãoCortar.png");
    botao.position(245, 25);
    botao.size(50, 50);
    botao.mouseClicked(soltar);

    //botão pausar
    pausar = createImg(".png");
    pausar.position();
    pausar.size();
    pausar.mouseClicked();


    //botão balão

   balao = createImg(".png");
   balao.position();
   balao.size();
   balao.mouseClicked();

    engine = Engine.create();
    world = engine.world;
    solo = new Ground(200, 690, 600, 20);

    //cordas
    corda = new Rope(7, { x: 245, y: 30 });



    fruta = Bodies.circle(300, 300, 20);
    
    Composite.add(corda.body, fruta);


    //conexões
    con = new Link(corda, fruta);




    coelho = createSprite(245, 650, 50, 50);
    coelho.addImage(coelhoIMG);
    coelho.addAnimation("piscando", piscando);
    coelho.addAnimation("comendo", comendo);
    coelho.addAnimation("triste", triste);
    coelho.changeAnimation("piscando")



    coelho.scale = 0.15

    rectMode(CENTER);
    ellipseMode(RADIUS);

    textSize(50)

}

function draw() {
    image(cenarioIMG, 0, 0, width, height);
    corda.show();
    imageMode(CENTER);
    coelho.x = mouseX;

    Engine.update(engine);
    solo.show();

    if (fruta !== null) {
        image(frutaIMG, fruta.position.x, fruta.position.y, 60, 60);
    }

 /*   if(colidiu(fruta, coelho)){

    }
    if(colidiu(fruta,solo.body)){

    }
*/
    drawSprites();

}

function soltar() {
    corda.break();
    con.detach();
    con = null;
}
/*
function colidiu(body, sprite){
   if(body!=null){
    
    var d = ;

    if(d<=80){
        World.remove(world, body);
        return ;
    }
    else{
        return ;
    }

   }
    
}*/


/*function soprar(){

    

}*/

/* function pausar(){

    if(){

    }
    else{

    }
}
*/