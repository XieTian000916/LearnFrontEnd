"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 类的基本使用
class CodeLanguage {
    // 类实例化时调用，可以为类的对象分配内存
    constructor(name, stage) {
        this.name = name;
        this.stage = stage;
    }
    learnSituation() {
        console.log(`Learning ${this.name} at ${this.stage} stage`);
    }
}
let ts = new CodeLanguage("TypeScript", "initial");
// ts.learnSituation();
// 类中的修饰符
// public(default)：公有，可以在任何地方被访问
// protected：受保护，可以被自身以及子类访问
// private:私有,只能在被定义的类访问
// readonly:可以使用readonly将属性设置为只读,只读属性必须在声明时或构造函数里被初始化
class Person {
    constructor(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
    say() {
        console.log(`My name is ${this.name},${this.sex},${this.age}years old now.`);
    }
}
class Student extends Person {
    constructor(name, sex, age, score) {
        super(name, sex, age);
        this.score = score;
    }
    show() {
        console.log(`My name is ${this.name},${this.sex},level ${this.score} student.`);
    }
}
let p = new Person("Kokomi", "female", 18);
// p.say();
let s = new Student("Lihua", "nv", 18, "A");
// s.show();
// 使用readonly防止在构造函数外对该字段进行赋值
class TryReadonly {
    constructor(str2, str3, str4) {
        this.str1 = "HTML CSS JS";
        this.str2 = str2;
        this.str3 = str3;
        this.str4 = str4;
    }
    print() {
        console.log(this.str1);
        console.log(this.str2);
        console.log(this.str3);
        console.log(this.str4);
    }
}
// let t = new TryReadonly("TS", "VUE", "REACT");
// t.print();
// t.str2 = "node.js"; // 无法分配到 "str2" ，因为它是只读属性
// 类的继承
// 使用extends关键字
// TS支持类的多重继承但不支持继承多个类 `​class child_class_name extends parent_class_name`
class Root {
}
class Child extends Root {
}
class Leaf extends Child {
} // 多重继承，继承了 Child 和 Root 类
var obj = new Leaf();
obj.str = "hello";
// console.log(obj.str);
// static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用
class StaticMem {
    static disp() {
        console.log("num 值为 " + StaticMem.num);
    }
}
StaticMem.num = 12; // 初始化静态变量
// StaticMem.disp();
// instanceof运算符
// instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true，否则返回 false。
class Fruit {
}
let f = new Fruit();
let isFruit = f instanceof Fruit;
// console.log("f 对象是 Fruit 类实例化来的吗？ " + isFruit); // true
class Apple extends Fruit {
}
let a = new Apple();
let isFruit2 = a instanceof Fruit;
// console.log("a 对象是 Fruit 类实例化来的吗？ " + isFruit2); // true
// getter与setter
// 通过getter与setter来截取对对象成员的访问
class GetName {
    constructor() {
        this._fullName = "Diluc";
    }
    // 如何实现在外部修改私有属性_fullName
    get fullName() {
        console.log("已调用get方法");
        return this._fullName;
    }
    set fullName(newName) {
        console.log("已调用set方法");
        this._fullName = newName;
    }
}
let reName = new GetName();
// reName.fullName = "Guoba";
// console.log(reName);
// console.log(reName.fullName);
// 抽象类
// 抽象类做为其它派生类的基类使用,它们一般不会直接被实例化
class OnceUponaTimeAtNorthEast {
    showName() {
        console.log(this.name);
    }
}
class BrotherDao extends OnceUponaTimeAtNorthEast {
    constructor() {
        super(...arguments);
        this.name = "DaoGe";
    }
    show() {
        return "lou niuzhi le";
    }
}
// let dbws=new OnceUponaTimeAtNorthEast(); // 无法创建抽象类的实例
let daoge = new BrotherDao();
let classicLine = daoge.show();
class Philosopher {
    constructor() {
        this.name = "vmz";
        this.age = 31;
        this.game = "DOTA";
    }
    show() {
        console.log("yongsuWrongCuoBuxingShepi");
    }
}
let zhexuejia = new Philosopher();
class Zhexuejia extends Philosopher {
    constructor() {
        super(...arguments);
        this.standPoint = "leninism";
    }
}
let z = new Zhexuejia();
// console.log(z.standPoint); // leninism
// console.log(z.name); // vmz
// console.log(z.age); // 31
// console.log(z.game); // DOTA
