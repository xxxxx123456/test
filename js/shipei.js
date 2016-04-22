function resetFont(){
	var HTML=document.getElementsByTagName('html')[0];
	var ww=document.documentElement.clientWidth;
	var scale=ww/640;//640是设计图psd的宽度
	HTML.style.fontSize=100*scale+'px';
}

resetFont();
window.onresize=function (){
	resetFont();
}