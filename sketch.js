var wall, bullet, thicknes;
var speed, weight;

function setup() {
  createCanvas(800,400);

  speed = random(223, 321);
  weight = random(30, 52);

  thickness = random (22, 83);

  bullet = createSprite(50, 200, 20, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(600, 200, thickness, 200);
  

}

function draw() {

  background(0);
  
  if ( hasColided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

    if (damage<10){
      wall.shapeColor = "green";
    }

    if (damage>10){
      wall.shapeColor = "red";
    }
  }
  
  drawSprites();
}

function hasColided(ibullet, iwall) {

bulletre = ibullet.x + ibullet.width;
wallle = iwall.x;
if (bulletre>=wallle){
  return true
}
return false;
}