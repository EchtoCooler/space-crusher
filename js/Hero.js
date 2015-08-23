Crafty.c("Hero",{
	init: function(){
        var elemStyle = Crafty.stage.elem.style;
        var spriteMap = {"fighter":[3,0]};

        Crafty.sprite(343,"graphics/redfighter.png",spriteMap);


        var width = 68.6,
        height = 76.6;

        this.currentDirection = 0;

        this.requires("2D,Canvas,fighter,Collision,Fourway,SpriteAnimation")
        .attr(
            {x: elemStyle.width.replace("px","") / 2 - width/2,
             y: elemStyle.height.replace("px","") - height,
             w: width, h: height})
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
            if (this.x + this.w > 340) {
                this.x = 340 - this.w;
            }
            if (this.y + this.h + 20> Crafty.stage.elem.clientHeight){
                this.y = Crafty.stage.elem.clientHeight - this.h - 20;
            }
            if (this.y < 0) {
                this.y = 0;
            }
        })
        .bind('NewDirection', function(e){
            var xDir = e.x;
            if (xDir === 0){
                if (this.currentDirection < 0){
                    this.animate("leftToCenter",1);
                } else if (this.currentDirection > 0){
                    this.animate("rightToCenter",1);
                }
            } else if (xDir < 0){
                if (this.currentDirection === 0){
                    this.animate("centerToLeft",1);
                } else if (this.currentDirection > 0){
                    this.animate("rightToLeft",1);
                }
            } else {
                if (this.currentDirection === 0){
                    this.animate("centerToRight",1);
                } else if (this.currentDirection < 0){
                    this.animate("leftToRight",1);
                }
            }
            this.currentDirection = xDir;
        })
        .bind("GameOver",function(){
            this.destroy();
        })
        .onHit("Bullet",function(){
            Crafty.trigger("GameOver");
        })
        .onHit("Enemy",function(){
            Crafty.trigger("GameOver");
        });

        this.reel("centerToRight",250,3,0,4);
        this.reel("centerToLeft",250,3,0,-4);
        this.reel("rightToCenter", 250,8,0,-6);
        this.reel("leftToCenter", 250,0,0,4);
        this.reel("leftToRight",500,0,0,8);
        this.reel("rightToLeft",500,8,0,-8);
	
	},
	shoot: function(){
		var bullet = Crafty.e("Bullet");

		bullet.attr({
			x: this._x + this._w/2-1,
			y: this._y - 15
		})
	}
});