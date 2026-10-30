class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let cloud1 = document.createElement("a-sphere");
    cloud1.setAttribute("position", "0 8 0");
    this.obj.append(cloud1);

    let cloud2 = document.createElement("a-sphere");
    cloud2.setAttribute("position", "0.5 8 1");
    this.obj.append(cloud2);

    let cloud3 = document.createElement("a-sphere");
    cloud3.setAttribute("position", "-0.5 8 1");
    this.obj.append(cloud3);

    this.obj.setAttribute("position", {x:x, y:y, z:z});
    scene.append(this.obj)
  }
}

class House{
  constructor(x,y,z){
    let house = document.createElement("a-entity");

    let base = document.createElement("a-box");
    base.setAttribute("position", "0 0.5 0");
    base.setAttribute("scale", "2 2 2");
    base.setAttribute("color", "tan");
    house.append(base);
  
    let roof = document.createElement("a-cylinder");
    roof.setAttribute("segments-radial", "3");
    roof.setAttribute("rotation", "270 0 0");
    roof.setAttribute("position", "0 2.25 0");
    roof.setAttribute("scale", "1.25 2 1.5");
    roof.setAttribute("color", "black");
    house.append(roof);

    house.setAttribute("position", {x:x, y:y, z:z});
    scene.append(house);
  }
}

