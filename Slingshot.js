class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        
        this.sling = Constraint.create(options);//creating a constraint between bodyA and bodyB;
        this.pointB = pointB
        World.add(world, this.sling);//Adding the sling/body to the world;
    }
    
    attach(body){
        this.sling.bodyA = body;
    }//this function i used for attaching two things together;

    fly(){
        this.sling.bodyA = null;//null means nothing or 0;
    }//fly function is used for detatching two things from each other;

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            stroke(48,22,8);//used to add color;
            strokeWeight(5);//used for giving width of the slingshot/line; 
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
        }
    }
    
}