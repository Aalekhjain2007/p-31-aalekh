class umbrella{
    
        constructor(x, y, width, height) {
          var options = {
              isStatic:true,
              'restitution':0.8,
              'friction':0.3,
              'density':1.0
            
          }
          this.body = Bodies.rectangle(x, y, width, height, options);
          this.width = width;
          this.height = height;
          this.image=loadImage("walking_1.png","walking_2.png")
          
          World.add(world, this.body);
        }
    
    
        update(){
    
            if(this.body.position.y>height)
            {
                Matter.body.setPosition(this.body,{x:random(0,500),y:random(0,650)})
            }
    
        }
        display(){
          var pos =this.body.position;
          var angle = this.body.angle;
          push();
          translate(0,0);
          rotate(angle);
          imageMode(CENTER)
          image(this.image,pos.x,pos.y+60,300,300)
          pop();
        
      };
      



}