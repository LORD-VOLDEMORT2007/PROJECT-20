
var car , wall , speed , weight , deformation


function setup() {
  createCanvas(1000,400);

  speed = Math.round(random(50 , 200))
  weight = Math.round(random(350 , 1000))
  
  car = createSprite(50 , 200 , 70 , 30)
  car.velocityX = speed;

  wall = createSprite(950 , 200 , 20 , 200)
  wall.shapeColor = 'white'

}

function draw() {
  background('black'); 



  if (wall.x - car.x <= car.width/2 + wall.width/2){

    car.velocityX = 0
    car.pause

    deformation = (0.5 * weight * speed * speed) / 22500

    if (deformation < 100){

      car.shapeColor = 'green'
      car.pause

    }

    if (deformation > 180){

      car.shapeColor = 'red'
      car.pause

    }

    if (deformation > 100 && deformation < 180){

      car.shapeColor = 'yellow'
      car.pause

    }


  }





  drawSprites();
}