class Rocket{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.01;
    this.obj = document.createElement("a-entity");

    let rockettop = document.createElement("a-cone");
    rockettop.setAttribute("color","red");
    rockettop.setAttribute("position","0 0 -2");
    rockettop.setAttribute("height","1");
    rockettop.setAttribute("radius-top","0");
    rockettop.setAttribute("radius-bottom","0.5");
    this.obj.append( rockettop );
  
    let rocketmiddle = document.createElement("a-cylinder");
    rocketmiddle.setAttribute("color","gray");
    rocketmiddle.setAttribute("position","0 -1.5 -2");
    rocketmiddle.setAttribute("height","2");
    rocketmiddle.setAttribute("radius", "0.5");
    this.obj.append( rocketmiddle );
  
    let rocketbottom = document.createElement("a-cone");
    rocketbottom.setAttribute("color","orange");
    rocketbottom.setAttribute("position","0 -3.5 -2");
    rocketbottom.setAttribute("height","2");
    rocketbottom.setAttribute("radius-top","0");
    rocketbottom.setAttribute("radius-bottom","0.25");
    rocketbottom.setAttribute("rotation","-180 0 0");
    this.obj.append( rocketbottom );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }

  launch(){
    this.y += this.dy
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}



