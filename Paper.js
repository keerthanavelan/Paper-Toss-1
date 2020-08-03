class Paper { 
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.width = 20;
        this.body = Bodies.circle(x,y,this.width,options);
        World.add(world, this.body);
    }
    keyPress() {
        if (keyCode == UP_ARROW){
            Matter.Body.applyForce(this.body,x,{x:85,y:-85});
        }
    }    
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        circleMode(CENTER);
        pop();
    }
}