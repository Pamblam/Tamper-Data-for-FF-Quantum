
var data = JSON.parse(decodeURIComponent(window.location.href.split("?")[1]));

document.getElementById("url").value = data.url;
document.getElementById("method").appendChild(document.createTextNode(data.method));
document.getElementById("type").appendChild(document.createTextNode(data.type));

var tbody = document.getElementById('headersbody');
data.headers.forEach(header=>{
	var row = document.createElement("tr");
	var td1 = document.createElement("td");
	var tn1 = document.createTextNode(header.name);
	td1.appendChild(tn1);
	row.appendChild(td1);
	var td2 = document.createElement("td");
	var inpt = document.createElement("input");
	inpt.setAttribute('value', header.value);
	inpt.setAttribute('data-name', header.name);
	inpt.setAttribute('class', 'headers');
	td2.appendChild(inpt);
	row.appendChild(td2);
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