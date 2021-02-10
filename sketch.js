  const Engine = Matter.Engine;
  const World= Matter.World;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;

  var drops=[]
  var maxDrops=100;
 
  var umbrella1

 
  function preload(){
    
  }

  function setup(){
      var canvas=createCanvas(500,700)
    engine = Engine.create();
    world = engine.world;

  
    
    umbrella1=new umbrella(200,500,60,60)
  
    if(frameCount%100===0){
      for(var i=0; i<maxDrops;i++){
        drops.push(new drop(random(0,400),random(0,400),3,3));
       }
     }
     Engine.run(engine)
  }

  function draw(){
    background("green")
    Engine.update(engine)
   
    
    umbrella1.display();

    for(var i=0 ; i<maxDrops ; i++){
    drops[i].display();
    drops[i].update()
    }
drawSprites();
  }   

