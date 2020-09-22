class Dustbin{
    constructor (x, y){
        var options = {
            isStatic:true
            
        }
        this.x = x
        this.y = y
        this.width = 200
        this.height = 100
        this.thickness = 20
        this.bottomBody = Bodies.rectangle(this.x, this.y, this.width, this.thickness, options)
        this.leftBody = Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.thickness, this.height, options)
        this.rightBody = Bodies.rectangle(this.x+this.width/2, this.y - this.width/2+50, this.thickness, this.height, options)

       
        
        World.add(world, this.bottomBody)
        World.add(world, this.rightBody)
        World.add(world, this.leftBody)



        this.image = loadImage("dustbin.png")

    
        
    }
    display(){
        

push();
translate(this.bottomBody.position.x, this.bottomBody.position.y)
angleMode(RADIANS)
fill("red")
rectMode(CENTER)
        //rect(0,0, this.width, this.thickness)
        pop();
        push();
        translate(this.leftBody.position.x, this.leftBody.position.y)
        angleMode(RADIANS)
        rotate(this.angle)
        rectMode(CENTER)
               // rect(0,0, this.thickness, this.height)
                pop();
                push();
translate(this.rightBody.position.x, this.rightBody.position.y)
angleMode(RADIANS)
rotate(this.angle)
imageMode(CENTER)
        image(this.image,0, 0, this.width, this.height)
        pop();
        
                
    }
    }