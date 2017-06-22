function register() {
	var userName = document.getElementById('userName').value;
	var uEmail = document.getElementById('uEmail').value;
	var password = document.getElementById('password').value;
	var repassword = document.getElementById('repassword').value;

	if (userName == null || userName == "") {
		alert("请输入用户名！");
		return false;
	}else if (uEmail == null || uEmail =="") {
		alert("请输入邮箱！");
		return false;
	}else if(password == null || password == "") {
		alert("请输入密码！");
		return false;
	}else if(repassword == null || repassword == "") {
		alert("请再次输入密码！");
		return false;
	}else if(password != repassword) {
		alert("两次密码输入不相同！请重新输入");
		return false;
	}else {
		return true;
	}
}