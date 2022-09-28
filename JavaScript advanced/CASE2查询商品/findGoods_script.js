let goodsData = [
	{
		id: 1,
		gname: "华为 HUAWEI P50 Pro",
		price: 5488,
	},
	{
		id: 2,
		gname: "苹果 iPhone 13 Pro",
		price: 7999,
	},
	{
		id: 3,
		gname: "麦卡伦 MACALLAN 蓝钻 12年",
		price: 560,
	},
	{
		id: 4,
		gname: "米家 显示器挂灯",
		price: 199,
	},
];
let tbody = document.querySelector("tbody");
// 把数据渲染进页面中
setData(goodsData);

// let add = "";
// goodsData.forEach(function (value) {
// 	var child =
// 		"<tr><td>" +
// 		value.id +
// 		"</td><td>" +
// 		value.gname +
// 		"</td><td>" +
// 		value.price +
// 		"</td></tr>";
// 	add += child;
// });
// tbody.innerHTML = add;

// 渲染数据给页面
function setData(mydata) {
	mydata.forEach(function (value) {
		var tr = document.createElement("tr");
		tr.innerHTML =
			"<td>" +
			value.id +
			"</td><td>" +
			value.gname +
			"</td><td>" +
			value.price +
			"</td>";
		tbody.appendChild(tr);
	});
}

// 模糊搜索
function fuzzyQuery(arr, keywords) {
	var searchGoods = [];
	arr.forEach(function (value) {
		var valueString = value.gname;
		var lowerCase = valueString.toLowerCase();
		var upperCase = valueString.toUpperCase();
		// 多次判断实现不区分大小写
		if (valueString.split(keywords).length > 1) {
			searchGoods.push(value);
		} else if (lowerCase.split(keywords).length > 1) {
			searchGoods.push(value);
		} else if (upperCase.split(keywords).length > 1) {
			searchGoods.push(value);
		}
	});
	return searchGoods;
}

// 按照价格搜索商品
let price_btn = document.querySelector(".byPrice");
let min_price = document.querySelector(".min");
let max_price = document.querySelector(".max");
price_btn.addEventListener("click", function () {
	if (min_price.value == "" || max_price.value == "") {
		alert("内容不能为空");
	} else {
		let newGoods = goodsData.filter(function (value) {
			return value.price >= min_price.value && value.price <= max_price.value;
		});
		tbody.innerHTML = "";
		setData(newGoods);
	}
});

// 按照名称搜索商品
let name_btn = document.querySelector(".byName");
let name_box = document.querySelector(".gName");
name_btn.addEventListener("click", function () {
	let newGoods = fuzzyQuery(goodsData, name_box.value);
	tbody.innerHTML = "";
	setData(newGoods);
});

// 搜索重置
let reset_btn = document.querySelector(".reset");
reset_btn.addEventListener("click", function () {
	min_price.value = "";
	max_price.value = "";
	name_box.value = "";
	tbody.innerHTML = "";
	setData(goodsData);
});
