class Base{
    constructor(x,y,width,height,angle){
     var opt={
       restitution:1.0,
       friction:1
   }
     this.body=Bodies.rectangle(x,y,width,height,opt);
     this.width=width;
     this.height=height;
     this.image=loadImage("sprites/base.png");
     World.add(world,this.body);
       }
       display(){
         var pos=this.body.position;
         var angles=this.body.angle;
         push();
         translate(pos.x,pos.y);
         rotate(angles);
         imageMode(CENTER);
         image(this.image,0,0,this.width,this.height);
       pop();
       }
   }
   