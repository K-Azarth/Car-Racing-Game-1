var Canvas = document.getElementById("myCanvas");
var ctx = Canvas.getContext("2d");

var Background_Image = "mars.jpg";

var car1_width = 120;
var car1_height = 70;
var car1_Image = "car1.png";
var car1_X = 10;
var car1_Y = 10;

var car2_width = 120;
var car2_height = 70;
var car2_Image = "car2.png";
var car2_X = 10;
var car2_Y = 100;

var Background_tag;
var car1_tag;
var car2_tag;

function add() {
    Background_tag = new Image();
    Background_tag.onload = uploadBackground;
    Background_tag.src = Background_Image;

    car1_tag = new Image();
    car1_tag.onload = uploadrover;
    car1_tag.src = car1_Image;

    car2_tag = new Image();
    car2_tag.onload = uploadrover;
    car2_tag.src = car2_Image;
}

function uploadBackground() {
    ctx.drawImage(Background_tag, 0, 0, Canvas.width, Canvas.height);
}

function uploadcar1() {
    ctx.drawImage(Rover_tag, Rover_X, Rover_Y, Rover_Width, Rover_Height)
}

window.addEventListener("keydown", MyKeydown);

function MyKeydown(e) {
    var key = e.keyCode;
    console.log(key);
    if (key == '38') {
        ca1_up();
        console.log("Up Arrow Key");
    }
    if (key == '40') {
        car1_down();
        console.log("Down Arrow Key");
    }
    if (key == '37') {
        car1_left();
        console.log("Left Arrow Key");
    }
    if (key == '39') {
        car1_right();
        console.log("Right Arrow Key");
    }
    if (key == '87') {
        car2_up();
        console.log("Key W");
    }
    if (key == '83') {
        car2_down();
        console.log("Key S")
    }
    if (key == '65') {
        car2_left();
        console.log("Key A");
    }
    if (key == '68') {
        car2_right();
        console.log("Key D");
    }
}