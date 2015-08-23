Crafty.c("Enemy",{
	init: function(){
		var elemStyle = Crafty.stage.elem.style;

        Crafty.sprite(1629,"graphics/bossShip.png",{"bossShip":[0,0]});

		this.requires("2D,Canvas,bossShip,Solid, Collision")
        .attr({x: elemStyle.width.replace("px","") / 2, y: 2, w: 100*1.5, h: 105*1.5, life:10,
            dX: Crafty.math.randomInt(2, 5),
            dY: Crafty.math.randomInt(2, 5) })
        	.bind('EnterFrame', function () {
        		if (this.y <= 0 || this.y >= Crafty.stage.elem.clientHeight - this.h) {
                    this.dY *= -1;
                    //this.shoot();
                }

        		if (this.x <= 0 || this.x > Crafty.stage.elem.clientWidth - this.w) {
            		this.dX *= -1;
                    //this.shoot();
        		}

                this.x += this.dX;
                this.y += this.dY;
        	})
<<<<<<< HEAD
            .getHit();
=======
            .bind("GameOver",function(){
                this.destroy();
            });
>>>>>>> origin/master
	},
    getHit: function(){ 
        this.onHit('Bullet', function(obj){
            --this.life;
            obj[0].obj.destroy();
            console.log(this.life);
            if (this.life <= 0) {
                this.destroy();
            }
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