const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');

const player1 = {
  x:50, 
  y:50, 
  speed: 5,
  width: 15,
  height: 100
};
const player2 = {
  x:550, 
  y:50, 
  speed: 5,
  width: 15,
  height: 100
};
const keyz1 = {
  ArrowRight:false,
 ArrowLeft:false,
  ArrowUp:false,
  ArrowDown:false};


const keyz2 = {
    KeyA:false,
  KeyS:false,
    KeyW:false,
    KeyX:false};

draw();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

function keyDown(event){
  if(event.code in keyz1){
    keyz1[event.code] = true;
  }

  if(event.code in keyz2){
    keyz2[event.code] = true;
  }
   
   
   //console.log(event.code);
   move();
}
function keyUp(event){
  if(event.code in keyz1){
    keyz1[event.code] = false;
  }

  if(event.code in keyz2){
    keyz2[event.code] = false;
  }
  //keyz1[event.code] = false;
  //keyz2[event.code] = false;
  //console.log(keyz);
  
}

function move(){

  if(keyz1.ArrowRight){
    player1.x +=player1.speed;
  }else if(keyz1.ArrowLeft){
    player1.x -= player1.speed;
  };

  if(keyz1.ArrowUp){
    player1.y -= player1.speed;
  }else if(keyz1.ArrowDown){
     player1.y += player1.speed;
     
  };

  if(keyz2.KeyS){
    player2.x +=player2.speed;
  }else if(keyz2.KeyA){
    player2.x -= player2.speed;
  };

  if(keyz2.KeyW){
    player2.y -= player2.speed;
  }else if(keyz2.KeyX){
     player2.y += player2.speed;
     
  };
  draw();
}




function draw(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  
  ctx.fillStyle = 'blue';
  ctx.fillRect(player1.x,player1.y,player1.width,player1.height);

  ctx.fillStyle = 'red';
  ctx.fillRect(player2.x,player2.y,player2.width,player2.height);

  let output = `Player 1 Pos X ${player1.x} Y ${player1.y} Player 2 Pos X ${player2.x} Y ${player2.y}`;


  ctx.font = '12px serif';
  ctx.textAlign ='center';
  ctx.fillStyle = 'red';
  ctx.fillText(output, 300,30);

  //triangle
  /*ctx.beginPath();
  ctx.fillStyle='blue';
  ctx.moveTo(50,200);
  ctx.lineTo(150,250);
  ctx.lineTo(150,150);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = 'green';
  ctx.arc(150,300,50,0,2*Math.PI);
  ctx.strokeStyle = 'yellow';
  ctx.fill();
  ctx.stroke();*/

//ctx.rect();

//ctx.fill();

}