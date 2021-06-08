let count = 0;
let arr = ["image20.png", "test173.jpg", "sachin1.jpg"]
function loadFile(url, onDone, onError) {
	if (!onDone) onDone = function () {
		console.log("loaded");
		onDone2();
	};
	if (!onError) onError = function () { };
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if (xhr.status == 200 || xhr.status == 0) {
				setTimeout(function () {
					try {


					} catch (e) {
						onError(e);
						return;
					}
					onDone();
				}.bind(this), 1);
			} else {
				onError(xhr.status);
			}
		}
	}.bind(this);
	try {
		xhr.open("GET", url, true);
		xhr.send();
	} catch (e) {
		onError(e);
	}
}

var i = 0;
var temp = setInterval(func, 1000);

function onDone2() {
	
	document.getElementById("example-div").innerText = count + " loaded";
	if (count < arr.length) {
		console.log("running");

		var element = document.getElementById("my-bar");
			if (i >= 99) {
				clearInterval(temp);
			}
			else {
				var delta = 100 / arr.length;
				i += delta;
				console.log(i);
				element.style.width = i + '%';
			}

		loadFile(arr[count], onDone2, onError2);
		count++;
	}
}

function onError2() {
	console.error("there is error");
}