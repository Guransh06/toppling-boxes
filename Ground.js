class Ground{
constructor(x,y,width,height){
    var groundoptions={
isStatic:true


    }
this.body=Bodies.rectangle(x,y,width,height,groundoptions);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
}

display(){
rectMode(CENTER);
fill("black");
rect(this.body.position.x,this.body.position.y,this.width,this.height);

}




}