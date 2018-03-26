$('.example>li>img').mouseenter(function(){
  $(this).parent().siblings().css("opacity",0.3);
  $(this).parent().siblings().css("transition","all 1s linear");
  $(this).css("border","1px solid pink");
  $(this).css("borderRadius","200px");
  $(this).css("transition","all 1s linear");
})
$('.example>li>img').mouseleave(function(){
  $(this).parent().siblings().css("opacity",1);
  $(this).parent().siblings().css("transition","all 1s linear");
  $(this).css("borderRadius","0px");
  $(this).css("transition","all 1s linear");
})

//情人节倒计时
function task1(){
    var end=new Date("2018/8/17 0:00:00");
    var now=new Date();
    var s=parseInt((end-now)/1000);
	var span=$("#valentine");
	//console.log(span);
	if(s>0){
		var d=parseInt(s/3600/24);
		if(d<10) d="0"+d;
		//s/3600/24,再下取整
		var h=parseInt(s%(3600*24)/3600);
		if(h<10) h="0"+h;
		//s/(3600*24)的余数,再/3600,再下去整
		var m=parseInt(s%3600/60);
		if(m<10) m="0"+m;
		//s/3600的余数,再/60，再下取整
		s%=60;//s/60的余数
		if(s<10) s="0"+s;
		//距离下一个假期还有: ?天?小时?分?秒
		span.html(d+"天"+h+"小时"+m+"分"+s+"秒");
	}else{
		clearInterval(timer1)
		timer1=null
		span.html('七夕节快乐！')
	}
}
task1();
var timer1=setInterval(task1,1000);

//母亲节倒计时
function task2(){
    var end=new Date("2018/5/13 0:00:00");
    var now=new Date();
    var s=parseInt((end-now)/1000);
	var span=$("#mother");
	//console.log(span);
	if(s>0){
		var d=parseInt(s/3600/24);
		if(d<10) d="0"+d;
		//s/3600/24,再下取整
		var h=parseInt(s%(3600*24)/3600);
		if(h<10) h="0"+h;
		//s/(3600*24)的余数,再/3600,再下去整
		var m=parseInt(s%3600/60);
		if(m<10) m="0"+m;
		//s/3600的余数,再/60，再下取整
		s%=60;//s/60的余数
		if(s<10) s="0"+s;
		//距离下一个假期还有: ?天?小时?分?秒
		span.html(d+"天"+h+"小时"+m+"分"+s+"秒");
	}else{
		clearInterval(timer2)
		timer2=null
		span.html('母亲节快乐！')
	}
}
task2();
var timer2=setInterval(task2,1000);
//女生节
function task3(){
    var end=new Date("2018/3/8 0:00:00");
    var now=new Date();
    var s=parseInt((end-now)/1000);
	var span=$("#friend");
	//console.log(span);
	if(s>0){
		var d=parseInt(s/3600/24);
		if(d<10) d="0"+d;
		//s/3600/24,再下取整
		var h=parseInt(s%(3600*24)/3600);
		if(h<10) h="0"+h;
		//s/(3600*24)的余数,再/3600,再下去整
		var m=parseInt(s%3600/60);
		if(m<10) m="0"+m;
		//s/3600的余数,再/60，再下取整
		s%=60;//s/60的余数
		if(s<10) s="0"+s;
		//距离下一个假期还有: ?天?小时?分?秒
		span.html(d+"天"+h+"小时"+m+"分"+s+"秒");
	}else{
		clearInterval(timer3)
		timer3=null
		span.html('女神节快乐！')
	}
}
task3();
var timer3=setInterval(task3,1000);
