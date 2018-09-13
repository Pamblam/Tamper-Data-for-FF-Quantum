
document.body.style.background='green';

function notifyBackgroundPage(e) {
	alert("butts");
  browser.runtime.sendMessage({
    poop: "Greeting from the content script"
  });  
}

document.getElementById('farts').innerHTML = window.location.href;;

setTimeout(notifyBackgroundPage, 2000);

function firefox57_workaround_for_blank_panel() {
	browser.windows.getCurrent().then((currentWindow) => {
		browser.windows.update(currentWindow.id, {
			width: currentWindow.width,
			height: currentWindow.height + 1, // 1 pixel more than original size...
		});
	});
}

firefox57_workaround_for_blank_panel();