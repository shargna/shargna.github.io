function getWidth() {
    var canvasDiv = document.getElementById("sketch-holder");
    return canvasDiv.offsetWidth;
}

function getHeight() {
    var canvasDiv = document.getElementById("sketch-holder");
    return canvasDiv.offsetHeight;
}

function windowResized() {
    var canvas = createCanvas(getWidth(), getHeight());
    canvas.parent("sketch-holder");
    background(0);
}

var angle = 0;

function setup() {
    var canvas = createCanvas(getWidth(), getHeight());
    canvas.parent("sketch-holder");
    background(0);
}

var dec = false;

function draw() {
    background(0);
    stroke(255);
    translate(getWidth() / 2, height);
    branch(getHeight()/3);
    angle = (angle += 0.005) % TWO_PI;
    // angle = (angle + 0.01) % (PI / 2);
    
}

function branch(len) {
    if(len <= 4) {
        return;
    }
    line(0, 0, 0, -len);
    translate(0, -len);
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate( - (angle));
    branch(len * 0.67)
    pop();
    // line(0, 0, 0, -len*0.67)
}