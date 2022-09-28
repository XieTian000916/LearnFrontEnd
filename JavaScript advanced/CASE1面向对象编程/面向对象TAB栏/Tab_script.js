let that;
class Tab {
	constructor(id) {
		that = this;
		this.tabbox = document.querySelector(id);
		this.add = this.tabbox.querySelector(".addTab");
		this.ul = this.tabbox.querySelector(".tabNav ul");
		this.tabCon = this.tabbox.querySelector(".tabContent");
		this.init();
	}
	// 页面初始化
	updateNode() {
		this.lis = this.tabbox.querySelectorAll("li");
		this.sections = this.tabbox.querySelectorAll("section");
		this.close = this.tabbox.querySelectorAll(".close_btn");
		this.spans = this.tabbox.querySelectorAll(".tabNav li span:first-child");
	}
	init() {
		this.updateNode();
		// 页面打开已绑定事件
		for (let i = 0; i < this.lis.length; i++) {
			this.lis[i].index = i;
			// 点击切换标签页
			this.lis[i].onclick = this.toggleTab;
			this.close[i].onclick = this.delTab;
			this.spans[i].ondblclick = this.editTab;
			this.sections[i].ondblclick = this.editTab;
		}
		this.add.onclick = this.addTab;
	}
	// 切换标签页
	toggleTab() {
		that.clearClass();
		this.className = "active_li";
		that.sections[this.index].className = "active_con";
	}
	clearClass() {
		for (let i = 0; i < this.lis.length; i++) {
			this.lis[i].className = "";
			this.sections[i].className = "";
		}
	}
	// 添加标签页
	addTab() {
		that.clearClass();
		let random = Math.random();
		let li =
			"<li class='active_li'><span>新标签页</span><span class='close_btn'>x</span></li>";
		that.ul.insertAdjacentHTML("beforeend", li);
		let section = "<section class='active_con'>无内容" + random + "</section>";
		that.tabCon.insertAdjacentHTML("beforeend", section);
		that.init();
	}
	// 删除标签页
	delTab(event) {
		event.stopPropagation();
		let index = this.parentNode.index;
		// console.log(index);
		that.lis[index].remove();
		that.sections[index].remove();
		that.init();
		// 删除非当前选中页面，选定状态不改变
		if (document.querySelector(".active_li")) return;
		// 删除当前页面后自动选择前一页
		index--;
		that.lis[index] && that.lis[index].click();
	}
	// 修改内容
	editTab() {
		window.getSelection
			? window.getSelection().removeAllRanges()
			: document.selection.empty();
		let str = this.innerHTML;
		this.innerHTML = '<input type="text" />';
		let input = this.children[0];
		input.value = str;
		// 双击即选中
		input.select();
		// 取消聚焦后文本框内容赋值给span
		input.onblur = function () {
			this.parentNode.innerHTML = input.value;
		};
		input.onkeyup = function (event) {
			if (event.key === "Enter") {
				this.blur();
			}
		};
	}
}
let tab = new Tab("#tab");
