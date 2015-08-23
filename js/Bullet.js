Crafty.c("Bullet",{
	init: function(){
		this.requires("2D,DOM,Color,Collision").attr({			
			yspeed: 10,
			w: 2,
			h: 5
		}).color('#FFFFFF')
		.bind("EnterFrame", function(){
			this.y -= this.yspeed;
		})
		.onHit('Enemy', function() {
			//this.destroy();
		});
	}
});