Crafty.c("Hero",{
	init: function(){

		var elemStyle = Crafty.stage.elem.style;

		this.requires("2D,DOM,Color,Fourway").attr({x: elemStyle.width.replace("px","") / 2 - 7.5, y: elemStyle.height.replace("px","") - 35, w: 10, h: 15})
  			.color('#FFFFFF')
  			.fourway(4)
  			.bind("KeyDown", function(e) {
            	if(e.keyCode === Crafty.keys.SPACE){
                	this.shoot();
            	} 
        	})
        	.bind('EnterFrame', function () {
        		if (this.x < 0) {
            		this.x = 0;
        		}
        		if (this.x > 340) {
            		this.x = 340;
        		}
        		if (this.y > window.innerHeight - 65) {
        			this.y = window.innerHeight - 65;
        		}
        		if (this.y < 0) {
        			this.y = 0;
        		}
        	});
	},
	shoot: function(){
		var bullet = Crafty.e("Bullet");

		bullet.attr({
			x: this._x + this._w/2-1,
			y: this._y + this._h/2-2.5
		})
	}
});