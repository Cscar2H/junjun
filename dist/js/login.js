function login() {
	var userName = document.getElementById('userName').value;
	var password = document.getElementById('password').value;
	if (userName == null || userName == "") {
		alert("请输入邮箱！");
		return false;
	}else if(password == null || password == "") {
		alert("请输入密码！");
		return false;
	}else {
		return true;
	}
}