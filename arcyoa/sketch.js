/* 
A-Frame for p5, courtesy of Criag Kapp:
https://cs.nyu.edu/~kapp/aframep5/index.php
https://editor.p5js.org/profcraigkapp/sketches/hRsQE1T6i - p5 Live Media Integration Example
https://craignyu.github.io/aframep5/examples_live/04_basicMouseMovement/
*/
let p5lm;
let myVideo;
let world;
let floor, rwall, lwall;
// let roomselector = ;
let middleSelection = true;
let rightSelection = false;
let leftSelection = false;


let allVideos = {};
let allPlayers = {};

function setup() {
    noCanvas();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	// change the background color of the world
	// world.setBackground(0,0,0);
	let sky = new Sky({
		asset: 'sky1'
	 });
	 world.add(sky);
	// decide if you want to allow the user to fly or be stuck on the ground
	// if you disallow flying the user can only move in the X & Z axes
	// the default is to disallow flying - world.setFlying(false)
	world.setFlying(false);


    rwall = new Plane({
        x:20, 
        y:10, 
        z:0, 
        width: 100, 
        height: 100, 
       asset: 'rwall',
        rotationY:-90
     });
     lwall = new Plane({
      x:-20, 
      y:10, 
      z:0, 
      width: 100, 
      height: 100, 
     asset: 'lwall',
      rotationY:90
   });
      // create a plane to serve as our "ground"
      var grnd = new Plane({
                          x:0, y:0, z:0,
                          width:100, height:100,
                          asset: 'stone',
                          repeatX: 100,
                          repeatY: 100,
                          rotationX:-90, metalness:0.25
                         });
  
      // add the plane to our world
     world.add(grnd);
     world.add(rwall);
     world.add(lwall);
  // Done with A-Frame setup

  mush = new OBJ({
    asset: 'mush_obj',
    mtl: 'mush_mtl',
    x: 0,
    y: 0,
    z: 1,
	clickFunction: function(mush) {
		// update color
		console.log("clicked mush")
		theBox.setColor( random(255), random(255), random(255) );

		// or hide it!
		//theBox.hide();

		// move the user toward this box over a 2 second period
		// (time is expressed in milliseconds)
		world.slideToObject( mush, 2000 );
	},
    scaleX:0.5,
    scaleY:0.5,
    scaleZ:0.5,
  });
  world.add(mush);

// create a "container" object
	// this is an object that has no geometry (i.e. it is totally invisible)
	// it can be used to hold other objects and move them around as a group
	RoomHold = new Container3D({x:0, y:1, z:-5});

	// add the container to the world
	world.add(RoomHold);

	// now we can add objects into the container - note that when we do so we are using
	// a different coordinate system.  0,0,0 is not the origin of our world now - it is the
	// center of the container object
	var lRoom = new Box({
						x:-5, y:1, z:0,
						asset: 'lwall',
						red: random(255), green:random(255), blue:random(255),
						scaleX:5,
						scaleY:5,
						scaleZ:5,
						clickFunction: function(lRoom) {
									// console.log("clicked left room")
							// 		lRoom.setColor( random(255), random(255), random(255) );
							// var data3d = {
							// 	// userLocation:left;
							//   }
							//   socket.emit("3dselect", data3d);
							  roomstate.setText("Left Room");
							// 		//lRoom.hide();
							
									world.slideToObject( lRoom, 2000 );
								},
	});

	// add the box to the container
	RoomHold.addChild(lRoom);

	// create a second box
	var rRoom = new Box({
						x:5, y:1, z:0,
						asset: 'rwall',
						red: random(255), green:random(255), blue:random(255),
						scaleX:5,
						scaleY:5,
						scaleZ:5,
						clickFunction: function(rRoom) {
									// console.log("clicked right room")
							// 		rRoom.setColor( random(255), random(255), random(255) );
									roomstate.setText("Right Room")
							// 		// or hide it!
							// 		//rRoom.hide();
									world.slideToObject( rRoom, 2000 );
								},
	});
	RoomHold.addChild(rRoom);

	var roomstate = new Text({
		text: 'No Room',
		red: 228, green: 228, blue: 228,
		side: 'double',
		x: 0, y: 2.5, z: 0,
		scaleX: 8, scaleY: 8, scaleZ: 8
	 });
	RoomHold.addChild(roomstate);

	var userselect = new Text({
		text: 'no room selected',
		// text: 'Users have selected + ${}',
		red: 228, green: 228, blue: 228,
		side: 'double',
		x: 0, y: 2, z: 0,
		scaleX: 8, scaleY: 8, scaleZ: 8
	 });
	RoomHold.addChild(userselect);










//////////////////////////////////////////////////////////////////
  // p5LiveMedia Setup
  // Use constraints to request audio from createCapture
  let constraints = {
    audio: false,
    // audio: true,
    video: {width: 320, height: 240}
  };
  
  // Need to use the callback to get at the audio/video stream
   myVideo = createCapture(constraints, function(stream) {
    
    // Give the canvas stream to SimpleSimplePeer as a "CAPTURE" stream
    p5lm = new p5LiveMedia(this, "CAPTURE", stream, "50 Days of Video Chat - Day 17");
     p5lm.on('stream', gotStream); 
     p5lm.on('data', gotData);
  });
  
  myVideo.elt.id = "me";
  console.log(myVideo.elt.id);
  myVideo.elt.muted = true;
  myVideo.hide();  
  allVideos['me'] = myVideo;
  
  myLastPosition = {};
  myLastPosition.x = random(0, 5);
  myLastPosition.y = 1.5;
  myLastPosition.z = random(0, 5);
  world.setUserPosition(myLastPosition.x, myLastPosition.y, myLastPosition.z);  
  
  // create our avatar
  allPlayers['me'] = new Box({
      width: 1,
      height: 3,
      depth: 1,
      red: 100,
      green: 100,
      blue: 100,
      opacity: 0,
      x: myLastPosition.x,
      y: myLastPosition.y,
      z: myLastPosition.z,
      asset: myVideo.elt.id
  });

  // add us to the world
  world.add(allPlayers['me']); 
  
}

