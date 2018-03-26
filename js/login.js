/**登录单击按钮事件监听**/
$('#bt-login').click(function () {
  var data = $('#form-login').serialize();
  //console.log(data);
  $.ajax({
    type: 'POST',
    url: 'data/user/login.php',
    data: data,
    success: function (result) {
		console.log(result);
      if (result.code === 200) { 
		console.log(result.code);
        location.href = 'index.html'; //登录成功
      } else if (result.code === 201) {       //登录失败
        alert('用户名或密码输入有误');
      } else {                                //网络问题
        alert('网络错误');
      }
    },
    error:function(){
	  alert("...");
	}
  });
});