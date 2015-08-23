Crafty.c("Enemy",{
	init: function(){

		var elemStyle = Crafty.stage.elem.style;

		this.requires("2D,DOM,Color,Collision").attr({x: elemStyle.width.replace("px","") / 2 - 7.5, y: elemStyle.height.replace("px","") - 35, w: 100, h: 105,
            dX: Crafty.math.randomInt(2, 5),
            dY: Crafty.math.randomInt(2, 5) })
  			.color('rgb(255,0,0)')
        	.bind('EnterFrame', function () {
        		if (this.y <= 0 || this.y >= window.innerHeight - 65) {
                    this.dY *= -1;
                    this.shoot();
                }

        		if (this.x <= 0 || this.x > 250) {
            		this.dX *= -1;
                    this.shoot();
        		}

                this.x += this.dX;
                this.y += this.dY;
        	});
	},
	shoot: function(){
		var bullet = Crafty.e("Bullet");

		bullet.attr({
			x: this._x + this._w/2-1,
			y: this._y + this._h/2-2.5,
            yspeed: -10
		})
	}
});