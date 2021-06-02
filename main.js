function DOMReady() {
    report('DOM is ready');
}

function docLoaded() {
    report('Document is loaded');
}

function report(message){
	console.log(message);
	reportTime();
}

function formatTime(time){
	return `${time.getUTCHours()}:${time.getMinutes()}:${time.getSeconds()}.${("00" + time.getMilliseconds().toString()).slice(-3)}`;
}

let startTime = Date.now();
function reportTime(){
	let timeDiff = new Date(Date.now() - startTime);
	console.log(`time from start: ${formatTime(timeDiff)}`);
}

report("started");
document.addEventListener("DOMContentLoaded", DOMReady);
document.onload = docLoaded;
