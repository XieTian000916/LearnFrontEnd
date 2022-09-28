"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// unknown 类型代表任何值。这与 any 类型类似，但更安全，因为对未知 unknown 值做任何事情都是不合法的。
// unknown 类型被称作安全的any
// 任何类型都可以赋值给unknown
let str;
str = 18;
str = "morty";
str = true;
// 不能将unknown类型赋值给其他任何类型
let num;
// num =str; // 不能将类型“unknown”分配给类型“number”
let bool;
// 使用类型断言解决报错
bool = str;
// 使用类型缩小解决报错
if (typeof str == "boolean") {
    bool = str;
}
let a = 18;
let b = true;
