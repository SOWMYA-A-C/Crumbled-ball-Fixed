class Paper{
    constructor(x,y){
        var option={
            'isStatic':false,
            'restitution':0.1,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,10,option)
        this.radius = 10;
        this.width = 20 ;
        this.height = 20;
        this.image = loadImage("paper.png")
        World.add(world, this.body);
        

    }
    display(){
        push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(this.body.angle);
        imageMode(CENTER);
        //image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
        fill("red")
      //  ellipse(this.body.position.x, this.body.position.y, this.width,this.height)
        image(this.image,this.body.position.x, this.body.position.y, this.width*3, this.height*3);
        pop();
      }
   
}