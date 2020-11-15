var Bullet
var Test_wall

function setup() {
  createCanvas(800,800);
  Bullet = createSprite(100,400,100,50)
  Bullet.shapeColor = "orange"

  Test_wall = createSprite(750,400,random(20,80),800)
  Test_wall.shapeColor = "gray"
}

function draw() {
  background(0);
  Bullet.velocityX=40
  if(Bullet.x - Test_wall.x <= Test_wall.width/2 + Bullet.width/2  &&  
     Test_wall.x - Bullet.x <= Test_wall.width/2 + Bullet.width/2  &&
     Bullet.y - Test_wall.y <= Test_wall.height/2 + Bullet.height/2  &&  
     Test_wall.y - Bullet.y <= Test_wall.height/2 + Bullet.height/2){
      
     Bullet.velocityX=0
     if(Test_wall.width <=40){
     text("TEST HAS BEEN DONE THE WALL WAS RATED BAD", 200, 300)
     text("PLEASE PRESS SPACE TO TEST NEXT WALL", 200, 320)
     Test_wall.shapeColor='red'
     }
     else{
      text("TEST HAS BEEN DONE THE WALL WAS RATED GOOD", 200, 300)
      text("PLEASE PRESS SPACE TO TEST NEXT WALL", 200, 320) 
      Test_wall.shapeColor='green'
     }
     
     if(keyWentDown('Space')){
        Bullet.x=100
        Test_wall.shapeColor='gray'
        Test_wall.width=random(20,80)
      }
  }
  drawSprites()
}