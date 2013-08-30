/**
 * @author jiangtao
 */

// webgl render

XIA.GLRender = function (canvas, attributes) {

	canvas = canvas || document.createElement("canvas");
	
	if (typeof canvas == 'string') {
		
		canvas = document.getElementById(canvas);
	}
	
    this.context = null;
    var names = ["webgl", "experimental-webgl"];
    for (var i = 0; i < names.length; ++i) {
      try {
        this.context = canvas.getContext(names[i], attributes);
      } catch (e) {
      }
      if (this.context) {
        break;
      }
    }
    if (!this.context) {
      testFailed("Unable to fetch WebGL rendering context for Canvas");
    }	

};


XIA.GLRender.prototype = {

	constructor: XIA.GLRender,

};


