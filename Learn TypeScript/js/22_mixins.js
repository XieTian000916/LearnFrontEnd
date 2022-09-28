"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 混入 Mixins
// 作用:  解决TS中继承一次只能继承一个类的问题
// 注意点: 类的混入不能混入属性名
// 对象混入
let nameObj = { name: "kokomi" };
let ageObj = { age: 18 };
Object.assign(nameObj, ageObj); // 给nameObj中混入了age属性
console.log(nameObj);
console.log(ageObj);
// 类混入
class Type {
    constructor() {
        this.type = true;
    }
    changeType() {
        this.type = !this.type;
    }
}
class Name {
    constructor() {
        this.uname = "kokomi";
    }
    getName() {
        console.log(this.uname);
    }
}
class Mixed {
    constructor() {
        this.type = true;
        this.uname = "";
    }
    changeType() { }
    getName() { }
}
// 进行混入的帮助函数
function Mixins(targClass, origClass) {
    origClass.forEach((item) => {
        Object.getOwnPropertyNames(item.prototype).forEach((name) => {
            targClass.prototype[name] = item.prototype[name];
        });
    });
}
Mixins(Mixed, [Type, Name]);
let mixed = new Mixed();
console.log(mixed);
console.log(mixed.type);
mixed.changeType();
console.log(mixed.type);
