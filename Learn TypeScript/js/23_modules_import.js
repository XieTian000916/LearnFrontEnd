"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 导入方式1
// 导入的名字可以自由命名，如test
const test = require("./23_modules_export");
class TryImport {
    constructor() {
        this.name = "saika";
        this.age = 18;
        this.sex = 0;
    }
    do() {
        console.log("hello!");
    }
}
let ti = new TryImport();
console.log(ti);
ti.do();
// 导入方式2
// 此处对象名必须一致，或者使用as进行重命名
const _23_modules_export_1 = require("./23_modules_export");
console.log(_23_modules_export_1.obj);
// 导入函数试试
const _23_modules_export_2 = require("./23_modules_export");
(0, _23_modules_export_2.func)();
test.func();
// 导入一个类试试
class inputClass extends test.OutClass {
    constructor(name, age, sex) {
        super(name, age);
        this.sex = sex;
    }
}
let ic = new inputClass("kokomi", 18, 0);
ic.say();