function draw() {

	// note that you can also only trigger movement when the mouse is down or the user
	// is touching the screen
	if (mouseIsPressed) {
		world.moveUserForward(0.05);
      // wrap around!
  }
  if(mouseIsPressed || keyIsPressed){
      // step 1: get the user's position
      // this is an object with three properties (x, y and z)
      var pos = world.getUserPosition();

      // now evaluate
      if (pos.x > 50) {
          world.setUserPosition(-50, pos.y, pos.z);
      }
      else if (pos.x < -50) {
          world.setUserPosition(50, pos.y, pos.z);
      }
      if (pos.z > 50) {
          world.setUserPosition(pos.x, pos.y, -50);
      }
      else if (pos.z < -50) {
          world.setUserPosition(pos.x, pos.y, 50);
      }  

      let dataToSend = {
          x: pos.x,
          y: pos.y,
          z: pos.z,
      };

      p5lm.send(JSON.stringify(dataToSend));
      console.log(dataToSend);
	}
}


function gotData(data, id) {
  console.log(data, id);
  data = JSON.parse(data);
  
  if (allPlayers[id]) {
          console.log("updating position");

      // update the player's position
      allPlayers[id].setPosition(data.x, data.y, data.z);
  }
}

function gotStream(stream, id) {
  allVideos[id] = stream;
  allVideos[id].hide();
  
  // create a new avatar for our player
  allPlayers[id] = new Box({
      width: 1,
      height: 3,
      depth: 1,
      red: 100,
      green: 100,
      blue: 100,
      x: 0,
      y: 0,
      z: 0,
      asset: id
  });
  // add the player to the world
  world.add(allPlayers[id]);  
}

// called when a player disconnects
function gotDisconnect(id) {
    // player has left - remove them from the world
    if (allPlayers[id]) {
        world.remove(allPlayers[id]);
        delete allPlayers[id];
    }
}

