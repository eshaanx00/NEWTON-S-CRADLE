class bob {
    constructor(x,y){
        var option = {
            isStatic:false,
            density:0.8,
            friction:0,
            restitution:1
        }
        this.body=Bodies.circle(x,y,30,option);
        this.r=30
        World.add(world,this.body)
    }
display(){
    var pos = this.body.position;
   push();
   translate(pos.x,pos.y)
   //rotate(this.body.angle)
    fill("pink")
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
}
}