/////////////////////// base connection
var socket = io.connect();
socket.on('connect', function(){
  console.log("Connected");
});

socket.on('blink', function(backgroundreset){
  background(0);
  setTimeout(function() {
    background(255);
    //what it is doing
  }, 50);
  //wait 50 miliseconds
});
///////////////////////////////
//there can be a conductor for the possible performative possiblities 
//you can make it so certain users can do it and not all the users


/////////////////////
let x = 0;
let y = 0;
let px = 0;
let py = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
  }
  
  function draw() {
    // ellipse(x,y, 10,10);
    line(px, py, x,y);
    strokeWeight (3);
    
  }

  function mouseMoved(){
    px = x;
    py = y;
    x = mouseX;
    y = mouseY;

    //send as an object to the server 
    let dataToSend = {x: x, y:y};
    //these are the same as the above code but one is compresed into JSON
    // let dataToSend = new Object();
    // dataToSend.x = x;
    // dataToSend.y = y;
    
    socket.emit('mouse');

    socket.on('mouse', function(mouseData){
        x = mouseData.x;
        y = mouseData.y;
    });
  }

  function mousePressed(){

    socket.emit('blink', {});
    //no data cause it is more the event that is desires

  }