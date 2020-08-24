var h,m,s; 


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  h = hour()
  m= minute()
  s = second()

  translate(200,200);
  rotate(-90);

  strokeWeight(4)
  stroke(255,0,0)
  noFill();
  
  var end1 = map(s,0,60,0,360)
  arc(0,0,300,300,0,end1);

  push();
  rotate(end1)
  line(0,0,120,0)
  pop();

  stroke(152,0,255)
  var end2 = map(m,0,60,0,360)
  arc(0,0,280,280,0,end2);

  push();
  rotate(end2)
  line(0,0,110,0)
  pop();

  stroke(50,201,255)
  var end3 = map(h % 12,0,12,0,360)
  arc(0,0,260,260,0,end3);

  push();
  rotate(end3)
  line(0,0,75,0)
  pop();

  push();
  stroke(255)
  noFill()
  ellipse(0,0,5,5)
  pop()

}