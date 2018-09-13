
var data = JSON.parse(decodeURIComponent(window.location.href.split("?")[1]));

document.getElementById("url").value = data.url;
document.getElementById("method").innerHTML = data.method;
document.getElementById("type").innerHTML = data.type;

var norq = document.getElementById('norq');
var bodytbl = document.getElementById('bodytbl');
if(data.body.length) norq.parentNode.removeChild(norq);
else bodytbl.parentNode.removeChild(bodytbl);

var tbody = document.getElementById('bodybody');
data.body.forEach(body=>{
	var row = document.createElement("tr");
	row.innerHTML = `<td>${body.name}</td><td><input class='headers' value='${body.value}' readonly=readonly></td>`;
	tbody.appendChild(row);
});

document.getElementById('ok').onclick = function(){
	var url = document.getElementById("url").value;
	browser.runtime.sendMessage({
		cancel: false,
		redirect: data.url != url ? url : false
	});
};

document.getElementById('cancel').onclick = function(){
	browser.runtime.sendMessage({
		cancel: true
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