let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets = [], ufos = [], snowflakes = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  for(let i = 0; i < 100; i++){
    let x = rnd(-50,50);
    let y = rnd(5, 25);
    let z = rnd(-50,50);
    let rocket = new Rocket(x, y, z);
    rockets.push(rocket);
  }

  for(let i = 0; i < 100; i++){
    let x = rnd(-50,50);
    let y = rnd(50, 75);
    let z = rnd(-50,50);
    let ufo = new UFO(x, y, z);
    ufos.push(ufo);
  }

  for(let i = 0; i < 100; i++){
    let x = rnd(-50,50);
    let y = rnd(50, 75);
    let z = rnd(-50,50);
    let snowflake = new Snowflake(x, y, z);
    snowflakes.push(snowflake);
  }


  loop();
})

function loop(){
  for(let rocket of rockets){
    rocket.launch();
  }

  for(let ufo of ufos){
    ufo.invade();
  }

  for(let snowflake of snowflakes){
    snowflake.fall();
  }
  
  window.requestAnimationFrame( loop );
}
