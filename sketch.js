let d = 60;
let deg = 58;
let outline = true;


let gui;
let diameterSlider, degSlider, outlineCheckbox;

let joystick;
let circleColor;
let rectColor;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  strokeWeight (10);

  gui = createGui();
  gui.setRounding(1);

  joystick = createJoystick("Joystick", 30, 10, 60,60);
  joystick.setStyle({
    fillBg: color("red")
  })

  circleColor = color("red");
  rectColor = color("red");

  diameterSlider = createSlider("Diameter", 200,10, 100,20, 10,100);
  diameterSlider.onChange = diameterSliderChanger;
  diameterSlider.setStyle({
    fillBg: color("red"),
    strokeWeight: 5
  })
  degSlider = createSlider("Rotation", 200,40, 100,20, 0,180);
  degSlider.setStyle({
    fillBg: color("red"),
    strokeWeight: 5
  })
  degSlider.isInteger = true;
  degSlider.val = 23;
  outlineCheckbox = createCheckbox("Outline", 340,10, 20,20, true);
  outlineCheckbox.setStyle({
    fillBg: color("red"),
    strokeWeight: 2
  })
}

function draw() {
  background("black");
  drawGui();

  if (outlineCheckbox.val) {
  stroke("grey");
  } else {
    noStroke();
  }


  fill (color("red"));
  circle(100,200,d);


  push();
  translate(200,200);
  deg = degSlider.val;
  rotate( radians(deg) );
  rect(0,0,60,60);
  pop();

noStroke();
  text(diameterSlider.label, 140, 25);


}

function diameterSliderChanger() {
  d = diameterSlider.val;
}