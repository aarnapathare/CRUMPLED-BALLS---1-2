class Paper{
    constructor(x,y){
       var options={
           isStatic:false,
           restitution:0.3,
           friction:0,
           density:1.2
       } 
       this.body = Bodies.circle(x, y, 20, options)
       this.Radius = 20
       World.add(world, this.body)
     this.image = loadImage("paper.png")


    }
    display(){
push();
translate(this.body.position.x, this.body.position.y)
        ellipseMode(RADIUS)
        imageMode(CENTER)
image(this.image, 0,0, this.Radius, this.Radius)
pop();
    }
}


