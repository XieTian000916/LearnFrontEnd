$(function () {
	// 页面打开即刻加载之前存储的数据
	loadToDo();
	// 回车添加ToDo（判断输入框是否为空）
	$("#todoInput").on("keydown", function (event) {
		if (event.keyCode === 13) {
			if ($("#todoInput").val() === "") {
				alert("输入内容不能为空");
			} else {
				// 数据保存到本地存储中，刷新不会丢失
				var local = getData();
				local.push({ title: $(this).val(), done: false });
				saveData(local);
				$(this).val("");
				loadToDo();
			}
		}
	});

	// 点击圆圈（a链接）删除项目
	$("ol,ul").on("click", "a", function () {
		// 获取本地存储
		var data = getData();
		// 修改数据
		var index = $(this).attr("data-order");
		data.splice(index, 1); // splice(从那个开始删,删除几个)
		// 重新保存到本地存储
		saveData(data);
		// 重新渲染页面
		loadToDo();
	});

	// 点击选框切换项目状态
	$("ol,ul").on("click", "input", function () {
		// 读取数据 修改数据 保存数据 重新渲染
		var data = getData();
		var index = $(this).siblings("a").attr("data-order");
		data[index].done = $(this).prop("checked");
		saveData(data);
		loadToDo();
	});

	function getData() {
		var data = localStorage.getItem("todolist");
		if (data !== null) {
			// 本地存储中获取的字符串格式转换为需要的对象格式
			return JSON.parse(data);
		} else {
			return [];
		}
	}

	function saveData(data) {
		localStorage.setItem("todolist", JSON.stringify(data));
	}

	function loadToDo() {
		var data = getData();
		$("ol,ul").empty();
		$.each(data, function (i, ele) {
			if (ele.done) {
				$("ul").prepend(
					"<li><input type='checkbox' checked='checked'><span>" +
						ele.title +
						"</span><a href='javascript:;' data-order=" +
						i +
						"></a></li>"
				);
			} else {
				$("ol").prepend(
					"<li><input type='checkbox'><span>" +
						ele.title +
						"</span><a href='javascript:;' data-order=" +
						i +
						"></a></li>"
				);
			}
		});
	}
});
// <li><input type='checkbox'><span></span><a href='javascript:;'></a></li>
