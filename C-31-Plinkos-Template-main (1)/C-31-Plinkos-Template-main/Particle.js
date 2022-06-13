class Particles {
    constructor(x, y) {
        var options = {
            friction: 0,
            restitution:0.5
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
    }
    display() {
        var {x, y} = this.body.velocity;
        var speedLimit = 10;
        if(keyIsDown(UP_ARROW) && y > -speedLimit){
            Body.setVelocity(this.body, {x:x, y: -10});
        }
        if(keyIsDown(RIGHT_ARROW) && x < speedLimit){
            Body.setVelocity(this.body, {x: x + 1, y});
        }
        if(keyIsDown(DOWN_ARROW) && y < speedLimit){
            Body.setVelocity(this.body, {x, y: y + 1});
        }
        if(keyIsDown(LEFT_ARROW) && x > -speedLimit){
            Body.setVelocity(this.body, {x: x - 1, y});
        }  
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};