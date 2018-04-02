//在当前页面加载header.html
$(()=>{
	$('#header').load('header.html',function(){
    $.ajax({
        url: 'data/user/session_data.php',
        success: function(result){
            if(result.uname){
                $('.right').html('<span>&nbsp;亲爱的'+result.uname+'&nbsp;/&nbsp;<span data-toggle="logout">退出</span>&nbsp;<a href="cart.html"><img class="tocart" src="img/header/shop_car1.png"></a></span>');
                $('[data-toggle="logout"]').click(function(){
                    $.ajax({
                        url: 'data/user/logout.php',
                        success: function(result){
                            if(result.code===200){
                                alert('<h4>退出成功</h4>');
								location.href = 'login.html';
                            }else {
                                alert('登录退出失败！原因：'+result.msg);
                            }
                        }
                    })
                });
            };
        }
    });
  });
})
/**头部搜索按钮**/

$("body").on('click',"#searchfor",function(e){
    var $tar=$(e.target);
    var kw = $('.input-kw').val();
	kw = $('.input-kw').val();
   //console.log(kw);
	//console.log($tar);
    var loc = 'product.html';
    if(kw){
        loc += '?kw='+kw;
    }
    location.href = loc;
})

