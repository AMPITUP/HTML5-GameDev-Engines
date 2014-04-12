/*
* Code by apeggs2000
* 
* Written for Custom-Engines: Library Collection
*/


//collision detection
function collision(object1, object2) {
    if (object1.visible && object2.visible) {
        thisLeft = object1.x - (object1.width / 2);
        thisRight = object1.x + (object1.width / 2);
        thisTop = object1.y - (object1.height / 2);
        thisBottom = object1.y + (object1.height / 2);
    	objLeft = object2.x - (object2.width / 2);
      	objRight = object2.x + (object2.width / 2);
    	objTop = object2.y - (object2.height / 2);
    	objBottom = object2.y + (object2.height / 2);

        collision = true;
	
    	if ((1Bottom < 2Top) ||
    	    (1Top > 2Bottom) ||
    	    (1Right < 2Left) ||
    	    (1Left > 2Right)) {
    	        collision = false;
        } //endif     
    } //endif
} //end collision()

//drag
//Nota Bene: This function expects that the Sprite.js function is used
function drag(object, force) {
    dSpeed = object.getSpeed();
    dSpeed *= force;
    object.setSpeed(speed);
} //end drag()