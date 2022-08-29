function draw_circle(ctx, x, y, r) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2*Math.PI);
	ctx.fill();
}

function draw_flower(ctx, x, y, r) {
	ctx.fillStyle = 'rgb(40,30,60)';
	var r2 = r / 2;
	draw_circle(ctx, x, y, r);
	draw_circle(ctx, x, y - r, r2);
	draw_circle(ctx, x - r, y, r2);
	draw_circle(ctx, x + r, y, r2);
	draw_circle(ctx, x, y + r, r2);
};

function bekard_animate() {
	const canvas = document.getElementById('bekard-canvas');
	if (canvas.getContext) {
		const ctx = canvas.getContext('2d');
		var width = canvas.width;
		var height = canvas.height;
		draw_flower(ctx, width / 2, height / 2, 50);
	} else {
		console.log('No Canvas context found');
	}
}
