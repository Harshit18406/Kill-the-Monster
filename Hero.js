class Hero{

constructor(x,y,r){

var options={
density:1,
frictionAir:1
}
this.x=x;
this.y=y;
this.r=r;
this.image = loadImage("images/Superhero-01.png");
this.body=Bodies.circle(x,y,r/2,options);

World.add(world,this.body);
}

display(){

push()
translate(this.body.position.x,this.body.position.y);
imageMode(CENTER);
ellipseMode(RADIUS);
image(this.image, 0,0,this.r*2, this.r*2)
pop()


}





















}