class Stone{

    constructor(x,y,r)
    {
    var options = 
    {   isStatic: true,
        restitution: 0.7,
        friction: 0.5,
        density: 1.2
    
    }

    this.image = loadImage("stone1.png");
    this.body = Bodies.circle(x, y, r, options);
    this.body.r = r;
    this.x = x;
    this.y = y;
    
    World.add(world, this.body);
    }

    
    display()
    {
       
        fill("blue");
       // this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y);
    }
}