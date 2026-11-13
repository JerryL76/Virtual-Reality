let scene, mech, mechs = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");

  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let y = rnd(5, 25);
    let z = rnd(-20,20);
    let mech = new Mech(x, y, z);
    mechs.push(mech);
  }
 
  loop();
})
function loop(){


  window.requestAnimationFrame( loop );
}
