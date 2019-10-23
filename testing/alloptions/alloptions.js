const myProductName = "alloptions", myVersion = "0.4.0";    

const utils = require ("daveutils");

function everyMinute () { 
	console.log ("\n" + myProductName + ": " + new Date ().toLocaleTimeString () + ".");
	}

console.log ("\n" + myProductName + " v" + myVersion + "\n");

utils.runEveryMinute (everyMinute);
