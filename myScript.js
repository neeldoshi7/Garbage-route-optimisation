console.log("connected");

// browser.addScriptContextListener(new ScriptContextAdapter() {
//     @Override
//     public void onScriptContextCreated(ScriptContextEvent <span class="fr-marker" data-id="0" data-type="false" style="display: none; line-height: 0;"></span><span class="fr-marker" data-id="0" data-type="true" style="display: none; line-height: 0;"></span>event) {
//         Browser browser = event.getBrowser();
//         JSValue window = browser.executeJavaScriptAndReturnValue("window");
//         window.asObject().setProperty("java", new GBO());
//     }
// });

xCdns = [];
yCdns = [];

xBase = 500;
yBase = 500;

function point_it(event) {
		pos_x = event.offsetX ? (event.offsetX) : event.pageX - document.getElementById("pointer_div").offsetLeft;
		pos_y = event.offsetY ? (event.offsetY) : event.pageY - document.getElementById("pointer_div").offsetTop;
		console.log("x is "+pos_x + " y is "+pos_y);

    xCdns.push(pos_x);
    yCdns.push(pos_y);

    console.log("xCdns is "+xCdns + " yCdns is " + yCdns);
	}

function calibrate() {

  class TSP {

    var N,start;
    var

    constructor() {

    }
  }

}
