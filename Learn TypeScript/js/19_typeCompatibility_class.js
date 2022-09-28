"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
/* 类的工作方式与对象字面类型和接口类似，但有一个例外：它们同时具有静态和实例类型。当比较一个
类类型的两个对象时，只有实例的成员被比较。静态成员和构造函数不影响兼容性。

一个类中的私有成员和保护成员会影响其兼容性。当一个类的实例被检查兼容性时，如果目标类型包含
一个私有成员，那么源类型也必须包含一个源自同一类的私有成员。同样地，这也适用于有保护成员的
实例。这允许一个类与它的超类进行赋值兼容，但不允许与来自不同继承层次的类进行赋值兼容，否则
就会有相同的形状。
*/
// public: 可多不可少
class Chicken {
    constructor(numHead, numFeet) {
        this.head = numHead;
        this.feet = numFeet;
    }
}
class Rabbit {
    //   feet: number;
    constructor(numHead) {
        this.head = numHead;
        // this.feet = numFeet;
    }
}
let ji;
let tu;
// ji = tu; // 类型 "Rabbit" 中缺少属性 "feet"，但类型 "Chicken" 中需要该属性
// tu = ji; // ok
// private / protected: 不能互相赋值
class Male {
    constructor(uname) {
        this.uname = uname;
    }
}
class Female {
    constructor(uname) {
        this.uname = uname;
    }
}
let nan;
let nv;
// nan = nv; // 不能将类型“Female”分配给类型“Male”。类型具有私有属性“uname”的单独声明
// nv = nan; // 不能将类型“Male”分配给类型“Female”。类型具有私有属性“uname”的单独声明
