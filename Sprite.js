function Sprite(canvas, file, width, height, collisions) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.file = file;
    this.width = width;
    this.height = height;
    this.collisions = collisions;
    this.collision = false;
    this.shown = true;
    this.x = 0;
    this.y = 0;
    this.dx = 0;
    this.dy = 0;
    
    //debugging
    if (height === isNaN) {
        console.log("Failure! Height was not set to a number. You wrote " + height);
    } //endif
    if (width === isNaN) {
        console.log("Failure! Width was not set to  a number. You wrote " + width);
    } //endif
    if (collisions != true || collisions != false) {
        console.log("Failure! Collisions must be a boolen. You wrote " + collisions);
    } //endif
    
    this.setSize = function(newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight
    } //end setSize()
    
    this.setPosition = function(newX, newY) {
        this.x = newX;
        this.y = newY;
    } //end setPosition()
    
    this.setSpeed = function(newDX, newDY) {
        this.dx = newDX;
        this.dy = newDY;
    } //end setSpeed()
    
    this.draw = function(){
    ctx = this.context;

    ctx.save();
    
    ctx.translate(this.x, this.y);
    ctx.rotate(this.imgAngle);
	ctx.drawImage(this.image, 
    0 - (this.width / 2), 
    0 - (this.height / 2),
    this.width, this.height);
    ctx.restore();
     
  } // end draw()
    
    this.update = function() {
        this.x += this.dx;
        this.y += this.dy;
        this.checkBounds();
        if (this.visible){
            this.draw();
        } // end if
    } // end update
    
    this.collides(object) {
        if (this.visible && object.visible) {
            thisLeft = this.x - (this.width / 2);
	        thisRight = this.x + (this.width / 2);
	        thisTop = this.y - (this.height / 2);
	        thisBottom = this.y + (this.height / 2);
        	objLeft = sprite.x - (object.width / 2);
          	objRight = sprite.x + (object.width / 2);
        	objTop = sprite.y - (object.height / 2);
        	objBottom = sprite.y + (object.height / 2);
    
	        collision = true;
	
        	if ((thisBottom < objTop) ||
        	    (thisTop > objBottom) ||
        	    (thisRight < objLeft) ||
        	    (thisLeft > objRight)) {
        	        collision = false;
	        } //endif     
        }
    }
    
    
} //end Sprite()
