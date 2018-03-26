//团队介绍和关于meet的动态
$('.btns a').click(function(e){
	e.preventDefault();
  var $tar=$(e.target);
 // console.log($tar);
  $tar.css('backgroundColor','#999999');
  $tar.siblings().css('backgroundColor','#E6E6E6')
})
$('.btns>a').click(function(e){
  var $tar=$(e.target);
  var i=$tar.parent().index();

  $('.btns').next().removeClass('hidden').addClass('show');
})
