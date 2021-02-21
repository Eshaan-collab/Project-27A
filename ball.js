class Ball {
    constructor(x,y) {
      
      this.body = Bodies.circle(x,y,30,{restitution:1});
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y)
      ellipseMode(RADIUS);
      fill("pink");
      ellipse(0,0, 30,30);
      pop();
    }
  };
