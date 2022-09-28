"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutClass = exports.func = exports.obj = void 0;
exports.obj = {
    name: "kokomi",
};
function func() {
    console.log("我是导入的函数");
}
exports.func = func;
class OutClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log(`my name is ${this.name}`);
    }
}
exports.OutClass = OutClass;
