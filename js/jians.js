var x=1;//控制图片下标
var n=0;//控制数字下标
var anm=true;//控制动画是否可执行
var time1=null;
var imgW=$('.shou1-guncon img').width();
$('.shou1-inner').scrollLeft(imgW);//初始位置
var fir=$('.shou1-guncon img:first').clone();
var las=$('.shou1-guncon img:last').clone();
$('.shou1-guncon').append(fir);
$('.shou1-guncon').prepend(las);
$('.shou1-gunnum li').click(function (){
	clearInterval(time1);
	n=$('.shou1-gunnum li').index(this);
	x=n+1;
	Move();
	autoMove();
})
var time1=null;
function autoMove(){
	time1=setInterval(moveRight,2000)
}
autoMove();//进入页面执行
function moveRight(){
	x++;
	if (x>=$('.shou1-guncon img').length) {
		x=2;
		$('.shou1-inner').scrollLeft(imgW);
	};
	n++;
	if (n>=$('.shou1-gunnum li').length) {
		n=0;
	};
	Move();
}
function Move(){
	$('.shou1-gunnum li').eq(n).addClass('shou1-select').siblings().removeClass('shou1-select');
	$('.shou1-inner').stop().animate({scrollLeft:imgW*x},function (){
		anm=true;
	});
}
