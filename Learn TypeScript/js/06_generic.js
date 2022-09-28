"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 泛型，通常用于类和函数，使用时再指定类型
// 保证代码灵活和复用性
// <T>来表示
const createArr = (value, items) => {
    return new Array(items).fill(value);
};
let arr = createArr("TypeScript", 3);
// console.log(arr);
let res = arr.map((item) => item.length);
let p = {
    name: "vmz",
    age: 31,
};
function identity(arg) {
    return arg;
}
let myIdentity = identity;
// 使用定义好的接口告诉编译器泛型存在length属性
function getLength(arr) {
    return arr.length;
}
let getProps = (obj, key) => {
    return obj[key];
};
let x = { a: 1, b: 2 };
let resl = getProps(x, "a");
// let resl = getProps(x, "c"); // 对象不存在c参数但没报错
// console.log(resl);
function getProperty(obj, key) {
    return obj[key];
}
let y = { a: 1, b: 2 };
getProperty(y, "a");
// getProperty(x, "c");  // 报错   类型“"c"”的参数不能赋给类型“"a" | "b"”的参数
