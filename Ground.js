class Ground {
    constructor() {
      var options = {
          isStatic: true//here we are givin it the property of not falling and staying static/still;
      }
      this.ground = Bodies.rectangle(450,390,920,20,options);
      this.width = 920;
      this.height = 20;
      World.add(world, this.ground);//here it is written this.ground instead of this.body as the name of the body that has been created is given this.ground;

    }
    display(){
    
      rectMode(CENTER);
      fill("brown");
      rect(this.ground.position.x, this.ground.position.y, 920, 20);
    }
  }
