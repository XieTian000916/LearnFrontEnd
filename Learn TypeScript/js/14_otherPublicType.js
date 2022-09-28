"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
let res = {
    name: "Saika",
};
let res2 = {
    name: "Saika",
    age: 18,
};
// delete key "name"
let res3 = {
    age: 18,
    score: 100,
    sex: false,
};
// OmitThisParameter
// 从类型T中剔除this参数类型，并构造一个新类型
function add(x) {
    console.log(x);
}
function f0(x) { }
function f1(x) { }
const x = add;
const y = add;
const z = "Saika";
console.log(x);
console.log(y);
console.log(z);
