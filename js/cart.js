/**加载购物车内容**/
function loadCart(){
  $.ajax({
	  type:"get",
	  url: 'data/cart/list.php',
	  success: function (result) {
		if (result.code === 300) {
		  alert('您还没有登录哦~');
		} else if (result.code === 200) {
		  var html = '';
		  if (result.data.length) {
			$.each(result.data, function (i, l) {
			  html += `<div class="cart-details">
					<input type="checkbox"><img src="${l.pic}"><a href="">${l.title}</a>
					<span>￥${l.price}</span>
					<span><a href="">+</a><a href="">${l.count}</a><a href="">-</a></span>
					<span>￥${l.price*l.count}</span>
					<span>删除</span>
				 </div>
				 <hr>`;
			})
		  }
		  $('.cart-content>#content').html(html);
		}
	   }
  })
}
loadCart();
