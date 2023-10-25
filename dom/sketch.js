let slider;
let cp;



function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, width, 10);
  slider.position(100,100);
  
  cp = createColorPicker("gold");
  cp.position(100,300);
}

function draw() {
  background(cp.color);
  let currentVal = slider.value();
  ellipse(currentVal, height, 10, 10)


}
