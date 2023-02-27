function preload(){

}
function setup(){
c=createCanvas(300,300);
c.center();
w=createCapture(VIDEO);
w.hide();

}

function draw(){
stroke("yellow");
fill("green");
circle(60,60,70);
image(w,0,0,300,300);
ellipse(56, 46, 30, 55);
stroke("black");
fill("white");
rect(30, 20, 55, 55, 20, 15, 10, 5);
stroke("blue");
fill("white");
}

