class Rocket {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.02;
    this.obj = document.createElement("a-entity");

    let nose = document.createElement("a-cone");
    nose.setAttribute("color","red");
    nose.setAttribute("position","0 1.5 0");
    nose.setAttribute("height","1");
    nose.setAttribute("radius-top","0");
    nose.setAttribute("radius-bottom","0.5");
    this.obj.append(nose);

    let body = document.createElement("a-cylinder");
    body.setAttribute("color","white");
    body.setAttribute("position","0 0 0");
    body.setAttribute("height","2");
    body.setAttribute("radius","0.5");
    this.obj.append(body);


    let windowGlass = document.createElement("a-sphere");
    windowGlass.setAttribute("color","skyblue");
    windowGlass.setAttribute("position","0 0.3 0.42");
    windowGlass.setAttribute("radius","0.2");
    this.obj.append(windowGlass);

    let leftFin = document.createElement("a-box");
    leftFin.setAttribute("color","red");
    leftFin.setAttribute("position","-0.6 -0.7 0");
    leftFin.setAttribute("rotation","0 0 25");
    leftFin.setAttribute("width","0.4");
    leftFin.setAttribute("height","0.8");
    leftFin.setAttribute("depth","0.1");
    this.obj.append(leftFin);

    let rightFin = document.createElement("a-box");
    rightFin.setAttribute("color","red");
    rightFin.setAttribute("position","0.6 -0.7 0");
    rightFin.setAttribute("rotation","0 0 -25");
    rightFin.setAttribute("width","0.4");
    rightFin.setAttribute("height","0.8");
    rightFin.setAttribute("depth","0.1");
    this.obj.append(rightFin);

    let nozzle = document.createElement("a-cylinder");
    nozzle.setAttribute("color","gray");
    nozzle.setAttribute("position","0 -1.15 0");
    nozzle.setAttribute("height","0.3");
    nozzle.setAttribute("radius","0.3");
    this.obj.append(nozzle);

    let flame = document.createElement("a-cone");
    flame.setAttribute("color","orange");
    flame.setAttribute("position","0 -2 0");
    flame.setAttribute("height","1.5");
    flame.setAttribute("radius-top","0");
    flame.setAttribute("radius-bottom","0.28");
    flame.setAttribute("rotation","180 0 0");
    this.obj.append(Flame);

    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);
  }

  launch(){
    this.y += this.dy
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}