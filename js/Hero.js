Crafty.c("Hero",{
	init: function(){

		var elemStyle = Crafty.stage.elem.style;

		this.requires("2D,DOM,Color,Fourway").attr({x: elemStyle.width.replace("px","") / 2 - 7.5, y: elemStyle.height.replace("px","") - 35, w: 10, h: 15})
  			.color('#FFFFFF')
  			.fourway(4);
	}
});