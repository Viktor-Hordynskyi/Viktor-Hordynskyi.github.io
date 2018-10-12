(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.q1 = function() {
	this.initialize(img.q1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,422,342);


(lib.q2 = function() {
	this.initialize(img.q2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,368,273);


(lib.q3 = function() {
	this.initialize(img.q3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,368,273);


(lib.q4 = function() {
	this.initialize(img.q4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,368,273);


(lib.q5 = function() {
	this.initialize(img.q5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,368,273);


(lib.q7 = function() {
	this.initialize(img.q7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,600);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		a1=1
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhLxBSCMAAAikDMCXjAAAMAAACkDg");
	this.shape.setTransform(457,330.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-28,-194.4,970,1050), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRBdQgIgEgFgGQgFgHgCgJQgDgJAAgKIAAhgQAAgKADgJQACgIAFgHQAFgGAIgEQAHgDAKAAQALAAAHADQAIAEAFAGQAFAHACAIQADAJAAAKIAAAPIgMAAIAAgPQAAgHgCgHQgBgGgEgGQgDgFgGgCQgFgDgIAAQgHAAgFADQgFACgEAFQgDAGgCAGQgBAHAAAHIAABhQAAAIABAGQACAHADAFQAEAEAFADQAFACAHAAQAIAAAFgCQAGgDADgEQAEgFABgHQACgGAAgIIAAgoIgZAAIAAgLIAlAAIAAAyQAAAKgDAJQgCAJgFAHQgFAGgIAEQgHADgLAAQgKAAgHgDg");
	this.shape.setTransform(133,113.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcBeIg6inIAACnIgLAAIAAi8IAQAAIA3CfIAAifIAMAAIAAC8g");
	this.shape_1.setTransform(122.7,113.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFBeIAAi8IALAAIAAC8g");
	this.shape_2.setTransform(115.7,113.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpBeIAAi8IApAAQAKABAIADQAIADAFAHQAGAGACAIQADAJAAAKIAABfQAAAKgDAJQgCAIgGAHQgFAGgIADQgIADgKAAgAgdBTIAdAAQAPAAAHgJQAHgKAAgQIAAhfQAAgPgHgLQgHgJgPAAIgdAAg");
	this.shape_3.setTransform(108.9,113.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAmBfIgJgqIg6AAIgJAqIgMAAIAqi9IARAAIAqC9gAgbAqIA2AAIgbh5g");
	this.shape_4.setTransform(97.7,113.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdBeQgCgEgBgFIgBgNIAAgeQAAgKgCgFQgDgGgFgFQgEgDgHgBQgFgCgIAAIgUAAIAABUIgMAAIAAi8IAnAAQAVAAAJAMQAJALAAAUIAAARQAAAggbAGQAPADAGAKQAGAKAAAPIAAAeIABAMQABAGADAEgAgdgBIAUAAIAOgBQAGgBAFgDQAEgEADgGQACgHAAgJIAAgSQAAgPgGgJQgHgIgOAAIgbAAg");
	this.shape_5.setTransform(86.8,113.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFBeIAAiwIgnAAIAAgMIBZAAIAAAMIgnAAIAACwg");
	this.shape_6.setTransform(76.6,113.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFBeIAAiwIgnAAIAAgMIBZAAIAAAMIgnAAIAACwg");
	this.shape_7.setTransform(62.5,113.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdBeQgCgEgBgFIgBgNIAAgeQAAgKgCgFQgDgGgFgFQgEgDgHgBQgFgCgIAAIgUAAIAABUIgMAAIAAi8IAnAAQAVAAAJAMQAJALAAAUIAAARQAAAggbAGQAPADAGAKQAGAKAAAPIAAAeIABAMQABAGADAEgAgdgBIAUAAIAOgBQAGgBAFgDQAEgEADgGQACgHAAgJIAAgSQAAgPgGgJQgHgIgOAAIgbAAg");
	this.shape_8.setTransform(52.5,113.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAmBfIgJgqIg6AAIgJAqIgMAAIAqi9IARAAIAqC9gAgbAqIA2AAIgbh5g");
	this.shape_9.setTransform(41.3,113.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFBeIAAiwIgnAAIAAgMIBZAAIAAAMIgnAAIAACwg");
	this.shape_10.setTransform(30.5,113.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBdQgIgEgFgGQgFgGgCgKQgDgIAAgKIAAgKIAMAAIAAAKQAAAQAHAKQAGAKAPgBQAQABAGgKQAHgKAAgQQAAgKgFgJQgFgIgIgHIgQgMIgQgMQgIgIgFgIQgFgKAAgNQAAgWAKgMQAJgNAUAAQALAAAIADQAHAEAFAGQAFAGACAJQADAJAAAKIAAAEIgMAAIAAgFQAAgHgCgGQgBgHgEgFQgDgFgFgCQgGgDgHAAQgPAAgGAKQgGAKAAAPQAAALAFAJQAFAIAHAHIAQAMIAQANQAIAGAFAKQAFAJAAANQAAAKgCAIQgDAKgFAGQgFAGgHAEQgIADgLAAQgKAAgHgDg");
	this.shape_11.setTransform(20.5,113.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOBeIAAg+Igmh+IAgAAIAVBXIAXhXIAcAAIglB+IAAA+g");
	this.shape_12.setTransform(191.9,114.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWBeIgFgiIgkAAIgFAiIgbAAIAei8IArAAIAeC8gAANAjIgOhfIgOBfIAcAAg");
	this.shape_13.setTransform(181.1,114.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgsBeIAAi8IAtAAQAXAAAKANQAMAMAAAWIAABfQAAAWgMANQgKALgXAAgAgPBDIAQAAQAHAAAEgDQAEgFAAgKIAAhhQAAgKgEgEQgEgFgHAAIgQAAg");
	this.shape_14.setTransform(170.2,114.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AghBVQgLgNAAgXIAAhhQAAgXALgMQAMgMAVgBQAWABAMAMQALAMAAAXIAABhQAAAXgLANQgMAMgWAAQgVAAgMgMgAALBCQAEgFABgKIAAhlQgBgKgEgEQgEgFgHABQgGgBgEAFQgFAEAAAKIAABlQAAAKAFAFQAEAEAGAAQAHAAAEgEg");
	this.shape_15.setTransform(159.3,114.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOBeIAAihIgfAAIAAgbIBbAAIAAAbIgfAAIAAChg");
	this.shape_16.setTransform(149.1,114.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-131.8,94.6,511.2,57.5), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.188,0.8,1],-92.1,0,92.2,0).s().p("AuYAKIAAgTIcxAAIAAATg");
	this.shape.setTransform(92.1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(0,0,184.3,2.1), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7C1C1").s().p("AgVAqIgFgBIABgJIAHABIADgBIAEgCIACgDIABgEIAEgJIgXg4IAMAAIAQAsIAQgsIALAAIgbBEIgBAHIgEAGQgCABgDABQgEACgEAAIgEgBg");
	this.shape.setTransform(227.3,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7C1C1").s().p("AgPAdIAAg4IALAAIAAAJIACgEIAEgDIAEgCIAGgBIAEABIAAALIgDAAIgCgBQgIAAgEAFQgDAEAAAJIAAAcg");
	this.shape_1.setTransform(222.3,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7C1C1").s().p("AgLAbQgGgCgEgDQgEgFgCgFQgCgGAAgGQAAgFACgGQACgFAEgEQAEgEAGgDQAGgCAFAAQAGAAAGACQAFADAEAEQAEAEADAFQACAGAAAFQAAAGgCAGQgDAFgEAFQgEADgFACQgGADgGAAQgFAAgGgDgAgHgRIgGAEQgCADgBADQgCAEAAADQAAAFACADQABAEACACIAGAEQAEACADAAQAEAAAEgCIAGgEIADgGQACgDAAgFQAAgDgCgEIgDgGIgGgEQgEgBgEgBQgDABgEABg");
	this.shape_2.setTransform(216.3,11.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7C1C1").s().p("AAAAjQgDgBgBgDIgCgGIAAgHIAAgdIgMAAIAAgJIAMAAIAAgQIAJAAIAAAQIAQAAIAAAJIgQAAIAAAZIABAFIABAEIACADIAFABIAEAAIADgCIAAAKIgEACIgGAAQgFAAgEgCg");
	this.shape_3.setTransform(210.2,10.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7C1C1").s().p("AgMAcQgGgCgEgGIAIgHIAHAFQACACAFAAIADAAIAEgCIADgCIABgDIgBgFIgFgCIgEgBIgDgBIgGgCIgGgCQgDgBgBgDQgBgDAAgFQAAgDACgEQABgEADgBIAHgEIAHgBQAGAAAFACQAFACAEAFIgJAHIgEgEQgDgBgEgBQgDABgDABQgDACABADQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAQAAAAABABQAAAAAAAAIAEACIAFABIAGABIAGACQACADABACQABADAAAEQAAAFgCAEIgFAFIgHADIgIABQgHAAgFgCg");
	this.shape_4.setTransform(205.5,11.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7C1C1").s().p("AgFArIAAg5IAKAAIAAA5gAgFgcQgCgCAAgEQAAgDACgDQACgCADAAQADAAACACQADADAAADQAAAEgDACQgCACgDAAQgDAAgCgCg");
	this.shape_5.setTransform(201.5,9.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7C1C1").s().p("AAPAtIAAghQAAgEgCgDIgCgFIgFgBIgEgBIgGABQgDABgCACIgDAFIgBAJIAAAdIgLAAIAAhZIALAAIAAAqQACgEAFgDQAFgDAGAAIAIABQADABADADIAFAHQABADAAAGIAAAkg");
	this.shape_6.setTransform(196.7,9.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7C1C1").s().p("AgEAtIAAhZIAJAAIAABZg");
	this.shape_7.setTransform(188.6,9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7C1C1").s().p("AgMAdQgDgBgDgDIgEgEQgCgEAAgEQAAgFADgEQACgEAEgCIAKgDIALgBIAIAAIAAgCIAAgEIgDgFIgEgCIgGgBIgFAAIgEACIgDACIgDADIgHgIQAFgEAGgCQAGgCAFAAQAGAAAEACQAFACADACQADACABAEIABAHIAAAcIABAFIAAAGIgKAAIAAgJQgEAGgFABQgFADgFAAIgIgBgAABACIgHABIgFADQgCACAAAEQAAAFADACQAEACAFABQAEgBADgBIAFgEIADgFIAAgGIAAgEIgFAAIgIABg");
	this.shape_8.setTransform(183.9,11.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E7C1C1").s().p("AAPAdIAAggQAAgEgCgDIgCgFIgFgCIgEgBIgGABQgDABgCADIgDAFIgBAIIAAAdIgLAAIAAg4IALAAIAAAJQACgEAFgDQAFgDAGAAIAIABQADABADADIAFAHQABAEAAAGIAAAjg");
	this.shape_9.setTransform(177.6,11.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7C1C1").s().p("AgLAbQgGgCgEgDQgEgFgCgFQgCgGAAgGQAAgFACgGQACgFAEgEQAEgEAGgDQAGgCAFAAQAGAAAGACQAFADAEAEQAEAEADAFQACAGAAAFQAAAGgCAGQgDAFgEAFQgEADgFACQgGADgGAAQgFAAgGgDgAgHgRIgGAEQgCADgBADQgCAEAAADQAAAFACADQABAEACACIAGAEQAEACADAAQAEAAAEgCIAGgEIADgGQACgDAAgFQAAgDgCgEIgDgGIgGgEQgEgBgEgBQgDABgEABg");
	this.shape_10.setTransform(170.7,11.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7C1C1").s().p("AgFArIAAg5IALAAIAAA5gAgFgcQgCgCAAgEQAAgDACgDQADgCACAAQADAAADACQACADAAADQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_11.setTransform(165.7,9.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7C1C1").s().p("AAAAjQgDgBgBgDIgCgGIAAgHIAAgdIgMAAIAAgJIAMAAIAAgQIAKAAIAAAQIAPAAIAAAJIgPAAIAAAZIAAAFIABAEIACADIAFABIAEAAIADgCIAAAKIgEACIgGAAQgFAAgEgCg");
	this.shape_12.setTransform(161.7,10.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7C1C1").s().p("AgMAdQgDgBgDgDIgEgEQgCgEAAgEQAAgFADgEQACgEAEgCIAKgDIALgBIAIAAIAAgCIAAgEIgDgFIgEgCIgGgBIgFAAIgEACIgDACIgDADIgHgIQAFgEAGgCQAGgCAFAAQAGAAAEACQAFACADACQADACABAEIABAHIAAAcIABAFIAAAGIgKAAIAAgJQgEAGgFABQgFADgFAAIgIgBgAABACIgHABIgFADQgCACAAAEQAAAFADACQAEACAFABQAEgBADgBIAFgEIADgFIAAgGIAAgEIgFAAIgIABg");
	this.shape_13.setTransform(156.6,11.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E7C1C1").s().p("AgPAdIAAg4IALAAIAAAJIACgEIAEgDIAEgCIAGgBIAEABIAAALIgCAAIgDgBQgIAAgEAFQgDAEAAAJIAAAcg");
	this.shape_14.setTransform(151.6,11.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E7C1C1").s().p("AgLAbQgFgCgEgDQgEgFgBgFQgDgGAAgGQAAgGADgFIAFgJQAFgEAFgDQAFgCAGAAQAIAAAEADQAFACAEAFQAEAEABAFQACAFAAAFIAAAEIgtAAQAAAEACADIADAFIAHAEIAGABQAFAAAEgDQADgCADgEIAJAGQgJAMgQAAQgGAAgGgDgAgGgTIgGAFIgDAEIgBAHIAhAAIgBgHIgDgFIgGgEIgGgBQgEAAgDABg");
	this.shape_15.setTransform(145.8,11.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E7C1C1").s().p("AgdAuIAAhaIALAAIAAAJQADgFAGgDQAFgCAFAAQAGAAAGACQAGADADAEQAEAEACAFQACAGAAAGQAAAGgCAGQgCAEgEAEQgDAEgGACQgGADgGAAQgFAAgFgDQgGgCgDgFIAAAqgAgHghIgGAEQgCACgBAEQgCADAAAFQAAAEACAEQABADACADIAGADQADACAEAAQAEAAAEgCIAFgDIAEgGQABgEABgEQgBgFgBgDIgEgGIgFgEQgEgCgEAAQgEAAgDACg");
	this.shape_16.setTransform(138.9,12.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7C1C1").s().p("AgLAbQgGgCgEgDQgEgFgCgFQgCgGAAgGQAAgFACgGQACgFAEgEQAEgEAGgDQAGgCAFAAQAGAAAGACQAFADAEAEQAEAEADAFQACAGAAAFQAAAGgCAGQgDAFgEAFQgEADgFACQgGADgGAAQgFAAgGgDgAgHgRIgGAEQgCADgBADQgCAEAAADQAAAFACADQABAEACACIAGAEQAEACADAAQAEAAAEgCIAGgEIADgGQACgDAAgFQAAgDgCgEIgDgGIgGgEQgEgBgEgBQgDABgEABg");
	this.shape_17.setTransform(131.5,11.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E7C1C1").s().p("AgGAuIAAguIgNAAIAAgKIANAAIAAgNQAAgLAEgGQADgFALAAIADAAIAFABIgBAJIgEAAIgDgBIgEABIgDACIgCAFIAAAFIAAANIANAAIAAAKIgNAAIAAAug");
	this.shape_18.setTransform(122.6,9.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E7C1C1").s().p("AgLAbQgGgCgEgDQgEgFgCgFQgCgGAAgGQAAgFACgGQACgFAEgEQAEgEAGgDQAGgCAFAAQAGAAAGACQAFADAEAEQAEAEADAFQACAGAAAFQAAAGgCAGQgDAFgEAFQgEADgFACQgGADgGAAQgFAAgGgDgAgHgRIgGAEQgCADgBADQgCAEAAADQAAAFACADQABAEACACIAGAEQAEACADAAQAEAAAEgCIAGgEIADgGQACgDAAgFQAAgDgCgEIgDgGIgGgEQgEgBgEgBQgDABgEABg");
	this.shape_19.setTransform(117,11.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMAcQgFgCgEgGIAIgHIAFAFQAEACAEAAIAEAAIADgCIADgCIABgDIgCgFIgDgCIgFgBIgDgBIgHgCIgFgCQgCgBgCgDQgBgDgBgFQAAgDACgEQADgEADgBIAHgEIAGgBQAGAAAGACQAFACADAFIgIAHIgGgEQgCgBgFgBQgCABgDABQgDACAAADQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAABABAAQAAAAABABQAAAAABAAIADACIAFABIAHABIAEACQADADABACQABADABAEQAAAFgCAEIgGAFIgIADIgHABQgHAAgFgCg");
	this.shape_20.setTransform(107.4,11.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQAdIAAg4IAMAAIAAAJIADgEIACgDIAGgCIAEgBIAGABIgBALIgCAAIgDgBQgIAAgEAFQgDAEAAAJIAAAcg");
	this.shape_21.setTransform(102.8,11.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMAdQgDgBgDgDIgEgEQgCgEAAgEQAAgFADgEQACgEAEgCIAKgDIALgBIAIAAIAAgCIAAgEIgDgFIgEgCIgGgBIgFAAIgEACIgDACIgDADIgHgIQAFgEAGgCQAGgCAFAAQAGAAAEACQAFACADACQADACABAEIABAHIAAAcIABAFIAAAGIgKAAIAAgJQgEAGgFABQgFADgFAAIgIgBgAABACIgHABIgFADQgCACAAAEQAAAFADACQAEACAFABQAEgBADgBIAFgEIADgFIAAgGIAAgEIgFAAIgIABg");
	this.shape_22.setTransform(97.1,11.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgLAbQgFgCgEgDQgDgFgDgFQgCgGAAgGQAAgGACgFIAGgJQAEgEAGgDQAFgCAFAAQAJAAAFADQAEACAEAFQAEAEABAFQACAFAAAFIAAAEIgtAAQAAAEACADIADAFIAHAEIAGABQAFAAAEgDQADgCADgEIAJAGQgJAMgRAAQgFAAgGgDgAgGgTIgGAFIgDAEIgBAHIAhAAIgBgHIgDgFIgGgEIgHgBQgDAAgDABg");
	this.shape_23.setTransform(90.8,11.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgWAqIgEgBIABgJIAHABIADgBIAEgCIACgDIACgEIADgJIgXg4IAMAAIAQAsIAQgsIALAAIgbBEIgBAHIgEAGQgCABgDABQgEACgDAAIgGgBg");
	this.shape_24.setTransform(84.5,12.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOAnQgFgDgEgIQgDgGgBgIIgBgOIAAgIIACgKIADgKIAGgHQADgEAFgCQAEgCAFAAQAGAAAFACQAEACADAEQAEADACAEIADAKIACAKIAAAIIgBAOQgBAIgDAGQgDAIgGADQgGAFgJAAQgIAAgGgFgAgGgfQgDACgCADIgDAFIgCAIIAAAHIgBAGIABAKQAAAGACAFQACAFAEAEQADAEAFAAQAGAAAEgEQADgEACgFIACgLIABgKIAAgGIgBgHIgCgIIgDgFIgFgFQgDgCgEAAQgDAAgDACg");
	this.shape_25.setTransform(74.8,9.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAGArIAAgTIgjAAIAAgMIAhg2IAOAAIAAA3IAMAAIAAALIgMAAIAAATgAgTANIAZAAIAAgpIAAAAg");
	this.shape_26.setTransform(68.2,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,295.1,19.9), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBPQgPgHgLgLQgLgLgFgQQgGgPAAgTQAAgSAGgPQAGgPAKgMQALgLAPgHQAPgGARAAQASAAAOAGQAOAHAKAKQAKALAEAOQAFAOAAAOIAAANIiGAAQAAAHACAKQADALAHAJQAHAKAMAHQALAHASAAQAQAAAPgIQAPgHAIgOIAPANQgMATgSAIQgSAIgVAAQgSAAgPgGgAgag6QgLAHgHAJQgHAJgDAIIgCAMIBxAAQAAgLgEgJQgEgJgIgIQgHgHgLgEQgKgEgLAAQgRAAgLAHg");
	this.shape.setTransform(317.1,28.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJCEIAAkHIATAAIAAEHg");
	this.shape_1.setTransform(303.2,23.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRCFQgJgCgJgFQgIgEgIgGQgHgGgFgJIgBAAIAAAdIgVAAIAAkIIAVAAIAACEIABAAQAFgJAHgGQAIgGAIgEQAJgEAJgCQAJgCAJAAQASAAAQAHQAPAFAMAMQALALAGAPQAHAPAAATQAAATgHAPQgGAQgLALQgMALgPAHQgQAGgSAAQgJAAgJgBgAgZgKQgMAFgJAHQgJAKgGAMQgFAMAAANQAAAOAFAMQAGAMAJAJQAJAJAMAFQAMAFAOAAQAOAAAMgFQAMgFAIgJQAJgJAEgMQAFgMAAgOQAAgNgFgMQgEgMgJgKQgIgHgMgFQgMgGgOAAQgOAAgMAGg");
	this.shape_2.setTransform(288.5,24);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeBSQgLgCgHgGQgJgGgFgJQgFgJAAgNQAAgSAKgLQAJgKAOgGQAOgFAPgCIAagBIAZAAIAAgKQAAgVgNgJQgMgJgVAAQgaAAgVASIgNgOQAMgMARgFQARgGAPAAQAdAAARAOQASANAAAfIAAAnIAAAVIABASIAAAPIACAOIgUAAQgCgMAAgOIAAAAQgJAPgNAIQgOAHgTAAQgMAAgJgDgAgBABQgNACgKAEQgKAFgGAHQgGAHAAAKQAAAHADAGQAEAGAFAEQAGADAGACQAGACAHAAQAQAAALgFQALgFAGgIQAGgHADgKQACgKAAgLIAAgKIgXAAQgNAAgLABg");
	this.shape_3.setTransform(268.3,28.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKB5IAAihIAUAAIAAChgAgKhdQgFgEAAgHQAAgHAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAHQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_4.setTransform(255.2,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJCEIAAkHIAUAAIAAEHg");
	this.shape_5.setTransform(246.8,23.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdBPQgPgHgLgLQgLgLgFgQQgGgPAAgTQAAgSAGgPQAGgPAKgMQALgLAPgHQAPgGARAAQASAAAOAGQAOAHAKAKQAKALAEAOQAFAOAAAOIAAANIiGAAQAAAHACAKQADALAHAJQAHAKAMAHQALAHASAAQAQAAAPgIQAPgHAIgOIAPANQgMATgSAIQgSAIgVAAQgSAAgPgGgAgag6QgLAHgHAJQgHAJgDAIIgCAMIBxAAQAAgLgEgJQgEgJgIgIQgHgHgLgEQgKgEgLAAQgRAAgLAHg");
	this.shape_6.setTransform(232.9,28.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA2B8IhEh1IgrAAIAAB1IgXAAIAAj3IBBAAIAOAAIARACIATAGQALAEAHAHQAJAIAFALQAFALAAAQQAAATgGALQgGALgJAIQgKAGgKADQgMAEgKABIBIB3gAg5gOIAxAAQARABALgFQAMgEAGgIQAHgGACgHQACgIAAgHQAAgGgCgHQgCgJgHgGQgGgGgMgFQgLgFgRAAIgxAAg");
	this.shape_7.setTransform(213.9,24.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfBSQgJgCgJgGQgIgGgFgJQgFgJAAgNQAAgSAJgLQAKgKAOgGQAOgFAPgCIAagBIAZAAIAAgKQAAgVgNgJQgNgJgTAAQgbAAgVASIgNgOQAMgMARgFQARgGAPAAQAdAAARAOQASANAAAfIAAAnIAAAVIABASIAAAPIACAOIgUAAQgCgMAAgOIAAAAQgJAPgNAIQgOAHgTAAQgMAAgKgDgAgBABQgNACgKAEQgKAFgGAHQgGAHAAAKQAAAHADAGQAEAGAFAEQAFADAHACQAGACAHAAQAQAAALgFQALgFAGgIQAGgHADgKQACgKAAgLIAAgKIgXAAQgNAAgLABg");
	this.shape_8.setTransform(184,28.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAwCEIAAhfQAAgKgBgJQgCgJgFgIQgEgGgIgEQgIgFgMAAQgLAAgKAEQgKAEgIAIQgHAIgFAMQgEANAAAQIAABRIgVAAIAAkHIAVAAIAACDIAAAAQAHgNAPgKQAOgKATAAQATAAAMAGQALAGAHAKQAHAJADAMQACANAAANIAABgg");
	this.shape_9.setTransform(156.3,23.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAFBnQgHgEgFgFQgEgGgDgHQgCgIAAgJIAAhoIgjAAIAAgTIAjAAIAAguIAUAAIAAAuIAuAAIAAATIguAAIAABoQAAALAGAGQAGAGAKAAIANgBIALgEIACASQgGADgIABQgIACgGAAQgLAAgIgDg");
	this.shape_10.setTransform(140.7,26.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKB5IAAihIAUAAIAAChgAgKhdQgFgEAAgHQAAgHAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAHQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_11.setTransform(130.8,24.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAxBRIgxiEIAAAAIgsCEIgWAAIgzihIAXAAIAnCHIABAAIAtiHIATAAIAwCGIABAAIAmiGIAVAAIgwChg");
	this.shape_12.setTransform(114.2,28.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdBPQgPgHgLgLQgLgLgFgQQgGgPAAgTQAAgSAGgPQAGgPAKgMQALgLAPgHQAPgGARAAQASAAAOAGQAOAHAKAKQAKALAEAOQAFAOAAAOIAAANIiGAAQAAAHACAKQADALAHAJQAHAKAMAHQALAHASAAQAQAAAPgIQAPgHAIgOIAPANQgMATgSAIQgSAIgVAAQgSAAgPgGgAgag6QgLAHgHAJQgHAJgDAIIgCAMIBxAAQAAgLgEgJQgEgJgIgIQgHgHgLgEQgKgEgLAAQgRAAgLAHg");
	this.shape_13.setTransform(83.1,28.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgiCAQgQgHgLgLQgLgLgGgQQgHgPAAgTQAAgTAHgPQAGgPALgLQALgMAQgFQAQgHASAAQAIAAAKACQAJACAJAEQAIAEAIAGQAHAGAFAJIABAAIAAiEIAVAAIAAEIIgVAAIAAgdIgBAAQgFAJgHAGQgIAGgIAEQgJAFgJACQgKABgIAAQgSAAgQgGgAgagKQgMAFgJAHQgIAKgEAMQgFAMAAANQAAAOAFAMQAEAMAIAJQAJAJAMAFQALAFAPAAQAOAAAMgFQAMgFAJgJQAJgJAFgMQAGgMAAgOQAAgNgGgMQgFgMgJgKQgJgHgMgFQgMgGgOAAQgPAAgLAGg");
	this.shape_14.setTransform(62.4,24);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeBSQgLgCgHgGQgJgGgFgJQgFgJAAgNQAAgSAKgLQAJgKAOgGQANgFAQgCIAbgBIAYAAIAAgKQAAgVgNgJQgMgJgVAAQgaAAgWASIgMgOQAMgMARgFQARgGAPAAQAdAAASAOQARANAAAfIAAAnIABAVIAAASIABAPIABAOIgTAAQgCgMAAgOIgBAAQgJAPgOAIQgNAHgUAAQgLAAgJgDgAgCABQgMACgKAEQgKAFgGAHQgGAHAAAKQAAAHAEAGQADAGAFAEQAFADAHACQAGACAHAAQAQAAAKgFQALgFAHgIQAGgHADgKQACgKAAgLIAAgKIgXAAQgNAAgMABg");
	this.shape_15.setTransform(42.7,28.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgpBTIAAhzIAAgLIgBgOIAAgMIAAgIIAVAAIAAARIABALQAIgPAMgJQANgJARAAIAHAAIAGACIgDAVIgIgCQgOAAgJAEQgJAFgGAHQgHAIgDAKQgDALAAAMIAABXg");
	this.shape_16.setTransform(29.1,28.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgKB8IAAjiIhVAAIAAgVIC/AAIAAAVIhUAAIAADig");
	this.shape_17.setTransform(12.1,24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(0,0,328.9,50.4), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7C1C1").s().p("AAGAqIAAgSIgjAAIAAgMIAhg1IAOAAIAAA3IAMAAIAAAKIgMAAIAAASgAgTAOIAZAAIAAgqIAAAAg");
	this.shape.setTransform(231.2,24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7C1C1").s().p("AAFAqIAAhHIgOAPIgHgIIAXgTIAKAAIAABTg");
	this.shape_1.setTransform(223.9,24.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7C1C1").s().p("AgWAsIAlhbIAIADIglBcg");
	this.shape_2.setTransform(218.8,24.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7C1C1").s().p("AgNArIAUghIAAAAQgEACgFAAIgJgBQgFgCgDgDQgEgDgDgFQgCgFAAgHQAAgHACgFQADgFAEgEQAEgDAFgCQAFgCAFAAQAGAAAFACQAGACAEADQAEAEACAFQACAFAAAGIAAAHIgCAHIgDAEIgDAGIgVAigAgGgfIgGAEIgDAFIgBAIIABAHIADAFQADACADABQADABADAAQAEAAADgBQAEgBACgCQACgCABgDIACgHQAAgEgCgEQgBgDgCgCIgGgEQgDgBgEAAQgDAAgDABg");
	this.shape_3.setTransform(213.2,24.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7C1C1").s().p("AgRAnQgHgFgDgIIAMgEQACAGAEADQAEACAFAAQADAAADgBIAFgDQADgDABgDQABgDAAgEQAAgKgFgEQgGgEgIAAIgIABQgFABgFACIABgsIAtAAIAAALIgiAAIAAAVIACgBIADgBIAEAAIABAAQAGAAAFACQAFACAEAEQADAEACAEQACAFAAAGQAAAGgDAGQgCAFgEAEQgEADgFACQgGACgFAAQgJAAgHgEg");
	this.shape_4.setTransform(206.4,24.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7C1C1").s().p("AgbArIAAgLIAhgiIAEgDIADgFIACgEIABgFIgBgGIgEgEIgEgCIgGgBQgFAAgEADQgEAEgBAGIgNgBQABgGACgEQADgFAEgCQADgDAFgBIAJgCQAGAAAFACQAEABAEADQAEAEACAEQACAEAAAGIgBAIIgEAHIgEAFIgGAFIgbAbIAqAAIAAAKg");
	this.shape_5.setTransform(199.9,24.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E7C1C1").s().p("AABAqIADgYIgMAAIgEAYIgJAAIADgYIgLAAIAAgKIAMAAIADgQIgMAAIAAgJIANAAIAEgYIAJAAIgDAYIANAAIADgYIAJAAIgDAYIALAAIAAAJIgMAAIgDAQIAMAAIAAAKIgNAAIgDAYgAgHAIIANAAIACgQIgNAAg");
	this.shape_6.setTransform(193.2,24.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMApQgHgEgGgGQgGgHgDgIQgDgHAAgJQAAgIAEgJQACgIAHgGQAFgGAIgDQAJgDAIgBQAJABAIADQAIADAFAHIgJAHQgEgFgFgCQgGgDgGAAQgGAAgGADQgGADgEAEQgEAFgDAGQgBAHAAAFQAAAHABAHQACAFAFAFQAEAFAGADQAFACAHAAQAHAAAGgDQAGgDAEgFIAJAHIgDADIgGAGIgKAEQgGABgHAAQgJABgJgEg");
	this.shape_7.setTransform(182.5,24.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAqIAAhTIA2AAIAAALIgqAAIAAAZIAnAAIAAAKIgnAAIAAAbIAtAAIAAAKg");
	this.shape_8.setTransform(174.7,24.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAqQgHgDgEgGIAJgJQADAFAFADQAFACAFAAIAFgBIAGgCIAEgFQABgDAAgDQAAgFgDgDQgDgCgFgCIgJgDQgFgCgFgDQgFgCgDgEQgDgGAAgIIACgIQABgEAEgEQADgDAGgCQAFgCAHgBQAHABAGACQAHABAFAGIgKAIIgGgFQgEgCgFAAQgEAAgDACQgDABgCABIgDAFIgBAEQAAAGAEACQADADAEACIAJAEIAKADQAFACADAEQADAEAAAIQAAAGgCAGQgCAEgEAEQgEADgGACQgFABgFAAQgIAAgIgCg");
	this.shape_9.setTransform(167.3,24.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWArIgFgCIACgJIAGABIAFgBIADgCIACgDIACgDIADgJIgYg5IANAAIAQArIAQgrIAMAAIgbBEIgDAHIgDAFQgCACgEACQgDABgDAAIgGAAg");
	this.shape_10.setTransform(161.1,27.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMApQgHgEgGgGQgGgHgDgIQgDgHAAgJQAAgIAEgJQACgIAHgGQAFgGAIgDQAJgDAIgBQAJABAIADQAIADAFAHIgJAHQgEgFgFgCQgGgDgGAAQgGAAgGADQgGADgEAEQgEAFgDAGQgBAHAAAFQAAAHABAHQADAFAEAFQAEAFAGADQAGACAGAAQAHAAAGgDQAFgDAFgFIAJAHIgEADIgFAGIgKAEQgGABgHAAQgJABgJgEg");
	this.shape_11.setTransform(154,24.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7C1C1").s().p("AgXAqQgGgCgDgDQgDgEgCgEQgCgFAAgEQAAgFABgDQACgEADgDIAGgFIAHgEIgHgIQgDgFAAgGQAAgFACgEIAGgGQACgDAFgBQAEgBAEAAIAIABIAGAEIAGAGQABADAAAFIgBAHIgFAGIgFAFIgGAEIARAQIAKgQIANAAIgQAYIATAUIgQAAIgKgLQgGAGgFAEQgGADgIAAQgHAAgFgCgAgSAFIgEAEIgDAFIgCAFIACAGIADAFIAGADIAFABIAGgBIAFgCIAEgEIADgDIgUgWIgFADgAgOgfQgEADAAAFIABAEIACAEIACADIADADIAFgDIAEgDIADgEIABgFQAAgEgDgDQgCgCgEAAQgGAAgCACg");
	this.shape_12.setTransform(142.2,24.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7C1C1").s().p("AAFAqIAAhHIgOAPIgHgIIAXgTIAKAAIAABTg");
	this.shape_13.setTransform(130.4,24.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E7C1C1").s().p("AgTAqIAhhJIgoAAIAAgKIA1AAIAAAKIghBJg");
	this.shape_14.setTransform(124.2,24.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E7C1C1").s().p("AAGAqIAAhHIgPAPIgHgIIAXgTIAKAAIAABTg");
	this.shape_15.setTransform(117.1,24.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E7C1C1").s().p("AgKApQgFgCgEgDQgEgEgDgFQgCgFAAgGIABgHIABgHIADgEIADgGIAVgiIAOAAIgVAhIABAAQAEgCAEAAIAJABQAFACAEADQADAEADAEQACAFAAAHQAAAHgCAFQgCAFgEAEQgEAEgGABQgFACgGAAQgFAAgFgCgAgGAAIgGADIgDAFIgBAIIABAHIADAFQADADADABQADABADAAQAEAAADgBQAEgBACgDQACgCABgDIACgHQAAgEgCgEQgBgDgCgCIgGgDQgDgBgEAAQgDAAgDABg");
	this.shape_16.setTransform(111,24.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E7C1C1").s().p("AgKAqQgFgCgEgDQgDgDgCgFQgDgFAAgGQAAgEACgDQABgDACgDIAFgFIAHgCIAAAAIgFgCIgEgEIgEgGIgBgIQAAgFACgDQACgEAEgDQADgDAFgBQAEgCAEAAQAFAAAFACQAEABAEADQADADACAEQACADAAAFIgBAIIgDAGIgFAEIgEACIAAAAIAGACIAFAFIAEAGIABAHQAAAGgCAFQgDAFgDADQgEADgFACQgFACgGAAQgFAAgFgCgAgLAHQgEAEAAAHQAAAEABADIAEAFIAFADIAFABQAHAAAFgEQAEgFAAgHIgBgGIgDgGIgGgCIgGgBQgGgBgFAFgAgIgeQgEAEAAAGIABAFIACAEIAEADQADACACAAQADAAADgCIAEgDIADgEIAAgFQAAgGgDgDQgEgEgGAAQgEAAgEADg");
	this.shape_17.setTransform(104.4,24.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E7C1C1").s().p("AAGAqIAAhHIgPAPIgHgIIAXgTIAKAAIAABTg");
	this.shape_18.setTransform(97.1,24.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E7C1C1").s().p("AABAqIADgYIgMAAIgEAYIgJAAIADgYIgLAAIAAgKIAMAAIADgQIgMAAIAAgJIANAAIAEgYIAJAAIgDAYIANAAIADgYIAJAAIgDAYIALAAIAAAJIgMAAIgDAQIAMAAIAAAKIgNAAIgDAYgAgHAIIANAAIACgQIgNAAg");
	this.shape_19.setTransform(91.1,24.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAdAqIgJgUIgnAAIgJAUIgNAAIAlhTIAKAAIAkBTgAgPAMIAfAAIgQgnIAAAAg");
	this.shape_20.setTransform(80.2,24.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgMApQgHgEgGgGQgGgHgDgIQgDgHAAgJQAAgIAEgJQADgIAFgGQAGgGAJgDQAHgDAKgBQAIABAIADQAIADAFAHIgJAHQgEgFgFgCQgGgDgGAAQgGAAgGADQgGADgEAEQgEAFgDAGQgCAHAAAFQAAAHACAHQACAFAFAFQAEAFAGADQAFACAHAAQAIAAAFgDQAGgDADgFIAKAHIgDADIgHAGIgJAEQgGABgHAAQgJABgJgEg");
	this.shape_21.setTransform(71.9,24.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgaAqIAAhTIA1AAIAAALIgpAAIAAAaIAmAAIAAAKIgmAAIAAAkg");
	this.shape_22.setTransform(64.4,24.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E7C1C1").s().p("AgFAbQgCgCAAgDQAAgEACgDQADgBACAAQADAAADABQACADAAAEQAAADgCACQgDACgDAAQgCAAgDgCgAgFgOQgCgDAAgDQAAgEACgCQADgCACAAQADAAADACQACACAAAEQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_23.setTransform(189.7,11.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E7C1C1").s().p("AgMArQgFgCgEgDQgEgFgCgFQgCgGAAgGQAAgHACgFQACgEAEgEQAEgEAFgDQAFgCAHAAQAFAAAGADQAFACADAFIAAAAIAAgqIALAAIAABaIgLAAIAAgIIAAAAQgDAEgGACQgFADgFAAQgHAAgFgDgAgGgBIgGADQgDADgBADQgBAEAAAEQAAAFABADQABAEADACIAGAEQADACADAAQAFAAADgCIAGgEIAEgGQABgDAAgFQAAgEgBgEIgEgGIgGgDQgDgBgFgBQgDABgDABg");
	this.shape_24.setTransform(184.2,9.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E7C1C1").s().p("AgKAbQgGgCgEgDQgEgFgCgFQgBgGAAgGQAAgGABgFIAHgJQAEgEAFgDQAGgCAEAAQAIAAAGADQAFACADAFQADAEACAFQACAFgBAFIAAAEIgsAAQAAAEABADIAFAFIAGAEIAGABQAFAAAEgDQAEgCACgEIAJAGQgJAMgRAAQgFAAgFgDgAgGgTIgFAFIgEAEIgBAHIAhAAIgBgHIgEgFIgEgEIgIgBQgCAAgEABg");
	this.shape_25.setTransform(177.4,11.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E7C1C1").s().p("AAAAjQgDgBgBgDIgCgGIAAgHIAAgdIgMAAIAAgJIAMAAIAAgQIAJAAIAAAQIAQAAIAAAJIgQAAIAAAZIABAFIABAEIACADIAFABIAEAAIADgCIAAAKIgEACIgGAAQgFAAgEgCg");
	this.shape_26.setTransform(171.5,10.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E7C1C1").s().p("AgMAdQgDgBgDgDIgEgEQgCgEAAgEQAAgFADgEQACgEAEgCIAKgDIALgBIAIAAIAAgCIAAgEIgDgFIgEgCIgGgBIgFAAIgEACIgDACIgDADIgHgIQAFgEAGgCQAGgCAFAAQAGAAAEACQAFACADACQADACABAEIABAHIAAAcIABAFIAAAGIgKAAIAAgJQgEAGgFABQgFADgFAAIgIgBgAABACIgHABIgFADQgCACAAAEQAAAFADACQAEACAFABQAEgBADgBIAFgEIADgFIAAgGIAAgEIgFAAIgIABg");
	this.shape_27.setTransform(166.4,11.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E7C1C1").s().p("AgEAtIAAhZIAJAAIAABZg");
	this.shape_28.setTransform(161.9,9.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E7C1C1").s().p("AgLAcQgEgBgDgDQgDgDgBgEQgCgEAAgGIAAgjIALAAIAAAgIABAHQABADACACQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAIAFABIAFgBIAFgDQACgDABgDQACgEAAgFIAAgcIAKAAIAAA4IgKAAIAAgJIgBAAQgCAFgFACQgFADgFAAQgFAAgDgBg");
	this.shape_29.setTransform(157.1,11.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E7C1C1").s().p("AgPApQgHgCgGgGIAHgJQAFAFAEACQAFADAHAAQAFAAAEgCQAEgCACgDQACgDABgDIABgHIAAgJIAAAAQgDAGgGACQgFACgFAAQgGAAgGgCQgFgCgEgEQgEgEgCgEQgCgFAAgHQAAgGACgFQACgGAEgEQAEgEAFgCQAFgDAHAAQAFAAAFADQAGACADAFIAAAAIAAgIIALAAIAAA3QAAAHgCAFQgDAFgEAEQgEAEgFACQgGADgGAAQgIAAgHgDgAgGgfIgGAEQgDADgBADQgBAEAAAEQAAAJAFAEQAFAFAHAAQAJAAAFgFQAFgEAAgJQAAgEgBgEIgEgGIgGgEQgDgBgFAAQgDAAgDABg");
	this.shape_30.setTransform(150,12.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E7C1C1").s().p("AgKAbQgGgCgEgDQgEgFgCgFQgBgGAAgGQAAgGABgFIAHgJQAEgEAFgDQAGgCAEAAQAIAAAGADQAFACADAFQADAEACAFQACAFgBAFIAAAEIgsAAQAAAEABADIAFAFIAGAEIAGABQAFAAAEgDQAEgCACgEIAJAGQgJAMgRAAQgFAAgFgDgAgGgTIgFAFIgEAEIgBAHIAhAAIgBgHIgEgFIgEgEIgIgBQgCAAgEABg");
	this.shape_31.setTransform(143.2,11.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E7C1C1").s().p("AAQArIgVgmIgNAAIAAAmIgLAAIAAhVIAdAAQAIABAFACQAFACADADQADAEACAEIABAJQAAAEgCADIgEAHQgCADgEABQgEACgFAAIAYAogAgSgEIAPAAIAGgBIAGgCIAEgDQACgEAAgDQAAgFgCgDQgCgCgCgCIgGgCIgGgBIgPAAg");
	this.shape_32.setTransform(136.6,9.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E7C1C1").s().p("AgWAqIgEgBIABgJIAGABIAFgBIADgCIACgDIACgEIADgJIgYg4IANAAIAQAsIAQgsIAMAAIgbBEIgDAHIgDAGQgCABgEABQgDACgDAAIgGgBg");
	this.shape_33.setTransform(126.1,12.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E7C1C1").s().p("AgEAtIAAhZIAKAAIAABZg");
	this.shape_34.setTransform(121.7,9.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E7C1C1").s().p("AgFAtIAAhZIALAAIAABZg");
	this.shape_35.setTransform(118.8,9.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E7C1C1").s().p("AgLAcQgEgBgDgDQgDgDgBgEQgCgEAAgGIAAgjIALAAIAAAgIABAHQABADACACQAAAAABABQAAAAAAAAQABABABAAQAAAAABAAIAFABIAFgBIAFgDQACgDABgDQACgEAAgFIAAgcIAKAAIAAA4IgKAAIAAgJIgBAAQgCAFgFACQgFADgFAAQgFAAgDgBg");
	this.shape_36.setTransform(114,11.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E7C1C1").s().p("AgaArIAAhVIA1AAIAAALIgpAAIAAAbIAmAAIAAAKIgmAAIAAAlg");
	this.shape_37.setTransform(107.5,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,0,295.1,34.8), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.q7();
	this.instance.parent = this;
	this.instance.setTransform(960,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,960,600), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AALAmIgYgZIAAAZIgGAAIAAhLIAGAAIAAAyIAWgUIAIAAIgWAUIAZAZg");
	this.shape.setTransform(229.1,-27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.8)").s().p("AgJAWQgFgCgCgFIAFgEQABAEAEACQAEACADAAIAEgBIADgBIACgDIABgDQAAgEgCgBIgFgDIgFgBIgHgCIgFgDQgCgCAAgFQAAgDABgDIAEgEQACgCADAAIAFgBQAFAAAFACQAEACADAFIgGADIgEgFQgDgCgEAAIgCABIgEABIgCACIgBAEQAAAAAAABQAAABAAAAQABABAAAAQABABAAAAIAGADIAFABIAGACQAEAAACADQACACAAAFQgBAEgBACQgBADgDACIgFADIgGAAQgFAAgFgCg");
	this.shape_1.setTransform(224.1,-26.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.8)").s().p("AgCAjIAAguIAFAAIAAAugAgCgaQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_2.setTransform(220.8,-27.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.8)").s().p("AgLAYIAAggIAAgEIAAgDIAAgEIAAgCIAGAAIAAAFIAAADQACgEADgDQAEgDAFAAIACAAIABABIAAAGIgDgBQgEAAgCACQgDABgBACIgDAFIgBAHIAAAYg");
	this.shape_3.setTransform(218.2,-26.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.8)").s().p("AACAeIgDgDIgCgEIgBgEIAAgeIgKAAIAAgFIAKAAIAAgNIAFAAIAAANIANAAIAAAFIgNAAIAAAeQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQACACADAAIADAAIADgCIABAGIgEABIgEAAIgFAAg");
	this.shape_4.setTransform(211.9,-26.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.8)").s().p("AgIAYIgGgDIgDgEQgBgDAAgDQAAgGACgDQADgCAEgBIAIgCIAHgBIAHAAIAAgDQAAgGgDgCQgFgDgFAAQgHAAgGAFIgDgEQACgDAGgCIAIgBQAJAAAEAEQAGAEAAAJIAAAKIAAAGIAAAFIAAAEIABAEIgHAAIAAgHQgDAEgEACQgDACgGAAIgFAAgAAAABIgGABIgFADQgBACgBADIABAEIADADIADACIAEAAQAEAAADgBIAFgEIACgFIABgGIAAgDIgHAAIgGABg");
	this.shape_5.setTransform(207.7,-26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.8)").s().p("AgJAWQgFgCgDgFIAGgEQACAEADACQAEACADAAIAEgBIADgBIACgDIABgDQAAgEgCgBIgEgDIgGgBIgHgCIgFgDQgCgCAAgFQAAgDABgDIAEgEQADgCACAAIAFgBQAFAAAFACQAEACADAFIgGADIgEgFQgDgCgEAAIgCABIgEABIgCACIgBAEQAAAAAAABQAAABAAAAQABABAAAAQABABAAAAIAGADIAFABIAGACQADAAADADQABACABAFQgBAEgBACQgBADgDACIgFADIgGAAQgFAAgFgCg");
	this.shape_6.setTransform(200.3,-26.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.8)").s().p("AgCAjIAAguIAFAAIAAAugAgCgaQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_7.setTransform(197.1,-27.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.8)").s().p("AgCAmIAAhLIAFAAIAABLg");
	this.shape_8.setTransform(192.1,-27.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.8)").s().p("AgIAYIgFgDIgEgEQgCgDAAgDQAAgGADgDQADgCADgBIAJgCIAHgBIAHAAIAAgDQAAgGgDgCQgEgDgGAAQgHAAgGAFIgDgEQACgDAGgCIAIgBQAJAAAEAEQAFAEABAJIAAAKIAAAGIAAAFIAAAEIABAEIgHAAIAAgHQgDAEgEACQgDACgGAAIgFAAgAAAABIgGABIgFADQgBACgBADIABAEIADADIADACIAEAAQADAAAEgBIAFgEIACgFIABgGIAAgDIgHAAIgGABg");
	this.shape_9.setTransform(188.2,-26.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.8)").s().p("AACAeIgDgDIgCgEIgBgEIAAgeIgKAAIAAgFIAKAAIAAgNIAFAAIAAANIANAAIAAAFIgNAAIAAAeQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQACACADAAIADAAIADgCIABAGIgEABIgEAAIgFAAg");
	this.shape_10.setTransform(183.9,-26.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.8)").s().p("AgCAjIAAguIAFAAIAAAugAgCgaQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_11.setTransform(181.1,-27.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.8)").s().p("AgYAjIAAhEIAHAAIAAAIIAAAAIADgEIAFgDIAFgCIAEAAQAFAAAFACQAEABAEAEQADADACAEQABAFABAFQgBAFgBAFIgFAHIgIAFQgFABgFAAIgEAAIgFgCIgFgDIgDgEIAAAAIAAAfgAgGgbIgGAEIgFAGQgBADAAAEQAAAEABAEIAFAEQADADADACQAEABACAAQAEAAAEgBQAEgCACgDIADgEIABgIIgBgHIgDgGIgGgEQgEgCgEAAQgCAAgEACg");
	this.shape_12.setTransform(176.9,-25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.8)").s().p("AgIAYIgFgDIgEgEQgBgDgBgDQABgGACgDQADgCADgBIAJgCIAHgBIAHAAIAAgDQAAgGgEgCQgEgDgFAAQgHAAgGAFIgEgEQADgDAFgCIAJgBQAIAAAGAEQAEAEAAAJIAAAKIAAAGIAAAFIABAEIAAAEIgFAAIgBgHQgDAEgDACQgEACgFAAIgGAAgAAAABIgHABIgEADQgBACAAADIABAEIACADIADACIAEAAQAEAAADgBIAFgEIADgFIAAgGIAAgDIgGAAIgHABg");
	this.shape_13.setTransform(171.2,-26.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.8)").s().p("AgFAXIgIgFIgFgIQgCgFAAgFQAAgEACgFQACgEADgDQADgEAFgBQAEgCAEAAQAGAAAEACIAIAGIgFADIgGgEQgDgCgEAAQgDAAgDACIgGAEIgEAGIgBAGIABAIIAEAFIAGAFQADABADAAQAEAAADgCQAEgBACgDIAEADQgDAFgEACQgFABgFAAQgEAAgEgBg");
	this.shape_14.setTransform(166.4,-26.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.8)").s().p("AgLAYIAAggIAAgEIAAgDIAAgEIAAgCIAGAAIAAAFIAAADQACgEADgDQAEgDAFAAIACAAIABABIAAAGIgDgBQgEAAgCACQgDABgBACIgDAFIgBAHIAAAYg");
	this.shape_15.setTransform(159.8,-26.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.8)").s().p("AgKAWQgDgCgDgDQgCgCgBgEIAAgHIAAgbIAGAAIAAAaIABAGIABAFQABAAAAABQAAAAABABQAAAAABAAQAAABABAAQACACAEgBQACABADgCQADgBACgCIAEgGIABgIIAAgXIAFAAIAAAgIAAADIABAFIAAADIAAADIgGAAIAAgGIAAgCQgDADgEADQgEADgEAAQgGAAgDgCg");
	this.shape_16.setTransform(155.1,-26);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.8)").s().p("AgJAXIgIgFIgFgIQgBgFAAgFQAAgEABgFQACgEADgDQAEgEAEgBQAFgCAEAAQAFAAAFACQAEABADAEQAEADABAEQACAFAAAEQAAAFgCAFQgBAEgEAEQgDADgEACQgFABgFAAQgEAAgFgBgAgHgQQgDABgCADIgEAGIgBAGIABAIIAEAFQACADADACQAEABADAAQAEAAAEgBIAFgFQADgCABgDQABgEAAgEQAAgDgBgDQgBgEgDgCIgFgEQgEgCgEAAQgDAAgEACg");
	this.shape_17.setTransform(149.3,-26.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.8)").s().p("AgCAkIAAgfIgagnIAIAAIAUAhIAWghIAHAAIgaAnIAAAfg");
	this.shape_18.setTransform(143.5,-27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-15,-35.8,248.2,56.6), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQA7IAdhqIgnAAIAAgMIA1AAIAAAMIgeBqg");
	this.shape.setTransform(49.8,31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQA7IAdhqIgnAAIAAgMIA1AAIAAAMIgeBqg");
	this.shape_1.setTransform(35.2,31.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTA0QgHgHAAgOIAAgCIAMAAIAAACQAAAJAEAEQADAEAHABQAHgBAEgEQADgFAAgJIAAgbQgFAMgNAAQgMABgFgIQgFgIAAgMIAAgSQAAgOAHgHQAGgJANABQAOgBAHAJQAGAHAAAOIAAA8QAAAOgGAIQgHAIgOAAQgNAAgGgIgAgKgrQgDAFAAAHIAAASQAAAJADAEQAEADAGABQAHgBAEgDQADgEAAgJIAAgSQAAgHgDgFQgEgEgHgBQgGABgEAEg");
	this.shape_2.setTransform(20.6,31.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AACA7IAAhgIgHAEQgEABgFAAIAAgKIAIgCIAGgEIADgEIADgHIAJAAIAAB2g");
	this.shape_3.setTransform(6.5,31.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYA7IAAh1IAxAAIAAARIgfAAIAAAhIAZAAIAAAPIgZAAIAAAjIAfAAIAAARg");
	this.shape_4.setTransform(53.1,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUA1QgHgIAAgOIAAg9QAAgOAHgIQAHgIANAAQAOAAAHAIQAHAIAAAOIAAALIgSAAIAAgMQAAgHgCgDQgDgCgFAAQgDAAgDACQgCADAAAHIAAA/QAAAGACADQADADADgBQAFABADgDQACgDAAgGIAAgRIASAAIAAAQQAAAOgHAIQgHAIgOAAQgNAAgHgIg");
	this.shape_5.setTransform(46.6,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAKA7IgWhUIAABUIgRAAIAAh1IAYAAIASBGIAAhGIARAAIAAB1g");
	this.shape_6.setTransform(39.7,11.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIA7IAAh1IARAAIAAB1g");
	this.shape_7.setTransform(34.4,11.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUA1QgHgIAAgOIAAgIIASAAIAAAJQAAAGACADQADADAEgBQAEAAADgCQACgDAAgGQAAgHgEgFQgDgGgFgFIgKgJQgGgFgEgIQgDgHAAgKQAAgOAHgIQAHgIAMAAQAOAAAHAIQAHAIAAAOIAAAEIgSAAIAAgFQAAgHgCgDQgDgCgEAAQgEAAgCACQgDADAAAHQAAAHAEAFQAEAGAEAFIALAJQAFAGAEAGQAEAIAAAKQAAAOgHAIQgHAIgOAAQgNAAgHgIg");
	this.shape_8.setTransform(29.6,11.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_9.setTransform(22.3,16.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIA7IAAhkIgUAAIAAgRIA5AAIAAARIgUAAIAABkg");
	this.shape_10.setTransform(17.6,11.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUA1QgHgIAAgOIAAgIIASAAIAAAJQAAAGACADQADADAEgBQAEAAADgCQACgDAAgGQAAgHgEgFQgDgGgFgFIgKgJQgGgFgEgIQgDgHAAgKQAAgOAHgIQAHgIAMAAQAOAAAHAIQAHAIAAAOIAAAEIgSAAIAAgFQAAgHgCgDQgDgCgEAAQgEAAgCACQgDADAAAHQAAAHAEAFQAEAGAEAFIALAJQAFAGAEAGQAEAIAAAKQAAAOgHAIQgHAIgOAAQgNAAgHgIg");
	this.shape_11.setTransform(11.4,11.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYA7IAAh1IAyAAIAAARIggAAIAAAhIAZAAIAAAPIgZAAIAAAjIAgAAIAAARg");
	this.shape_12.setTransform(5.3,11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,63.3,43.8), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOCsIAAlXIAcAAIAAFXg");
	this.shape.setTransform(1.5,17.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,2.9,34.4), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AZBIhQgMgDgKgFIAAgaQATANAYABQALAAAKgGQAIgFAAgLQAAgHgGgFQgJgGgFgCIgSgGQgKgDgIgFQgJgFgFgIQgGgKABgLQAAgJAEgJQAFgJAGgFQAIgHAKgDQAKgEAMABQAVgBAVAJIAAAbQgLgHgJgCQgKgDgKAAQgKgBgKAHQgIAFAAAKQAAAHAGAFQAGAEAIADIASAGQAJADAJAFQAJAHAFAHQAGAKgBALQAAAKgEAJQgFAJgHAFQgHAHgLADQgKADgMAAQgKAAgNgDgARcIiIAAiZIBdAAIAAAYIhAAAIAAAnIA3AAIAAAYIg3AAIAAAqIBCAAIAAAYgAVjIiIAAiBIgvAAIAAgYIB7AAIAAAYIgvAAIAACBgAO5IhIg8hBIAABBIgdAAIABiYIAcAAIAAA/IA7g/IAiAAIhDBLIBGBNgAJlIhIAAiYIA1AAQAMAAAKADQAKAEAGAHQAHAFAEAJQAEAKAAAKQAAAPgIAMQgIALgPAGIAkA8IggAAIggg4IgTAAIAAA4gAKBHSIAVAAQAMABAIgIQAIgHAAgLQAAgLgIgHQgIgIgMABIgVAAgAHIIhIgOgjIg8AAIgOAjIgdAAIA9iYIAZAAIA8CYgAGGHnIAsAAIgWg6gAC4IhIAAhqIgmA2IgSAAIgmg2IAABqIgcAAIAAiYIAZAAIAyBEIAxhEIAaAAIAACYgAmVIhIAAiYIA3AAQALAAAKADQALAFAGAGQAHAFAEAKQAJAUgJAUQgDAJgIAGQgIAIgJACQgLAEgKAAIgaAAIAAA2gAl4HTIAVAAQAMABAJgHQAIgIAAgLQAAgMgIgHQgJgIgMABIgVAAgAqDIhIAAiYIBdAAIAAAYIhAAAIAAAnIA4AAIAAAYIg4AAIAAAqIBCAAIAAAXgAtUIhIAAg/Ig3hZIAiAAIAkA+IAkg+IAiAAIg3BZIAAA/gAwhIhIhMhqIAABqIgcAAIAAiYIAZAAIBNBrIAAhrIAcAAIAACYgA13IhIAAiYIBdAAIAAAYIhAAAIAAAnIA4AAIAAAYIg4AAIAAAqIBCAAIAAAXgA4sIhIAAhBIhHAAIAABBIgdAAIAAiYIAdAAIAAA/IBHAAIAAg/IAdAAIAACYgACMB0IgGgEQhvhxACieQACifBxhvQAhgiApgZQCLhTCdAnQCdAnBTCLIiqBsQgagwgvgaQhEglhKAVQhLAWglBEQgmBDAWBLQAVBKBEAkQBEAmBKgVQBLgWAlhDIACABICtBjQgaAugkAkQhzB0iigBQiiABhyh0gAWuDmIAAm1IiiEBIijkBIAAG1IjjAAIAAsGIDjAAICjEJICikJIDjAAIAAMGgAyCDmIAAkhIkrAAIAAEhIjjAAIAAsGIDjAAIAAEiIErAAIAAkiIDjAAIAAMGgArhDkID3mDIj3mEIDtAAID3GEIj3GDgAkgojIEZAAIiMDcg");
	this.shape.setTransform(168.1,54.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,336.3,109.6), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7BXIAAipIA1AAIAAAbIABAAQAGgPAMgIQAMgIARAAIAJAAIAJACIAAAwIgLgDIgLgBQgPAAgKAEQgIAEgFAIQgDAHgCALQgCAKABAMIAABHg");
	this.shape.setTransform(103.2,68.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdBTQgRgGgMgMQgOgMgHgQQgHgRAAgUQAAgUAHgQQAHgQAOgMQAMgMARgGQASgHASAAQASAAAQAHQAPAGAKAMQAKAMAFAQQAGAQAAAUIAAAQIh5AAQAEAPAKAKQAKAJAPAAQANAAAIgHQAJgFAHgJIAlAbQgNAQgTAIQgTAJgVAAQgSABgSgHgAgMgwQgGADgFAFQgFAEgDAGQgDAFAAAHIBEAAQABgNgJgKQgJgJgOAAQgIAAgHACg");
	this.shape_1.setTransform(85.3,68.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWCEIg4hWIgBAAIAABWIg0AAIAAkHIA0AAIAACgIA5hCIBBAAIhEBMIBFBdg");
	this.shape_2.setTransform(66.5,63.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkBTQgRgGgNgMQgNgMgHgQQgHgRAAgUQAAgUAHgQQAHgQANgMQANgMARgGQARgHATAAQAUAAARAHQARAGANAMQANAMAHAQQAHAQAAAUQAAAUgHARQgHAQgNAMQgNAMgRAGQgRAHgUgBQgTABgRgHgAgegeQgLAMAAASQAAATALAMQALAMATAAQAUAAALgMQALgMAAgTQAAgSgLgMQgLgMgUAAQgTAAgLAMg");
	this.shape_3.setTransform(45.1,68.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7BXIAAipIA0AAIAAAbIABAAQAIgPAMgIQAKgIATAAIAJAAIAIACIAAAwIgLgDIgMgBQgPAAgIAEQgJAEgFAIQgEAHgBALQgCAKAAAMIAABHg");
	this.shape_4.setTransform(28.1,68.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhgB8IAAj3IBcAAQAPAAAQADQARACANAHQANAGAIANQAIAMAAAUQAAAWgMANQgMAOgTAGIAAAAQAMADAKADQAKAGAHAIQAHAHAEALQAEAKAAAMQAAATgIAOQgJANgNAIQgNAIgRADQgRAEgQAAgAgqBOIAwAAIANgBQAGgCAGgEQAFgDADgFQAEgGAAgIQAAgJgFgFQgEgGgHgDQgHgCgHgBIgOgCIgpAAgAgqgYIAoAAQAFAAAGgBQAGgBAFgDQAFgEADgFQADgFAAgIQAAgHgDgFQgEgFgFgEQgFgCgHgBIgMgCIglAAg");
	this.shape_5.setTransform(9.9,64.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(-4.4,0,116.1,91.6), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.2)","rgba(255,255,255,0)"],[0,1],-273.9,0,274,0).s().p("EgqzAbRMAAAg2hMBVnAAAMAAAA2hg");
	this.shape.setTransform(274,174.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,547.9,349.1), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.q2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,368,273), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-13.8,0,13.8,0).s().p("AiJSzMAAAglmIETAAMAAAAlmg");
	this.shape.setTransform(13.8,120.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,27.6,240.7), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.q1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,422,342), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(101.9,66.8,1,1,0,0,0,104.6,66.8);

	this.instance_1 = new lib.Символ36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(101.9,66.8,1,1,0,0,0,104.6,66.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-134.5,94.6,511.2,57.5), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (a1>2) {
			this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(42));

	// Слой 2
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(105.1,-16.7,0.92,1,0,0,0,104.6,66.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(32,34,46,0.698)").s().p("AwLElIAApIMAgXAAAIAAJIg");
	this.shape.setTransform(105.1,30.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(42));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.698)").s().p("AwaFDQgGgBgFgEQgEgEAAgHIAApmQAAgGAEgEQAFgEAGgBMAg1AAAQAGABAFAEQAEAEAAAGIAAJmQAAAHgEAEQgFAEgGABgAwLElMAgXAAAIAApIMggXAAAg");
	this.shape_1.setTransform(105.1,30.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.9,-1.5,470.4,70.1);


(lib.Символ25копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(103,17.1,1,1,0,0,0,147.6,10);

	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(103,17.1,1,1,0,0,0,147.6,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25копия, new cjs.Rectangle(-44.6,7.1,295.1,19.9), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(103,10,1,1,0,0,0,147.6,17.4);

	this.instance_1 = new lib.Символ27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(103,10,1,1,0,0,0,147.6,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-44.6,-7.4,295.1,34.8), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ25копия();
	this.instance.parent = this;
	this.instance.setTransform(102.5,-30.9,1,1,0,0,0,102.5,11.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},24).wait(31));

	// Слой 5
	this.instance_1 = new lib.Символ33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(99.4,-11.8,1,1,0,0,0,92.1,1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({alpha:1},25).wait(21));

	// Слой 2
	this.instance_2 = new lib.Символ25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(102.5,9.1,1,1,0,0,0,102.5,11.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({alpha:1},25).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.6,-35.5,295.1,19.9);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(-17.6,40.2,1,1,0,0,0,62,20.4);

	this.instance_1 = new lib.Символ22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-17.6,40.2,1,1,0,0,0,62,20.4);

	this.instance_2 = new lib.Символ22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-17.6,40.2,1,1,0,0,0,62,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(58.9,-16,94.6,17.3), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(47.3,8.6,1,1,0,0,0,47.3,8.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58.9,-16,94.6,17.3);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 17
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(75,21.5,1,1,0,0,0,1.5,17.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:115,alpha:1},29,cjs.Ease.quadInOut).wait(1));

	// Слой 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AonLfIAA29Ic8AAIAAW9g");
	var mask_graphics_1 = new cjs.Graphics().p("AonLfIAA29Ic8AAIAAW9g");
	var mask_graphics_2 = new cjs.Graphics().p("AolLfIAA29Ic8AAIAAW9g");
	var mask_graphics_3 = new cjs.Graphics().p("AojLfIAA29Ic8AAIAAW9g");
	var mask_graphics_4 = new cjs.Graphics().p("AofLfIAA29Ic8AAIAAW9g");
	var mask_graphics_5 = new cjs.Graphics().p("AobLfIAA29Ic8AAIAAW9g");
	var mask_graphics_6 = new cjs.Graphics().p("AoVLfIAA29Ic8AAIAAW9g");
	var mask_graphics_7 = new cjs.Graphics().p("AoPLfIAA29Ic8AAIAAW9g");
	var mask_graphics_8 = new cjs.Graphics().p("AoHLfIAA29Ic8AAIAAW9g");
	var mask_graphics_9 = new cjs.Graphics().p("An/LfIAA29Ic8AAIAAW9g");
	var mask_graphics_10 = new cjs.Graphics().p("An2LfIAA29Ic8AAIAAW9g");
	var mask_graphics_11 = new cjs.Graphics().p("AnrLfIAA29Ic8AAIAAW9g");
	var mask_graphics_12 = new cjs.Graphics().p("AngLfIAA29Ic8AAIAAW9g");
	var mask_graphics_13 = new cjs.Graphics().p("AnULfIAA29Ic8AAIAAW9g");
	var mask_graphics_14 = new cjs.Graphics().p("AnGLfIAA29Ic8AAIAAW9g");
	var mask_graphics_15 = new cjs.Graphics().p("Am5LfIAA29Ic8AAIAAW9g");
	var mask_graphics_16 = new cjs.Graphics().p("AmtLfIAA29Ic8AAIAAW9g");
	var mask_graphics_17 = new cjs.Graphics().p("AmhLfIAA29Ic8AAIAAW9g");
	var mask_graphics_18 = new cjs.Graphics().p("AmXLfIAA29Ic8AAIAAW9g");
	var mask_graphics_19 = new cjs.Graphics().p("AmNLfIAA29Ic8AAIAAW9g");
	var mask_graphics_20 = new cjs.Graphics().p("AmELfIAA29Ic8AAIAAW9g");
	var mask_graphics_21 = new cjs.Graphics().p("Al8LfIAA29Ic8AAIAAW9g");
	var mask_graphics_22 = new cjs.Graphics().p("Al2LfIAA29Ic8AAIAAW9g");
	var mask_graphics_23 = new cjs.Graphics().p("AlwLfIAA29Ic8AAIAAW9g");
	var mask_graphics_24 = new cjs.Graphics().p("AlrLfIAA29Ic8AAIAAW9g");
	var mask_graphics_25 = new cjs.Graphics().p("AlmLfIAA29Ic8AAIAAW9g");
	var mask_graphics_26 = new cjs.Graphics().p("AljLfIAA29Ic8AAIAAW9g");
	var mask_graphics_27 = new cjs.Graphics().p("AlhLfIAA29Ic8AAIAAW9g");
	var mask_graphics_28 = new cjs.Graphics().p("AlfLfIAA29Ic8AAIAAW9g");
	var mask_graphics_29 = new cjs.Graphics().p("AlfLfIAA29Ic8AAIAAW9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:130.1,y:-0.7}).wait(1).to({graphics:mask_graphics_1,x:130.1,y:-0.7}).wait(1).to({graphics:mask_graphics_2,x:130.3,y:-0.7}).wait(1).to({graphics:mask_graphics_3,x:130.5,y:-0.7}).wait(1).to({graphics:mask_graphics_4,x:130.9,y:-0.7}).wait(1).to({graphics:mask_graphics_5,x:131.3,y:-0.7}).wait(1).to({graphics:mask_graphics_6,x:131.9,y:-0.7}).wait(1).to({graphics:mask_graphics_7,x:132.5,y:-0.7}).wait(1).to({graphics:mask_graphics_8,x:133.3,y:-0.7}).wait(1).to({graphics:mask_graphics_9,x:134.1,y:-0.7}).wait(1).to({graphics:mask_graphics_10,x:135,y:-0.7}).wait(1).to({graphics:mask_graphics_11,x:136.1,y:-0.7}).wait(1).to({graphics:mask_graphics_12,x:137.2,y:-0.7}).wait(1).to({graphics:mask_graphics_13,x:138.4,y:-0.7}).wait(1).to({graphics:mask_graphics_14,x:139.8,y:-0.7}).wait(1).to({graphics:mask_graphics_15,x:141.1,y:-0.7}).wait(1).to({graphics:mask_graphics_16,x:142.3,y:-0.7}).wait(1).to({graphics:mask_graphics_17,x:143.5,y:-0.7}).wait(1).to({graphics:mask_graphics_18,x:144.5,y:-0.7}).wait(1).to({graphics:mask_graphics_19,x:145.5,y:-0.7}).wait(1).to({graphics:mask_graphics_20,x:146.4,y:-0.7}).wait(1).to({graphics:mask_graphics_21,x:147.2,y:-0.7}).wait(1).to({graphics:mask_graphics_22,x:147.8,y:-0.7}).wait(1).to({graphics:mask_graphics_23,x:148.4,y:-0.7}).wait(1).to({graphics:mask_graphics_24,x:149,y:-0.7}).wait(1).to({graphics:mask_graphics_25,x:149.4,y:-0.7}).wait(1).to({graphics:mask_graphics_26,x:149.7,y:-0.7}).wait(1).to({graphics:mask_graphics_27,x:149.9,y:-0.7}).wait(1).to({graphics:mask_graphics_28,x:150.1,y:-0.7}).wait(1).to({graphics:mask_graphics_29,x:150.1,y:-0.7}).wait(1));

	// Символ 18
	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15,21.9,1,1,0,0,0,31.7,21.9);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:159},29,cjs.Ease.quadInOut).wait(1));

	// Слой 5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AueLfIAA29Ic8AAIAAW9g");
	var mask_1_graphics_1 = new cjs.Graphics().p("AudLfIAA29Ic8AAIAAW9g");
	var mask_1_graphics_2 = new cjs.Graphics().p("AueLfIAA29Ic9AAIAAW9g");
	var mask_1_graphics_3 = new cjs.Graphics().p("AueLfIAA29Ic8AAIAAW9g");
	var mask_1_graphics_4 = new cjs.Graphics().p("AueLfIAA29Ic9AAIAAW9g");
	var mask_1_graphics_5 = new cjs.Graphics().p("AudLfIAA29Ic8AAIAAW9g");
	var mask_1_graphics_6 = new cjs.Graphics().p("AueLfIAA29Ic8AAIAAW9g");
	var mask_1_graphics_7 = new cjs.Graphics().p("AudLfIAA29Ic7AAIAAW9g");
	var mask_1_graphics_8 = new cjs.Graphics().p("AudLfIAA29Ic8AAIAAW9g");
	var mask_1_graphics_9 = new cjs.Graphics().p("AudLfIAA29Ic8AAIAAW9g");
	var mask_1_graphics_10 = new cjs.Graphics().p("AueLfIAA29Ic8AAIAAW9g");
	var mask_1_graphics_11 = new cjs.Graphics().p("AueLfIAA29Ic8AAIAAW9g");
	var mask_1_graphics_12 = new cjs.Graphics().p("AudLfIAA29Ic7AAIAAW9g");
	var mask_1_graphics_13 = new cjs.Graphics().p("AudLfIAA29Ic8AAIAAW9g");
	var mask_1_graphics_14 = new cjs.Graphics().p("AudLfIAA29Ic8AAIAAW9g");
	var mask_1_graphics_15 = new cjs.Graphics().p("AueLfIAA29Ic8AAIAAW9g");
	var mask_1_graphics_16 = new cjs.Graphics().p("AueLfIAA29Ic8AAIAAW9g");
	var mask_1_graphics_17 = new cjs.Graphics().p("AudLfIAA29Ic8AAIAAW9g");
	var mask_1_graphics_18 = new cjs.Graphics().p("AueLfIAA29Ic9AAIAAW9g");
	var mask_1_graphics_19 = new cjs.Graphics().p("AudLfIAA29Ic8AAIAAW9g");
	var mask_1_graphics_20 = new cjs.Graphics().p("AudLfIAA29Ic8AAIAAW9g");
	var mask_1_graphics_21 = new cjs.Graphics().p("AudLfIAA29Ic8AAIAAW9g");
	var mask_1_graphics_22 = new cjs.Graphics().p("AueLfIAA29Ic9AAIAAW9g");
	var mask_1_graphics_23 = new cjs.Graphics().p("AudLfIAA29Ic8AAIAAW9g");
	var mask_1_graphics_24 = new cjs.Graphics().p("AueLfIAA29Ic8AAIAAW9g");
	var mask_1_graphics_25 = new cjs.Graphics().p("AueLfIAA29Ic8AAIAAW9g");
	var mask_1_graphics_26 = new cjs.Graphics().p("AudLfIAA29Ic8AAIAAW9g");
	var mask_1_graphics_27 = new cjs.Graphics().p("AueLfIAA29Ic9AAIAAW9g");
	var mask_1_graphics_28 = new cjs.Graphics().p("AudLfIAA29Ic8AAIAAW9g");
	var mask_1_graphics_29 = new cjs.Graphics().p("AudLfIAA29Ic8AAIAAW9g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-17.6,y:-0.7}).wait(1).to({graphics:mask_1_graphics_1,x:-17.6,y:-0.7}).wait(1).to({graphics:mask_1_graphics_2,x:-17.3,y:-0.7}).wait(1).to({graphics:mask_1_graphics_3,x:-16.8,y:-0.7}).wait(1).to({graphics:mask_1_graphics_4,x:-16.1,y:-0.7}).wait(1).to({graphics:mask_1_graphics_5,x:-15.2,y:-0.7}).wait(1).to({graphics:mask_1_graphics_6,x:-14.1,y:-0.7}).wait(1).to({graphics:mask_1_graphics_7,x:-12.8,y:-0.7}).wait(1).to({graphics:mask_1_graphics_8,x:-11.3,y:-0.7}).wait(1).to({graphics:mask_1_graphics_9,x:-9.7,y:-0.7}).wait(1).to({graphics:mask_1_graphics_10,x:-7.8,y:-0.7}).wait(1).to({graphics:mask_1_graphics_11,x:-5.7,y:-0.7}).wait(1).to({graphics:mask_1_graphics_12,x:-3.5,y:-0.7}).wait(1).to({graphics:mask_1_graphics_13,x:-1,y:-0.7}).wait(1).to({graphics:mask_1_graphics_14,x:1.7,y:-0.7}).wait(1).to({graphics:mask_1_graphics_15,x:4.3,y:-0.7}).wait(1).to({graphics:mask_1_graphics_16,x:6.8,y:-0.7}).wait(1).to({graphics:mask_1_graphics_17,x:9.1,y:-0.7}).wait(1).to({graphics:mask_1_graphics_18,x:11.2,y:-0.7}).wait(1).to({graphics:mask_1_graphics_19,x:13.2,y:-0.7}).wait(1).to({graphics:mask_1_graphics_20,x:14.9,y:-0.7}).wait(1).to({graphics:mask_1_graphics_21,x:16.5,y:-0.7}).wait(1).to({graphics:mask_1_graphics_22,x:17.8,y:-0.7}).wait(1).to({graphics:mask_1_graphics_23,x:19,y:-0.7}).wait(1).to({graphics:mask_1_graphics_24,x:20.1,y:-0.7}).wait(1).to({graphics:mask_1_graphics_25,x:20.9,y:-0.7}).wait(1).to({graphics:mask_1_graphics_26,x:21.5,y:-0.7}).wait(1).to({graphics:mask_1_graphics_27,x:22,y:-0.7}).wait(1).to({graphics:mask_1_graphics_28,x:22.3,y:-0.7}).wait(1).to({graphics:mask_1_graphics_29,x:22.4,y:-0.7}).wait(1));

	// Символ 15
	this.instance_2 = new lib.Символ15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(123.9,19.5,0.285,0.285,0,0,0,168.3,54.8);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:47.9},29,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(73.5,4.3,2.9,34.4);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(102.9,25.2,1,1,0,0,0,164.5,25.2);

	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(102.9,25.2,1,1,0,0,0,164.5,25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(-61.6,0,328.9,50.4), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(122.4,25.9,1,1,0,0,0,102.9,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:102.9},49,cjs.Ease.quadInOut).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(197.4,64.3,1,1,0,0,0,53.6,64.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:102.9},49,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.6,0,391.5,166.5);


(lib.Символ6копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.q5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(83.4,160.7,1,1.364,140.7,0,0,13.7,120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6копия2, new cjs.Rectangle(-31.5,0,399.5,296.4), null);


(lib.Символ6копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.q4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(83.4,160.7,1,1.364,140.7,0,0,13.7,120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6копия, new cjs.Rectangle(-31.5,0,399.5,296.4), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.q3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(83.4,160.7,1,1.364,140.7,0,0,13.7,120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(-31.5,0,399.5,296.4), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_430 = function() {
		if (a1>2) {
			this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(430).call(this.frame_430).wait(20));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A6xsaIaPm2IbUc7I7QJmg");
	mask.setTransform(179.3,130.5);

	// Слой 6
	this.instance = new lib.Символ6копия2();
	this.instance.parent = this;
	this.instance.setTransform(393.7,198.1,0.956,0.956,-3.7,0,0,193.6,271.9);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(166).to({_off:false},0).to({regX:193.3,regY:272.2,scaleX:1,scaleY:1,rotation:0,x:193.3,y:272.2},20,cjs.Ease.quadInOut).wait(264));

	// Слой 5
	this.instance_1 = new lib.Символ6копия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(393.7,198.1,0.956,0.956,-3.7,0,0,193.6,271.9);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({_off:false},0).to({regX:193.3,regY:272.2,scaleX:1,scaleY:1,rotation:0,x:193.3,y:272.2},20,cjs.Ease.quadInOut).wait(52).to({x:152.3,y:291},15,cjs.Ease.quadInOut).wait(264));

	// Слой 2
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(393.7,198.1,0.956,0.956,-3.7,0,0,193.6,271.9);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({regX:193.3,regY:272.2,scaleX:1,scaleY:1,rotation:0,x:193.3,y:272.2},20,cjs.Ease.quadInOut).wait(45).to({x:152.3,y:291},15,cjs.Ease.quadInOut).to({_off:true},1).wait(330));

	// Слой 1
	this.instance_3 = new lib.Символ8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(184,136.5,1,1,0,0,0,184,136.5);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({x:140,y:155.3},15,cjs.Ease.quadInOut).to({_off:true},1).wait(390));

	// Слой 8
	this.instance_4 = new lib.Символ8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(184,136.5,1,1,0,0,0,184,136.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(450));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.7,368,273.8);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_430 = function() {
		if (a1>2) {
			this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(430).call(this.frame_430).wait(20));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABfXkMghWgotQgdhzCkhdIUDk2QEZgzCsDXMAhlAjRQCBB+iHB7I2nIwQg1ALg0AAQitAAibh2g");
	mask.setTransform(212,163.9);

	// Слой 3
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(39.3,172.1,1,1,65.8,0,0,273.9,174.5);
	this.instance.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:65.9,x:-74.5},49,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,rotation:65.8,x:17.3},400).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(209,156.5,1,1,0,0,0,184,136.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(450));

	// Слой 1
	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(211,171,1,1,0,0,0,211,171);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(450));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-52,585.1,394);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var domOverlay = document.getElementById("dom_overlay_container");
		//domOverlay.style.border = '1px solid rgba( 0, 0, 0, 0.5)'; // width solid/dotted/dashed + color 05 = alpha
		domOverlay.style.border = '1px solid #FFFFFF'; // width solid/dotted/dashed + color 05 = alpha
		domOverlay.style.boxSizing = 'border-box';
	}
	this.frame_429 = function() {
		a1+=1
		if (a1>2) {
			this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(429).call(this.frame_429).wait(21));

	// Слой 25
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(196.1,334.4,1,1,0,0,0,168,140);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({_off:true},1).wait(431).to({_off:false},0).to({alpha:1},13,cjs.Ease.quadInOut).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ16("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(154.1,47.4,1,1,0,0,0,95.3,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(450));

	// Слой 9
	this.instance_2 = new lib.Символ31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,427.9,2.142,1.837,0,0,0,105.1,30.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(149).to({_off:false},0).to({regX:105.2,regY:30.8,scaleX:1.17,scaleY:1,x:150.2,y:427.8,alpha:1},31,cjs.Ease.elasticOut).wait(179).to({regX:105.3,scaleX:1.02,scaleY:0.87,y:433.9,alpha:0.5},10,cjs.Ease.quadInOut).to({regX:105.2,scaleX:1.17,scaleY:1,y:427.8,alpha:1},29,cjs.Ease.quadInOut).wait(52));

	// Слой 6
	this.instance_3 = new lib.Символ10("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.1,139.5,0.84,0.84,0,0,0,103,64.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(450));

	// Слой 12
	this.instance_4 = new lib.Символ23("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(73,579.9,1.26,1.26,0,0,0,41.8,10.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(180).to({_off:false},0).wait(270));

	// Слой 11
	this.instance_5 = new lib.Символ20("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(151.2,488.6,1,1,0,0,0,47.3,8.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(189).to({_off:false},0).wait(261));

	// Слой 1
	this.instance_6 = new lib.Символ4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(27,350.1,1,1,0,0,0,211,171);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:219},49,cjs.Ease.quadInOut).to({x:141},250,cjs.Ease.quadInOut).wait(151));

	// Слой 13
	this.instance_7 = new lib.Символ26();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-140,300,1,1,0,0,0,480,300);
	this.instance_7.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:430},49,cjs.Ease.quadInOut).to({x:170},250,cjs.Ease.quadInOut).wait(151));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#911515","#DB3433"],[0,1],0,-300,0,300).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(450));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-470,300,1590,1050);
// library properties:
lib.properties = {
	id: '0508C32FB0B8B040A61AF9D6034BA46D',
	width: 300,
	height: 600,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/q1.png", id:"q1"},
		{src:"images/q2.png", id:"q2"},
		{src:"images/q3.png", id:"q3"},
		{src:"images/q4.png", id:"q4"},
		{src:"images/q5.png", id:"q5"},
		{src:"images/q7.jpg", id:"q7"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0508C32FB0B8B040A61AF9D6034BA46D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;