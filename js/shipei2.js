function czpmW () {
	var dWidth=document.documentElement.clientWidth;
	var bili=dWidth/640;
	document.body.style.zoom=bili;
}
czpmW();
window.onresize=function () {
	czpmW();
}