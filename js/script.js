( function( $ ) {
$( document ).ready(function() {
$('#cssmenu').prepend('<div id="menu-button">Menu</div>');
	$('#cssmenu #menu-button').on('click', function(){
		var menu = $(this).next('ul');
		if (menu.hasClass('open')) {
			menu.removeClass('open');
		}
		else {
			menu.addClass('open');
		}
	});

	const draw_flower = function(ctx) {
		ctx.fillStyle = 'rgb(40,30,60)';
		ctx.beginPath();
		ctx.arc(100,100,50,0, 2*Math.PI);
		ctx.arc(100,50,25,0, 2*Math.PI);
		ctx.arc(50,100,25,0, 2*Math.PI);
		ctx.arc(150,100,25,0, 2*Math.PI);
		ctx.arc(100,150,25,0, 2*Math.PI);

		ctx.fill();
	};

	$('#bekard').on('click', function(){
		// const canvas = $('#bekard-canvas');
		const canvas = document.getElementById('bekard-canvas');
		if (canvas.getContext) {
			const ctx = canvas.getContext('2d');
			draw_flower(ctx);
			// ctx.fillStyle = 'rgb(40,30,60)';
			// ctx.fillRect(10, 10, 50, 50);

		} else {
			console.log('BEEEEEK');
		}

		console.log("Giga-bekard");
	});

});
} )( jQuery );
