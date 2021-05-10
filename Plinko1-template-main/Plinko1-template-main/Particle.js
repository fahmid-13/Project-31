class Particle{
    constructor(x, y, w, h){
        var options = {
            restriction: 1,
            friction: 0,
            isStatic: true
        }
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        noStroke();
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
}