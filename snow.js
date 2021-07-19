class Snow {
constructor(x,y,r){
var options={
    isStatic:true,
    scale:0.001,
    density:2,
    restitution:0
   
    
}
this.body=Bodies.circle(x,y,r,options)
this.image=loadImage("snow4.webp")


World.add(world,this.body);
}
display()
{
    
 translate(this.body.position.x,this.body.position.y) ;
 imageMode(CENTER);
 image(this.image, 0, 0, this.r);  
}


}
