
var handleMessage = ()=>{};

function rewriteUserAgentHeader(e) {
	return new Promise(done=>{
		e.requestHeaders.forEach(function (header) {
			console.log('farts', header);
		});
		done({requestHeaders: e.requestHeaders});
	});
}

function startTamper(){
	browser.webRequest.onBeforeSendHeaders.addListener(
		rewriteUserAgentHeader,
		{urls: ["<all_urls>"]},
		["blocking", "requestHeaders"]
	);
}

function openWindow(){
	browser.windows.create({
		url: "popups/test.html?poop=shits",
		type: "panel",
		width: 500,
		height: 300,
		allowScriptsToClose: true
	}).then(windows=>{
		handleMessage = msg=>{
			console.log("msg", msg);
		};
	});
}

browser.runtime.onMessage.addListener(handleMessage);
browser.browserAction.onClicked.addListener(openWindow);