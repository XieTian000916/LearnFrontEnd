window.addEventListener("load", function () {
	let uname = document.querySelector(".uname");
	let uname_notice = document.querySelector(".unamenotice");
	let psw = document.querySelector(".psw");
	let psw_notice = document.querySelector(".pswnotice");
	let tel = document.querySelector(".tel");
	let tel_notice = document.querySelector(".telnotice");
	// let varicode = document.querySelector(".varicode");
	let btn = document.querySelector("button");
	// let checkbox = document.querySelector(".agree");
	let rej_btn = this.document.querySelector(".rej_btn");

	// 用户名验证
	uname.addEventListener("blur", function () {
		let input = uname.value;
		let calibrate = /^[a-zA-z0-9_]+$/;
		if (calibrate.test(input)) {
			uname_notice.innerText = "用户名合法";
			// notice.style.color = "green";
			uname_notice.className = "test unamenotice right";
		} else {
			uname_notice.innerText = "用户名不符合规范！";
			// notice.style.color = "red";
			uname_notice.className = "test unamenotice wrong";
		}
	});

	// 密码验证
	psw.addEventListener("blur", function () {
		let input = psw.value;
		let calibrate = /^[a-zA-z0-9_]{8,16}$/;
		if (calibrate.test(input)) {
			psw_notice.innerText = "密码可用";
			// notice.style.color = "green";
			psw_notice.className = "test pswnotice right";
		} else {
			psw_notice.innerText = "密码不符合规范！";
			// notice.style.color = "red";
			psw_notice.className = "test pswnotice wrong";
		}
	});

	// 手机号验证
	tel.addEventListener("blur", function () {
		let input = tel.value;
		let calibrate =
			/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
		if (calibrate.test(input)) {
			tel_notice.innerText = "√";
			// notice.style.color = "green";
			tel_notice.className = "test telnotice right";
		} else {
			tel_notice.innerText = "请输入有效的手机号！";
			// notice.style.color = "red";
			tel_notice.className = "test telnotice wrong";
		}
	});

	// 验证码倒计时
	btn.addEventListener("click", function () {
		let input = tel.value;
		let calibrate =
			/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
		if (calibrate.test(input)) {
			btn.disabled = true;
			var wait = 6;
			var timer = setInterval(function () {
				var countdown = --wait;
				btn.innerHTML = countdown + "秒后重新发送";
				if (countdown < 0) {
					btn.disabled = false;
					btn.innerHTML = "获取验证码";
					clearInterval(timer);
				}
			}, 1000);
		} else {
			alert("请输入有效的手机号！");
		}
	});

	// 注册按钮事件
	rej_btn.addEventListener("click", function () {
		if ($(".agree").is(":checked")) {
			// 此处利用jQuery进行了判断
			// console.log(uname_notice.innerText);
			if (
				uname_notice.innerText == "用户名合法" &&
				psw_notice.innerText == "密码可用" &&
				tel_notice.innerText == "√"
			) {
				alert("注册成功!");
			} else {
				alert("请正确填写相关信息!");
			}
		} else {
			alert("请先同意用户协议!");
		}
	});
});
