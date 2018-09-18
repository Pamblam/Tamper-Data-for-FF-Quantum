
document.getElementById("n").onclick = ()=>respond(false);
document.getElementById("y").onclick = ()=>respond(true);

function respond(r) {
	var types = [];
	Array.from(document.querySelectorAll(".types")).forEach(inp=>{
		if(inp.checked) types.push(inp.value);
	});
	browser.runtime.sendMessage({
		tamper: r,
		types: types,
		pattern: document.getElementById("matchregex").value
	});
}

function firefox57_workaround_for_blank_panel() {
	browser.windows.getCurrent().then((currentWindow) => {
		browser.windows.update(currentWindow.id, {
			width: currentWindow.width,
			height: currentWindow.height + 1, // 1 pixel more than original size...
		});
	});
}

firefox57_workaround_for_blank_panel();