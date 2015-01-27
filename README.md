# Drone-Leap-JS
Control the Parrot AR Drone with Leap Motion and Leap JS

C. Papathanasiou 2015


<b>Dependancies</b>
Depends on the following node.js libraries:
<br>
https://github.com/felixge/node-ar-drone
<br>
https://github.com/leapmotion/leapjs

-----------------

Whilst I am capturing forwards, backwards, left, right, up, down motion from the leapJS, I have not implemented 
the relevant calls to the arDrone yet as it's winter outside and no space to fly the copter indoors :-)

Replacing the console.log printouts with the relevant node copter .js actions would achieve this and is left as an exercise
to the interested reader. 

To get you starting, I have implemented <i>client.animateLeds('doubleMissile',5,2)</i> on a up motion 
