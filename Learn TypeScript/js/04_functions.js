"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 匿名函数
const makeMoney = function (salary, reward) {
    return salary + reward;
};
// 命名函数
function writeCode(sleepHour) {
    let codeTime = 24 - sleepHour;
    return codeTime;
}
// 箭头函数
const coding = (time) => {
    console.log(`coding for ${time}hours everyday`);
};
let myFunc;
myFunc = function (play, sleep) {
    let coding = 24 - play - sleep;
    return coding;
};
const myCode = (play, sleep) => 24 - play - sleep;
// 函数的参数处理
// 可选参数用？表示
// 默认参数在不传值时使用
function tryDefaultParam(a = 1, b = 1, c = 1) {
    console.log(a + b + c);
}
// tryDefaultParam(2); //4
// tryDefaultParam(2, 2); //5
// tryDefaultParam(2, 2, 2); //6
// 剩余参数
function tryRemainParam(a, b, ...args) {
    console.log(a);
    console.log(b);
    console.log(args);
}
// tryRemainParam(1, 2, 3, 4, 5, 6, 7, 8); // 1  2  [ 3, 4, 5, 6, 7, 8 ]
// 内置构造函数定义函数
// TS也支持JS中的内置构造函数来定义函数
const multip = new Function("a", "b", "return a*b");
function overloadFunc(x, y) {
    console.log(x);
    console.log(y);
}
// overloadFunc(1);
// overloadFunc("try");
// overloadFunc(1, "try");
// overloadFunc("try", 1);
// this的使用
// 使用this参数，改变指向
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
    getArea() {
        return () => {
            return this.w * this.h;
        };
    }
}
// 禁止调用this
class Rectangle1 {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
    getArea() {
        return () => {
            // return this.w * this.h; // 报错
            return 111; // 不调用this 不报错
        };
    }
}
const returnVoid = function () {
    return 123;
};
// 如果我们定义函数的时候明确指出，返回值为void
// 那么我们将除undefined 和 null 以外的值进行返回都会进行报错
function returnVoid2() {
    // return 123; // 不能将类型“number”分配给类型“void”
}
