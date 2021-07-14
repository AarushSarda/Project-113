function preload() {

}
function setup() {
    canvas = createCanvas(600,450);
    canvas.position(320,230);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video , 200 , 150 , 220 , 200);
    fill (255 , 0 , 0);
    stroke (255,0,0);
    circle (50,50,80);
    circle (50,430,80);
    circle (540,430,80);
    circle(540,50,80);
    fill (3, 252, 252);
    stroke(3, 252, 252);
    rect(90,40,410,20);
    rect(90,420,410,20);
    rect(40,90,20,300);
    rect(530,90,20,300);
}
function takeSnapshot() {
    save("My Image.png");
}