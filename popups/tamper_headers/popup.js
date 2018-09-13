
var data = JSON.parse(decodeURIComponent(window.location.href.split("?")[1]));

document.getElementById("url").value = data.url;
document.getElementById("method").innerHTML = data.method;
document.getElementById("type").innerHTML = data.type;

var tbody = document.getElementById('headersbody');
data.headers.forEach(header=>{
	var row = document.createElement("tr");
	row.innerHTML = `<td>${header.name}</td><td><input class='headers' value='${header.value}' data-name='${header.name}'></td>`;
	tbody.appendChild(row);
});

document.getElementById('ok').onclick = function(){
	var headers = [];
	Array.from(document.querySelectorAll(".headers")).forEach(inp=>{
		headers.push({
			name: inp.getAttribute('data-name'),
			value: inp.value
		});
	});
	browser.runtime.sendMessage({
		headers: headers
	});
};

function firefox57_workaround_for_blank_panel() {
	browser.windows.getCurrent().then((currentWindow) => {
		browser.windows.update(currentWindow.id, {
			width: currentWindow.width,
			height: currentWindow.height + 1, // 1 pixel more than original size...
		});
	});
}

firefox57_workaround_for_blank_panel();