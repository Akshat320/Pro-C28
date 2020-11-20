class Mango{

    constructor (x,y,r)
    {
        
     var options={
        isStatic: true,
        restitution: 0,
        friction: 1
    }

    
    this.image = loadImage("mango1.png");
    this.body = Bodies.circle(x, y, r, options);
    this.body.r = r;
    this.x = x;
    this.y = y;
    
    
    World.add(world, this.body);
    }
    
    display()
    {
       push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill("white");
        image(this.image,0,0, this.r*2, this.r*2);
        pop();
    }
}