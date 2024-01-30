(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,1379,399],[1381,0,323,253]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_11 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(img.CachedBmp_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2840,1604);


(lib.CachedBmp_9 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(img.CachedBmp_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3975,2255);


(lib.CachedBmp_7 = function() {
	this.initialize(img.CachedBmp_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3140,1473);


(lib.CachedBmp_6 = function() {
	this.initialize(img.CachedBmp_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2921,1322);


(lib.CachedBmp_5 = function() {
	this.initialize(img.CachedBmp_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2921,1322);


(lib.CachedBmp_4 = function() {
	this.initialize(img.CachedBmp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3449,931);


(lib.CachedBmp_3 = function() {
	this.initialize(img.CachedBmp_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3746,2150);


(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4305,2908);


(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4207,2532);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.WinText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(195,0,0,0)").ss(0.1,1,1).p("EgzTgXmMBmnAAAQEoAADRDQQDRDSAAEoIAAY5QAAEojRDRQjRDSkoAAMhmnAAAQkoAAjRjSQjRjRAAkoIAA45QAAkoDRjSQDRjQEoAAg");
	this.shape.setTransform(353.525,104.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("EgzTAXnQkoAAjRjRQjRjRAAkoIAA45QAAkoDRjRQDRjSEoABMBmnAAAQEogBDRDSQDRDRAAEoIAAY5QAAEojRDRQjRDRkoAAg");
	this.shape_1.setTransform(353.525,104.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WinText, new cjs.Rectangle(-47.3,-47.3,801.6999999999999,304.3), null);


(lib.title = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(0,0,1420,802), null);


(lib.textCuba = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Cuba lagi ??", "37px 'Zombie Slayer'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 9;
	this.text.lineWidth = 209;
	this.text.parent = this;
	this.text.setTransform(578.05,10.85,5.4279,5.4279);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.textCuba, new cjs.Rectangle(0,0,1156.4,231), null);


(lib.startmaze = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(-3.55,0.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C30000").ss(11,1,1).p("AAAqUIAAAAQESAADBDCQDCDBAAERIAAAAQAAESjCDBQjBDCkSAAIAAAAQkRAAjBjCQjCjBAAkSIAAAAQAAkRDCjBQDBjCERAAg");
	this.shape.setTransform(66.075,66.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C30000").s().p("AAAKVQkRAAjBjCQjCjBAAkSIAAAAQAAkRDCjBQDBjCERAAIAAAAQESAADBDCQDCDBAAERIAAAAQAAESjCDBQjBDCkSAAg");
	this.shape_1.setTransform(66.075,66.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-5.5,163.5,143.2);


(lib.startbut = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C30000").ss(3,1,1).p("An/ovIAAReIP/pFg");
	this.shape.setTransform(115.525,106);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("An/ovIP/IZIv/JFg");
	this.shape_1.setTransform(115.525,106);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(195,0,0,0)").ss(0.1,1,1).p("AnEvPIOJAAQGVAAEdEdQEeEeAAGUIAAAAQAAGVkeEdQkdEemVAAIuJAAQmVAAkekeQkdkdAAmVIAAAAQAAmUEdkeQEekdGVAAg");
	this.shape_2.setTransform(100.05,107.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AnEPQQmVAAkekeQkdkdAAmVIAAAAQAAmUEdkeQEekdGVAAIOJAAQGVAAEdEdQEeEeAAGUIAAAAQAAGVkeEdQkdEemVAAg");
	this.shape_3.setTransform(100.05,107.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.8,8.6,287.8,197.20000000000002);


(lib.maze = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B20000").ss(61,1,1).p("ECV6gEfIAADDEiV5gEfIAAI/");
	this.shape.setTransform(1067.55,1431.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#8E0000").ss(61,1,1).p("AAAgdIAAA7");
	this.shape_1.setTransform(108.15,1463.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#009900").ss(61,1,1).p("ECUqhc/IAAA9IBbAAIR/AAECUqhkLIAAHMECUqBPMIAAi3IBbAAIQvAAECUqBPMIAAeZECWFhcCMAAACoXEiYlhcCIBcAAIAAg9MErzAAAEiXJhtkIAAQlEifShcCIGtAAMAAACoXIBcAAIAAC3IAAeZEioDBMVIPeAAEiXJBPMMErzAAA");
	this.shape_2.setTransform(1075.575,701.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#009900").ss(15,1,1).p("EBDBhKdIO2AAIAAdsEAluhAaIO2AAIAAJmIbSAAEAluhAaIAATMIu2AAIAAKEIAAJ0IM1AAEBDBhKdIAAJlEA1xgtOIODAAEBf6gitIudAAIAAJlItPAAEBRdgZIIAAJnIPDAAIPDAAIAAUFIAAUHIAAIsI+GAAIAAVZEA0kghzIAASSINpAAIAAL4IPQAAIAAR0IuDAAEBBAAFQI7SAAIAAT1EAmhgitIdTAAIAApmEBf6gitIAAHxEBf6AEkIPpAAEBgggPhIAAKhEBf6g+lIAAb4EBfGAOLItpAAEBR3hKdIdsAAMAAAA68EBhgAYrIODAAEBh6AtPINPAAIAASvEBRdBKeIdsAAIAAqLEBh6BAKINPAAEBCnAZIIAAIPIO2AAEAy9Aq9IAAJJEAWEAh0Ic5AAIAAJJIPqAAEBf6A21I+gAAIAAIOI8GAAIAAoAI9sAAEBRdBBzIAAIrEA0KAF8IAASvIc5AAEAHog2XIAAJJEgG0g/CIAAIrIOcAAIOcAAEAHohKdIAAUGEgWdhA4IAAJnEhBZg2XIcfAAIAAKhIOdAAIO2AAEgWdhKdIAAJlI+GAAEgzwgafIAaAAEgzwgitIAAIOA2djpIAAINIefAAEgltAFCIAAJmIAAJmEgltgWYIAAbaI9TAAIgZAAIAAbaEgzwgitIc5AAAW45WIAAJ1IdSAAAmA3SIOCAAIAAIrIvpAAIAAG3EBCNgDpMg6LAAAIAAINIAAIPIOCAAIAAVBIAAKDEgEzgjKIbrAAEgzwgq7IAAIOEglTgOnIdsAAAG0ZmIuBAAIAAq+I+gAAEgWdgr2IAAcVEgWdhKdIeFAAMA7ZAAAEhuvhAaIAAqDIPQAAIAATpEhvig1cIAAIrIeGAAEhBZg2XIAAKhEhQPhA4IO2AAIAAKhEhRCg0/IAARYIO2AAIAAJIIOcAAEhRCgO1IAAp1Iu3AAIAAosEhvigPhINpAAEhR2AiRIAA0GIuDAAIAAzLIO3AAIAAp1IcfAAEg1XgCvItpAAIAAHxEhP1AFCIMcAAEhvigsxIAAdQMAAAAnSINpAAEhviA/hMAsiAAAIAAyvIu2AAIAAqhItpAAIAAUHIM2AAEhviA/hIAAK9MCGAAAAMA6/AAAEhviAXxMAAAAnwEgW3A1AIAAK+MAtVAAAIAAKgEgHNAh0IdRAAEAlUAvEIAAH/EAG0AtPIAAJ0EgHNAh0IAAUHA2DZmIAAIOIO2AAEgW3AunIAAGZEgltA+mIAApmIO2AAEgy8Ah0IAAKDIAATMEgy8Ah0Ic5AAEgmgAr3IscAAEhffhKdMBJCAAAEgy8APiIAASSEAW4hAaIO2AAEAluAFQIuDAA");
	this.shape_3.setTransform(1056.875,650.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.maze, new cjs.Rectangle(-30.5,-30.5,2212.2,1527.1), null);


(lib.lostGame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C30000").ss(61,1,1).p("ECUqhYfIAAA9IBbAAIR/AAECUqhfrIAAHMECUqBTsIAAi3IBbAAIQvAAECUqBTsIAAVZECWFhXiMAAACoXEiYlhXiIBcAAIAAg9MErzAAAEiXJhpEIAAQlEifShXiIGtAAMAAACoXIBcAAIAAC3IAAVZEioDBQ1IPeAAEiXJBTsMErzAAA");
	this.shape.setTransform(1075.575,672.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C30000").ss(15,1,1).p("EBDBhKdIO2AAIAAdsEAluhAaIO2AAIAAJmIbSAAEAluhAaIAATMIu2AAIAAKEIAAJ0IM1AAEBDBhKdIAAJlEA1xgtOIODAAEBf6gitIudAAIAAJlItPAAEBRdgZIIAAJnIPDAAIPDAAIAAUFIAAUHIAAIsI+GAAIAAVZEA0kghzIAASSINpAAIAAL4IPQAAIAAR0IuDAAEBBAAFQI7SAAIAAT1EAmhgitIdTAAIAApmEBf6gitIAAHxEBf6AEkIPpAAEBgggPhIAAKhEBf6g+lIAAb4EBfGAOLItpAAEBR3hKdIdsAAMAAAA68EBhgAYrIODAAEBh6AtPINPAAIAASvEBRdBKeIdsAAIAAqLEBh6BAKINPAAEBCnAZIIAAIPIO2AAEAy9Aq9IAAJJEAWEAh0Ic5AAIAAJJIPqAAEBf6A21I+gAAIAAIOI8GAAIAAoAI9sAAEBRdBBzIAAIrEA0KAF8IAASvIc5AAEAHog2XIAAJJEgG0g/CIAAIrIOcAAEAHohKdIAAUGIOcAAEgWdhA4IAAJnEhBZg2XIcfAAIAAKhIOdAAIO2AAEgWdhKdIAAJlI+GAAEgzwgafIAaAAEgzwgitIAAIOA2djpIAAINIefAAEgltAFCIAAJmIAAJmEgltgWYIAAbaI9TAAIgZAAIAAbaEgzwgitIc5AAAW45WIAAJ1IdSAAAmA3SIOCAAIAAIrIvpAAIAAG3EBCNgDpMg6LAAAIAAINIAAIPIOCAAIAAVBIAAKDEgEzgjKIbrAAEgzwgq7IAAIOEglTgOnIdsAAAG0ZmIuBAAIAAq+I+gAAEgWdhKdIeFAAMA7ZAAAEgWdgr2IAAcVEhuvhAaIAAqDIPQAAIAATpEhvig1cIAAIrIeGAAEhBZg2XIAAKhEhQPhA4IO2AAIAAKhEhRCg0/IAARYIO2AAIAAJIIOcAAEhRCgO1IAAp1Iu3AAIAAosEhvigPhINpAAEhR2AiRIAA0GIuDAAIAAzLIO3AAIAAp1IcfAAEg1XgCvItpAAIAAHxEhP1AFCIMcAAEhvigsxIAAdQMAAAAnSINpAAEhviA/hMAsiAAAIAAyvIu2AAIAAqhItpAAIAAUHIM2AAEhviA/hIAAK9MCGAAAAMA6/AAAEhviAXxMAAAAnwEgW3A1AIAAK+MAtVAAAIAAKgEgHNAh0IdRAAEAlUAvEIAAH/EAG0AtPIAAJ0EgHNAh0IAAUHA2DZmIAAIOIO2AAEgW3AunIAAGZEgltA+mIAApmIO2AAEgy8Ah0IAAKDIAATMEgy8Ah0Ic5AAEgmgAr3IscAAEhffhKdMBJCAAAEgy8APiIAASSEAW4hAaIO2AAEAluAFQIuDAA");
	this.shape_1.setTransform(1056.875,650.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lostGame, new cjs.Rectangle(-30.5,-30.5,2212.2,1405.9), null);


(lib.jumpscare = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jumpscare, new cjs.Rectangle(0,0,1987.5,1127.5), null);


(lib.ins = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(-31.2,-29.1,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_6();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ins, new cjs.Rectangle(-31.2,-29.1,1570,736.5), null);


(lib.hantu2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hantu2, new cjs.Rectangle(0,0,1724.5,465.5), null);


(lib.hantu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hantu, new cjs.Rectangle(0,0,1873,1075), null);


(lib.endmaze = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("ALAM\nASAL", "37px 'Zombie Slayer'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 154;
	this.text.parent = this;
	this.text.setTransform(75.9,12.95,1.5586,1.5586);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(195,0,0,0)").ss(0.1,1,1).p("ALuAAQAAE2jcDcQjcDck2AAQk2AAjcjcQjbjcAAk2QAAk2DbjcQDcjbE2AAQE2AADcDbQDcDcAAE2g");
	this.shape.setTransform(75,75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AoSISQjbjcAAk2QAAk2DbjbQDdjcE1AAQE2AADcDcQDcDbAAE2QAAE2jcDcQjcDck2AAQk1AAjdjcg");
	this.shape_1.setTransform(75,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.2,-1,246.3,152);


(lib.cubalagi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AriZ+QikgwiMheQh7hSiIiPQlsmBgkl8QgCgVAAgSIgTgWQgegqAIglQAHghAjgYQAZgQAtgQIFkh+QArgPAXgFQAlgHAeAFQAtAJAjAmQAhAjAQAxQAMAmAGA4IAIBhQAMB2ApBxQApBxBDBiQBLBvBhBIQBsBRB2AVQBTAPBlgNQBMgKBqgdQBggcBCgcQBXgmA8gyQBWhGBRiMQBUiUAmiMQAsiigTiSQgKhNgfhcQgTg4gshqQgmhbgXguQglhLgpg1QhJhehtg9Qhqg8h4gQQh2gPh4AbQh3AahnBAQBxA1A5AgQBcA0A+A6QALALAJAKQAWALAQAPQAXAWAIAbQAIAegLAiQgKAegWAcQgOASgfAeQggAfgOAQQgeApgRAUQgdAigeAKQgnANgwgWQghgPgvglIjxjCQhCg1gmgUQgagNgngNIhDgWQhMgYiOg7QgZgLgPgIQgVgMgMgPQgbghAGg2QAEglAWg5QAqhuBHjSIClnfQAUg7ARgfQAagvAjgZQAkgZA0gHQAogFA5AGQA1AFAkAKQAvAOAfAbQAMALAPARIAYAeQAaAgAHAQQAPAhgJAtQgGAfgWAuIgZA1QAFAGADAJQAFARgFAVQgDAOgKAYIhlDlQA7gcA+gVQDYhLDYANQDfAPDFBtQDKBvB4C1QAsBCAmBVQAeBBAiBeQBPDeAcCwQAjDdgnC5QgaB6hDCRQhWC8h1CcQh9CliZB4QigB+i5BIQjBBKjEAEIgZAAQicAAiYgsgALZaSIgVgdQgWgggNgPQgXgYgEgJQgNgXAKgSQALgGAPAPQA0AvAvA7QAGAIABAFQABAHgGALQgJATgMABQgJAAgLgQgAm0PKQgHgDgCgDQgFgFgDgMIgOg4QgFgWABgLQABgLAHgSQAJgVACgHQAGgEAIAEQAHADAEAIIAHAOQADAJAEAFQAFAFAMAIQAHAHADAMQALAjgJAiQgDANgHAJQgJALgLABIgBAAQgIAAgNgFgAUwJfQgwgCgXgLQAVgiBGgGQAvgEBQABQBhAAAfgBQA3gCAwgGQAdgEAIAOQAIANgNAPQgNARgZAHQgSAEgeABQhGAChEAAQheAAhcgEgAjZI+IhcgEIgRgCQgVgFgbgfIAGgMQAPABAEgIQAXAPAMADQAJADASACIBgAIIAGATQgFALgXAAIgEAAgAOKqzQAdgdA8gOIAxgKQAegFATgHQAcgKAXgPQAOgEAOALQANAKAFAQQADALgCAKQgBALgIAGQgGAEgIACIgQACQgJACgOAGIgXAJQgOAEgdABIiYAHgAObxBIgGgSIBag7QAXgQAPgEIAAgGIAfAGIAGATQgFAIgMAFIgVAGQgMAFgOALIglAaQgRALgLAEQgJAEgJAAQgGAAgGgCgAkn1yQgHgiABgjIABgvQgBgcgHgTIgIgUQgDgLAEgIQAFgJAMgCQAMgBAKAGQAXANAJAdQAGAVgBAhQAAAlgHBHQgFAmgTADQgTgEgGghgAGi3fQAMgoAIgUQANgiARgWQAMgRACgFQADgIgBgMIAAgUQACgLAIgIQAIgIAJAEQAFACAGAJQAKASACAUQABAVgIARQgEAHgHAJIgNAQIgeAzQgSAfgTAMg");
	this.shape.setTransform(166.1019,29.6871);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,0,0,0)").ss(25,1,1).p("AdWcTQpoH0s4AAQu+AAqnqnQqmqmAAu/QAAu/KmqnQJPpOMhhN");
	this.shape_1.setTransform(-36.4875,81.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("A5lZmQqmqngBu/QABu/KmqmQBghgBmhTQJpn0M2AAQPAAAKmKnQKmKmABO/QgBO/qmKnQpOJOsjBNQh4ALh9AAQu/AAqmqmg");
	this.shape_2.setTransform(126.8,31.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-236.8,-199.9,595.3,524.6);


(lib.buttongame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C30000").ss(11,1,1).p("ACmh8IAAD/IAAEAIMTmUIsTlxIAAEGIxeAAIAAD/IReAA");
	this.shape.setTransform(270.35,72.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C30000").s().p("ACnCDIxeAAIAAj/IReAAIAAD/IAAj/IAAkGIMRFxIsRGUgACnh8g");
	this.shape_1.setTransform(270.35,72.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(195,0,0,0)").ss(0.1,1,1).p("A52rKMAztAAAQEoAADRDSQDSDRAAEnQAAEojSDRQjRDSkoAAMgztAAAQkoAAjRjSQjSjRAAkoQAAknDSjRQDRjSEoAAg");
	this.shape_2.setTransform(272.7076,71.5211,0.6582,0.834);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("A52LKQkoABjRjSQjSjRABkoQgBknDSjRQDRjSEoAAMAztAAAQEoAADRDSQDRDRAAEnQAAEojRDRQjRDSkogBg");
	this.shape_3.setTransform(272.7076,71.5211,0.6582,0.834);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(115.8,11,313.9,121.1);


(lib.bg2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg2, new cjs.Rectangle(0,0,2152.5,1454), null);


(lib.background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(0,0,2103.5,1266), null);


(lib.hantuWin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hantu2();
	this.instance.setTransform(862.2,232.6,1,1,0,0,0,862.2,232.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hantuWin, new cjs.Rectangle(0,0,1724.5,465.5), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		stage.enableMouseOver ();
		
		this.bg.visible=true;
		this.title.visible=true;
		this.ins.visible=false;
		this.hantu.visible=false;
		this.startIns.visible=false;
		this.bg2.visible=false;
		this.maze.visible=false;
		this.lostGame.visible=false;
		this.jumpscare.visible=false;
		this.startMaze.visible=false;
		this.endmaze.visible=false;
		this.textWin.visible=false;
		this.hantu2.visible=false;
		this.cubalagi.visible=false;
		this.textCuba.visible=false;
		
		var  root = this;
		
		this.startHome.addEventListener("click",ToTheIns);
		
		function ToTheIns(){
			
			root.title.visible=false;
			root.startHome.visible=false;
			root.ins.visible=true;
			root.hantu.visible=true;
			root.startIns.visible=true;
			root.bg.visible=true;
		}
		
		this.startIns.addEventListener("click",ToTheGame);
		
		function ToTheGame(){
			
			root.ins.visible=false;
			root.hantu.visible=false;
			root.startIns.visible=false;
			root.bg.visible=false;
			root.bg2.visible=true;
			root.startMaze.visible=true;
		}
		
		this.startMaze.addEventListener("click",ToTheMaze);
		
		function ToTheMaze(){
			
			root.bg2.visible=true;
			root.startMaze.visible=false;
			root.maze.visible=true;
			root.endmaze.visible=true;
			root.cubalagi.visible=false;
		    root.textCuba.visible=false;
			
			
		}
		
		this.maze.addEventListener("mouseover",YouLostGame);
		
		function YouLostGame(){
			
			root.bg2.visible=false;
			root.endmaze.visible=false;
			root.lostGame.visible=true;
			root.jumpscare.visible=true;
			
		}
		
		this.jumpscare.addEventListener("click",Rematch);
		
		function Rematch(){
			
		    root.cubalagi.visible=true;
			root.textCuba.visible=true;
			root.bg2.visible=true;
			root.maze.visible=false;
			root.lostGame.visible=false;
			root.jumpscare.visible=false;
			
		}
		
		this.cubalagi.addEventListener("click",CubaLagi);
		
		function CubaLagi(){
		
			root.bg2.visible=true;
			root.startMaze.visible=true;	
			root.lostGame.visible=false;
			root.jumpscare.visible=false;
			root.maze.visible=false;
			
		}
		
		
		this.endmaze.addEventListener("mouseover",YouWonGame);
		
		function YouWonGame(){
			
			root.bg2.visible=false;
			root.endmaze.visible=false;
			root.lostGame.visible=false;
			root.jumpscare.visible=false;
			root.textWin.visible=true;
			root.hantu2.visible=true;
			root.maze.visible=false;
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// textTRY
	this.textCuba = new lib.textCuba();
	this.textCuba.name = "textCuba";
	this.textCuba.setTransform(957.8,262.45,1,1,0,0,0,578.2,115.5);

	this.timeline.addTween(cjs.Tween.get(this.textCuba).wait(1));

	// cubalagi
	this.cubalagi = new lib.cubalagi();
	this.cubalagi.name = "cubalagi";
	this.cubalagi.setTransform(969.05,710.65,1,1,0,0,0,152.3,132.8);
	new cjs.ButtonHelper(this.cubalagi, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.cubalagi).wait(1));

	// HANTU
	this.hantu2 = new lib.hantuWin();
	this.hantu2.name = "hantu2";
	this.hantu2.setTransform(998,805.55,1,1,0,0,0,862.2,232.6);

	this.timeline.addTween(cjs.Tween.get(this.hantu2).wait(1));

	// TEXT
	this.textWin = new lib.WinText();
	this.textWin.name = "textWin";
	this.textWin.setTransform(950,325.85,1,1,0,0,0,344.8,99.9);

	this.timeline.addTween(cjs.Tween.get(this.textWin).wait(1));

	// setan
	this.jumpscare = new lib.jumpscare();
	this.jumpscare.name = "jumpscare";
	this.jumpscare.setTransform(963.15,547.3,1,1,0,0,0,993.6,563.8);

	this.timeline.addTween(cjs.Tween.get(this.jumpscare).wait(1));

	// lost
	this.lostGame = new lib.lostGame();
	this.lostGame.name = "lostGame";
	this.lostGame.setTransform(971.4,556.4,1,1,0,0,0,1075.5,672.5);

	this.timeline.addTween(cjs.Tween.get(this.lostGame).wait(1));

	// maze
	this.maze = new lib.maze();
	this.maze.name = "maze";
	this.maze.setTransform(971.4,617,1,1,0,0,0,1075.5,733.1);

	this.timeline.addTween(cjs.Tween.get(this.maze).wait(1));

	// endmaze
	this.endmaze = new lib.endmaze();
	this.endmaze.name = "endmaze";
	this.endmaze.setTransform(1770.6,791.85,1,1,0,0,0,75,75);
	new cjs.ButtonHelper(this.endmaze, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.endmaze).wait(1));

	// startmaze
	this.startMaze = new lib.startmaze();
	this.startMaze.name = "startMaze";
	this.startMaze.setTransform(144.6,149.4,1,1,0,0,0,66,66);
	new cjs.ButtonHelper(this.startMaze, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.startMaze).wait(1));

	// background
	this.bg2 = new lib.bg2();
	this.bg2.name = "bg2";
	this.bg2.setTransform(1028.2,472.5,1,1,0,0,0,1076.2,726.9);

	this.timeline.addTween(cjs.Tween.get(this.bg2).wait(1));

	// tothegame
	this.startIns = new lib.buttongame();
	this.startIns.name = "startIns";
	this.startIns.setTransform(1627.75,974.05,1,1,0,0,0,237,71.5);
	new cjs.ButtonHelper(this.startIns, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.startIns).wait(1));

	// hantu
	this.hantu = new lib.hantu();
	this.hantu.name = "hantu";
	this.hantu.setTransform(966.5,544.6,1,1,0,0,0,936.5,537.5);

	this.timeline.addTween(cjs.Tween.get(this.hantu).wait(1));

	// text
	this.ins = new lib.ins();
	this.ins.name = "ins";
	this.ins.setTransform(1047.75,472.8,1,1,0,0,0,730.2,330.5);

	this.timeline.addTween(cjs.Tween.get(this.ins).wait(1));

	// startgame
	this.startHome = new lib.startbut();
	this.startHome.name = "startHome";
	this.startHome.setTransform(975.2,968.2,0.8087,0.8087,0,0,0,106,106);
	new cjs.ButtonHelper(this.startHome, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.startHome).wait(1));

	// title
	this.title = new lib.title();
	this.title.name = "title";
	this.title.setTransform(985.75,505.55,1,1,0,0,0,710.1,401.1);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// background
	this.bg = new lib.background();
	this.bg.name = "bg";
	this.bg.setTransform(957.75,547.4,1,1,0,0,0,1051.8,633);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(825.4,285.6,1279.1,1094.9);
// library properties:
lib.properties = {
	id: '830A8D34ECE2854FB43046A36086D8C6',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#2B0000",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_10.png?1706562241563", id:"CachedBmp_10"},
		{src:"images/CachedBmp_8.png?1706562241563", id:"CachedBmp_8"},
		{src:"images/CachedBmp_7.png?1706562241563", id:"CachedBmp_7"},
		{src:"images/CachedBmp_6.png?1706562241563", id:"CachedBmp_6"},
		{src:"images/CachedBmp_5.png?1706562241563", id:"CachedBmp_5"},
		{src:"images/CachedBmp_4.png?1706562241563", id:"CachedBmp_4"},
		{src:"images/CachedBmp_3.png?1706562241563", id:"CachedBmp_3"},
		{src:"images/CachedBmp_2.png?1706562241563", id:"CachedBmp_2"},
		{src:"images/CachedBmp_1.png?1706562241563", id:"CachedBmp_1"},
		{src:"images/index_atlas_1.png?1706562241518", id:"index_atlas_1"}
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
an.compositions['830A8D34ECE2854FB43046A36086D8C6'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;