/**异步请求商品列表**/
function loadProductByPage(pno,pageSize){
  $.ajax({
    url: 'data/product/list.php',
    data: {pno:pno,pageSize:pageSize},
    success: function(pager){
      //填充商品列表
      var html = '';
      for(var p of pager.data){
        html += `<li class="product"  id="${p.lid}">
		    <div class="product-img">
				<a href="#">
				   <img src="${p.pic}" alt="查看详情">
				</a>
			</div>
			<div class="product-intro">
				<p class="price">￥${p.price}</p>  
				<p class="title"><a href="#">${p.title}</a></p>
				<p class="choice"><span>收藏</span><span>加入购物车</span></p>
			</div>
		  </li>
        `;
      }
      $('.products-list').html(html);
      //创建分页条
      var pageCount=parseInt(pager.pageCount);//总页数
	  var current=parseInt(pager.pno);//当前页码
     // console.log(pageCount,current);
	       var html = "";
           //上上一页
           if(current-2>0){
               html += `<span>${current-2}</span>`;
           }
           //上一页
           if(current-1>0){
               html += `<span>${current-1}</span>`;
           }
           //当前页
           html += `<span class="active">${current}</span>`;
           //下一页
           if(current+1<=pageCount) {
               html += `<span>${current+1}</span>`;
           }
           //下下一页
           if(current+2<=pageCount){
               html += `<span>${current+2}</span>`;
           }
           $(".pages").html(html);
    },
	error:function(){
         alert("网络故障请检查");
     }
  });
}
loadProductByPage(1,20);
//console.log(1);

//为分页条绑定事件
$(".pages").click(function(e){
           // console.log($(e.target));
            e.preventDefault();
            var pno = parseInt($(e.target).html());
			//console.log(pno);
            loadProductByPage(pno,20);
});
//上一页下一页点击事件
$('#prev').click(function(e){
	e.preventDefault();
	var $span=$(e.target).next();
	//console.log($span.html());//<span>1</span><span class="active">2</span><span>3</span>
    var str= $span.html();
    strr=str.split('<span class="active">');
	//console.log(strr);
	var i=strr[1][0];
	//console.log(i);
	if(i>1 && i<=8){
      loadProductByPage(i-1,20);
	}
});
$('#next').click(function(e){
	e.preventDefault();
	var $span=$(e.target).prev();
	//console.log($span.html());//<span>1</span><span class="active">2</span><span>3</span>
    var str= $span.html();
    strr=str.split('<span class="active">');
	//console.log(strr);
	var i=strr[1][0];
	//console.log(i);
	if(i>=1 && i<8){
	  i=parseInt(i);
	  //console.log(j);
      loadProductByPage(i+1,20);
	}
})

