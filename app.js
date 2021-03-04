const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');
let speed = 5;

const player1 = {
  x:50, 
  y:50, 
  speed: 5,
  width: 55,
  height: 400
};
const player2 = {
  x:550, 
  y:50, 
  speed: 5,
  width: 55,
  height: 400
};

const ball = {
  x:canvas.width/2,
  y:canvas.height/2,
  width:10,
  height:10,
  xs:speed,
  ys:-speed
}

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

requestAnimationFrame(draw);

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

  ball.x += ball.xs;
  ball.y += ball.ys;

  if((ball.x < 0 || ball.x > canvas.width)){
    ball.xs *= -1;
  }
  if((ball.y < 0 || ball.y > canvas.height)){
     ball.ys *= -1;
  }

  if(checkCol(ball, player1)){
    ball.xs *= -1;
    let temp = ((player1.y + player1.height) / 2);
    let temp1 = ((ball.y + ball.height)/2);

    if(temp<temp1){
      ball.ys = speed;
    }else{
      ball.ys = -speed;
    }
  

    
  }

  if(checkCol(ball, player2)){
    ball.xs *= -1;
    let temp = ((player2.y + player2.height) / 2);
    let temp1 = ((ball.y + ball.height)/2);

    if(temp<temp1){
      ball.ys = speed;
    }else{
      ball.ys = -speed;
    }
  
  }
 
}


function checkCol(ob1, ob2){
    //console.log(ob1.x);
    //console.log(ob2.x+ob2.width);
   /* if(ob1.x < ob2.x+ob2.width && ob1.x + ob1.width > ob2.x){
      console.log('X hit');
    }

    if(ob1.y < ob2.y+ob2.height && ob1.y + ob1.height > ob2.y){
      console.log('Y hit');
    }*/
    let val = ob1.x < ob2.x+ob2.width && ob1.x + ob1.width > ob2.x && ob1.y < ob2.y+ob2.height && ob1.y + ob1.height > ob2.y ;

    if(val){
      console.log(val);
    }

    return val;
}

function draw(){
  ctx.clearRect(0,0,canvas.width, canvas.height);

  move();

  checkCol(player1,player2);
  
  ctx.fillStyle = 'blue';
  ctx.fillRect(player1.x,player1.y,player1.width,player1.height);

  ctx.fillStyle = 'red';
  ctx.fillRect(player2.x,player2.y,player2.width,player2.height);

  ctx.fillStyle = 'white';
  ctx.fillRect(ball.x, ball.y,ball.width,ball.height);

  let output = `Player 1 Pos X ${player1.x} Y ${player1.y} Player 2 Pos X ${player2.x} Y ${player2.y}`;


  ctx.font = '12px serif';
  ctx.textAlign ='center';
  ctx.fillStyle = 'red';
  ctx.fillText(output, 300,30);
  requestAnimationFrame(draw);

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