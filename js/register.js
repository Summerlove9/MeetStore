/*1.对用户名进行验证*/
$('#uname').blur(function(e){
 // console.log(e.target);
  $this=$(e.target);
 // console.log($this.val());
 // console.log($this.val().length);
  var len=$this.val().length;
  if (len<3 || len>=10) {
    $this.next().html("长度3~9位!");
	$this.next().removeClass('hidden msg-success');
    $this.next().addClass("msg-error");
  }else if(len>=3 && len<10){
	  var that=$this;
	  $.ajax({
		  url: 'data/user/check_uname.php',
		  data: {uname: that.val()},
		  success: function (result) {
			if (result.code === 201) {
			  that.next().html('用户名已被占用!');
			  that.next().removeClass('hidden msg-success');
			  that.next().addClass('msg-error');
			} else if (result.code === 200) {
			  that.next().html('用户名可以使用!');
			  that.next().removeClass('hidden');
			  that.next().addClass('msg-success');
			  upwd.focus();
			} else {
			  alert('验证用户名出错！请稍后重试。')
			}
		  }
		})
  }
});

/*2.对密码进行验证*/
$('#upwd').blur(function (e) {
  $this=$(e.target);
  if($this.val().length<6 || $this.val().length>12){
	  $this.next().html('长度6~12位!');
	  $this.next().removeClass('hidden msg-success');
	  $this.next().addClass('msg-error');
  }else{
      $this.next().html('格式正确');
	  $this.next().removeClass('hidden');
      $this.next().addClass('msg-success');
  } 
});

/**3.对确认密码进行验证*/
$('#upwdcn').blur(function (e) {
	$this=$(e.target);
	$upwd=$('#upwd');
    if ($this.val()!= $upwd.val() ) {
    $this.next().html('密码不一致!');
	$this.next().removeClass('hidden msg-success');
    $this.next().addClass('msg-error');
  } else{
    $this.next().html('密码一致');
	$this.next().removeClass('hidden');
    $this.next().addClass('msg-success');
  }
});

/*4.对手机号进行验证*/
$('#phone').blur(function (e) {
  var $this=$(e.target);
  var reg=/^[1][3,4,5,7,8][0-9]{9}$/;
  var val=$this.val();
  
  if (!reg.test(val)) {
    $this.next().html('手机号格式不正确');
    $this.next().removeClass('hidden msg-success');
    $this.next().addClass('msg-error');
  }else{
	var that=$this;
    $.ajax({
      url: 'data/user/check_phone.php',
      data: {phone: that.val()},
      success: function (result) {
        if (result.code === 201) {
          that.next().html('手机号已注册!');
		  that.next().removeClass('hidden msg-success');
          that.next().addClass('msg-error');
        } else if (result.code === 200) {
          that.next().html('可使用!');
		  that.next().removeClass('hidden');
          that.next().addClass('msg-success');
        } else {
          alert('验证手机出错！请稍后重试')
        }
      }
    })
  } 
});

/**注册按钮监听函数**/
$('#bt-register').click(function () {
  var count = 0;
  $('.form-group').each(function(){
	  console.log($(this));
      if($(this).find('p').hasClass('msg-success')){
	     count++;
	  }
	 // console.log(count);
  });
  if (count == 4) {
    $.ajax({
        type: 'POST',
        url: 'data/user/register.php',
        data: $('#form-register').serialize(),
        success: function(result){
          if(result.code===200){
            alert('注册成功！');          
            location.href = 'login.html';
          }else {
            alert('错误消息：'+result.msg)
          }
        },
        error:function(){
	    alert("...");
	    }
    })
  }
});

