"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 使用索引访问类型来查询另一个类型上的特定属性
// []
class Person {
    constructor() {
        this.name = "";
        this.age = 0;
    }
}
let n = "tony";
console.log(n);
// 获取指定对象的部分属性的值,放到数组中返回
let cyberPerson = {
    name: "Jonny",
    age: 30,
    sex: "male",
};
function getObjValue(obj, keys) {
    let arr = [];
    keys.forEach((key) => {
        arr.push(obj[key]);
    });
    return arr;
}
let res = getObjValue(cyberPerson, ["name", "sex"]);
console.log(res);
