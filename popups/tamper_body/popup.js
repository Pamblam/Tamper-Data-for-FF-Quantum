
var data = JSON.parse(decodeURIComponent(window.location.href.split("?")[1]));

document.getElementById("url").value = data.url;

document.getElementById("method").appendChild(document.createTextNode(data.method));
document.getElementById("type").appendChild(document.createTextNode(data.type));

var norq = document.getElementById('norq');
var bodytbl = document.getElementById('bodytbl');
if(data.body.length) norq.parentNode.removeChild(norq);
else bodytbl.parentNode.removeChild(bodytbl);

var tbody = document.getElementById('bodybody');
data.body.forEach(body=>{
	var row = document.createElement("tr");
	var td1 = document.createElement("td");
	var tn1 = document.createTextNode(body.name);
	td1.appendChild(tn1);
	row.appendChild(td1);
	var td2 = document.createElement("td");
	var inpt = document.createElement("input");
	inpt.setAttribute('value', body.value);
	inpt.setAttribute('readonly', 'readonly');
	td2.appendChild(inpt);
	row.appendChild(td2);
	tbody.appendChild(row);
});

document.getElementById('ok').onclick = function(){
	var url = document.getElementById("url").value;
	browser.runtime.sendMessage({
		cancel: false,
		redirect: data.url != url ? url : false
	});
};

document.getElementById('stop').onclick = function(){
	var url = document.getElementById("url").value;
	browser.runtime.sendMessage({
		cancel: false,
		stop: true,
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