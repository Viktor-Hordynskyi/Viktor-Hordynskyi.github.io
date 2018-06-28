var c = document.getElementById('star-sky');
var ctx = c.getContext('2d');
var xMax = c.width = window.screen.availWidth;
var yMax = c.height = window.screen.availHeight;
var hmTimes = Math.round(xMax + yMax);
var randomSize = Math.floor((Math.random()*2)+1);
var randomHue = Math.floor((Math.random()*360)+1);


var stars = [];
function creatStars() {
	stars = [];
	for(var i=0; i<=1; i++) {
		// var randomX = Math.floor((Math.random()*xMax)+1);
		// var randomY = Math.floor((Math.random()*yMax)+1);
		// var randomOpacityOne = Math.floor((Math.random()*9)+1);
		// var randomOpacityTwo = Math.floor((Math.random()*9)+1);
		stars.push({
			x: Math.floor((Math.random()*xMax)+1),
			y: Math.floor((Math.random()*yMax)+1),
			o1: Math.floor((Math.random()*9)+1),
			o2: Math.floor((Math.random()*9)+1),
		})
		if(randomSize>1) {
			ctx.shadowBlur = Math.floor((Math.random()*15)+5);
			ctx.shadowColor = "white";
		}
	}
}

function drawing() {
	for(var i=0; i<=1; i++) {
		var e = stars[i];
		// console.log('drawing o1-'+e.o1);
		// console.log('drawing o2-'+e.o2);
		ctx.fillStyle = "hsla("+randomHue+", 30%, 80%, ."+e.o1+e.o2+")";
		ctx.fillRect(e.x, e.y, randomSize, randomSize);
		
		// ctx.fill();
	}
		// console.log(ctx);
		// requestAnimationFrame(drawing);
		// ctx.fill();
	}
	// setInterval(drawing, 1000);
	// console.log(randomOpacityOne);
	// console.log(randomOpacityTwo);

	function update() {
		for(var i=0; i<=1; i++) {
			var e = stars[i];
			e.o1 = Math.floor((Math.random()*9)+1);
			e.o2 = Math.floor((Math.random()*9)+1);
			// console.log('update o1-'+e.o1);
			// console.log('update o2-'+e.o2);
		}
	// console.log(randomOpacityOne);
	// console.log(randomOpacityTwo);
}
creatStars();
console.log(stars);
// creatStars();
// drawing();
// update();
function pulse() {
	
	drawing();
	
	update();
	// setInterval(pulse, 1000);
}
pulse();