
var arDrone = require('ar-drone');
var client  = arDrone.createClient();


var Leap = require('leapjs')
  , controller = new Leap.Controller({enableGestures:true})
  , direction = require('curtsy')


controller.on('frame', function(frame) {
  if (frame.gestures.length) {
    var gesture = frame.gestures[0];
    if (gesture.type == 'swipe') {
      if (direction(gesture).type == "up") {
		
	client.animateLeds('doubleMissile',5,2)
		console.log("UP!!!!");
	}
	if (direction(gesture).type == "right") { 
		console.log("RIGHT!!!");	
	}
	
	if (direction(gesture).type == "down") { 
		console.log("down")
	}

	if (direction(gesture).type == "forward") { 

		console.log("forawrd")
	}

	if (direction(gesture).type == "back") {
		console.log("back")
	
	}
	if (direction(gesture).type == "left") { 

		console.log("left")
	}

	}
	}
	});
// init
controller.on('ready', function() { console.log('ready'); });
controller.connect();
console.log('\nWaiting for device to connect...');
