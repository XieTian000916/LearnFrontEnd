"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 自动类型推论
// 1、根据初始值进行推论
let uname = "123"; //等价于let uname: string = "123";
uname = "456";
// uname = 678; // 报错，不能将类型“number”分配给类型“string”
// uname = true; // 报错，不能将类型“boolean”分配给类型“string”
let nArr = [0, 1, null]; // 等价于 let nArr:(number | null)[] = [0, 1, null];
// nArr = [2, 4, true]; // 报错，不能将类型“boolean”分配给类型“number”
// 注意：只声明不赋初值编辑器不会进行推断
let anyType;
anyType = "666";
anyType = 666;
anyType = true;
// 2、根据上下文进行推论
window.onmousedown = function (evt /* (parameter) evt: MouseEvent */) {
    // 形参evt被自动推断为MouseEvent
    evt.clientX;
    evt.clientY;
};
