let d = 60;
let deg = 58;
let outline = true;


let gui;
let diameterSlider, degSlider, outlineCheckbox;

let joystick;
let bgColor;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  strokeWeight (10);

  gui = createGui();
  gui.setRounding(1);

  joystick = createJoystick("Joystick", 30, 10, 60,60);
  joystick.setStyle({
    fillBg: color("white")
  })
  bgColor = color("red");


  diameterSlider = createSlider("Diameter", 200,10, 100,20, 10,100);
  diameterSlider.onChange = diameterSliderChanger;
  diameterSlider.setStyle({
    fillBg: color("white"),
    strokeWeight: 5
  })
  degSlider = createSlider("Rotation", 200,40, 100,20, 0,180);
  degSlider.setStyle({
    fillBg: color("white"),
    strokeWeight: 5
  })
  degSlider.isInteger = true;
  degSlider.val = 23;
  outlineCheckbox = createCheckbox("Outline", 340,10, 20,20, true);
  outlineCheckbox.setStyle({
    fillBg: color("white"),
    strokeWeight: 2
  })
}

function draw() {
  let joyX = joystick.valX;
  let joyY = joystick.valY;

  let r = map(joyX, -1, 1, 0, 255); 
  let g = map(joyY, -1, 1, 0, 255); 
  let b = map(joyX + joyY, -2, 2, 0, 255)

  bgColor = color(r,g,b);

  background(bgColor);
  drawGui();

  if (outlineCheckbox.val) {
  stroke("black");
  } else {
    noStroke();
  }

Fill: color("white");
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