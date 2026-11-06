class UFO {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = -(Math.random() * 0.10 + 0.05); 
    this.obj = document.createElement("a-entity");

    let saucer = document.createElement("a-cylinder");
    saucer.setAttribute("color", "silver");
    saucer.setAttribute("position", "0 0 0");
    saucer.setAttribute("height", "0.2");
    saucer.setAttribute("radius", "1.5");
    this.obj.append(saucer);


    let dome = document.createElement("a-sphere");
    dome.setAttribute("color", "cyan");
    dome.setAttribute("position", "0 0.2 0");
    dome.setAttribute("radius", "0.6");
    this.obj.append(dome);

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append(this.obj);
  }

  invade(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}
