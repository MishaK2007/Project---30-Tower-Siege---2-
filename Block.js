class Block {
    constructor(x, y, width, height){
      var options = {
        restitution: 0.4,
        friction: 0.3
      }// var options is for changing the behavior of a certain class(object);
      
      this.body = Bodies.rectangle(x,y,width,height,options);//creating the body;
      this.width = width;
      this.height = height;
      World.add(world,this.body);

      this.Visiblity = 255;// 255 is the number that shows something in full visiblity;

    }
    display(){
      var angle = this.body.angle;
      var pos = this.body.position;
      var speed = this.body.speed;

      if(speed < 3){
        push();
        translate(pos.x,pos.y);//translate is for giving something a property to fall like it is real; fall with all physics rules applied;  
        rotate(angle);//It is just like translate; both of them are used together;
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
      }
      else{
        World.remove(world, this.body);//to remove the body from the world;
        push();
        this.Visiblity = this.Visiblity - 5;//to reduce to visiblity of something slowly by 5;
        tint(255, this.Visiblity);//tint is a function needed to reduce the visiblity;
        pop();
      }
     
      }
    }
  
  