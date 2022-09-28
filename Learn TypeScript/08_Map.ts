export default {};

// Map 对象保存键值对，并且能够记住键的原始插入顺序
// Map 是 ES6 中引入的一种新的数据结构
// 可以使用for of 进行迭代

// Map 相关的函数与属性
// map.clear()         移除 Map 对象的所有键/值对
// map.set()           设置键值对，返回该 Map 对象
// map.get()           返回键对应的值，如果不存在，则返回 undefined
// map.has()           返回一个布尔值，用于判断 Map 中是否包含键对应的值
// map.delete()        删除Map中的元素，删除成功返回 true，失败返回 false
// map.size            返回Map对象键/值对的数量
// map.keys()          返回一个Iterator对象,包含了Map对象中每个元素的键
// map.values()        返回一个新的Iterator对象,包含了Map对象中每个元素的值

// create a map
let myMap = new Map();
// 设置Map对象
myMap.set("rick", 1);
myMap.set("morty", 2);
myMap.set("jerry", 3);
// console.log(myMap); // Map(3) { 'rick' => 1, 'morty' => 2, 'jerry' => 3 }

// 获取对应的键值
// console.log(myMap.get(1)); // undefined
// console.log(myMap.get("rick")); // 1

// 判断Map中是否包含键对应的值
// console.log(myMap.has("jerry")); //true
// console.log(myMap.has("summer")); // false

// 返回Map中的键值对数量
// console.log(myMap.size); // 3

// 删除特定的键值
// console.log(myMap.delete("jerry")); // 3
// console.log(myMap); // Map(2) { 'rick' => 1, 'morty' => 2 }

// 清空Map中的键值对
// myMap.clear();
// console.log(myMap); // Map(0) {}

// 遍历Map中的key
for (let key of myMap.keys()) {
  console.log(key);
}
// 遍历Map中的value
for (let value of myMap.values()) {
  console.log(value);
}
// 遍历Map中的key => value
for (let entry of myMap.entries()) {
  console.log(entry); // 获得数组形式的键值对
}
// 使用对象解析
for (let [key, value] of myMap) {
  console.log(key, value); // 获得非数组形式的键值对
}
