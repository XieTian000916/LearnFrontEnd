export default {};

// 类的基本使用
class CodeLanguage {
	// 需要先定义实例属性才能够使用
	name: string;
	stage: string;

	// 类实例化时调用，可以为类的对象分配内存
	constructor(name: string, stage: string) {
		this.name = name;
		this.stage = stage;
	}

	learnSituation(): void {
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
	public name: string;
	protected sex: string;
	private age: number;

	constructor(name: string, sex: string, age: number) {
		this.name = name;
		this.sex = sex;
		this.age = age;
	}

	say(): void {
		console.log(
			`My name is ${this.name},${this.sex},${this.age}years old now.`
		);
	}
}
class Student extends Person {
	score: string;

	constructor(name: string, sex: string, age: number, score: string) {
		super(name, sex, age);
		this.score = score;
	}

	show(): void {
		console.log(
			`My name is ${this.name},${this.sex},level ${this.score} student.`
		);
	}
}
let p = new Person("Kokomi", "female", 18);
// p.say();
let s = new Student("Lihua", "nv", 18, "A");
// s.show();
// 使用readonly防止在构造函数外对该字段进行赋值
class TryReadonly {
	readonly str1: string = "HTML CSS JS";
	readonly str2: string;
	readonly str3: string;
	readonly str4: string;

	constructor(str2: string, str3: string, str4: string) {
		this.str2 = str2;
		this.str3 = str3;
		this.str4 = str4;
	}

	print(): void {
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
	str!: string;
}

class Child extends Root {}
class Leaf extends Child {} // 多重继承，继承了 Child 和 Root 类

var obj = new Leaf();
obj.str = "hello";
// console.log(obj.str);

// static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用
class StaticMem {
	static num: number;

	static disp(): void {
		console.log("num 值为 " + StaticMem.num);
	}
}

StaticMem.num = 12; // 初始化静态变量
// StaticMem.disp();

// instanceof运算符
// instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true，否则返回 false。
class Fruit {}
let f = new Fruit();
let isFruit = f instanceof Fruit;
// console.log("f 对象是 Fruit 类实例化来的吗？ " + isFruit); // true

class Apple extends Fruit {}
let a = new Apple();
let isFruit2 = a instanceof Fruit;
// console.log("a 对象是 Fruit 类实例化来的吗？ " + isFruit2); // true

// getter与setter
// 通过getter与setter来截取对对象成员的访问
class GetName {
	private _fullName: string = "Diluc";

	// 如何实现在外部修改私有属性_fullName
	get fullName(): string {
		console.log("已调用get方法");
		return this._fullName;
	}

	set fullName(newName: string) {
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
abstract class OnceUponaTimeAtNorthEast {
	abstract name: string;
	abstract show(): string;

	showName(): void {
		console.log(this.name);
	}
}
class BrotherDao extends OnceUponaTimeAtNorthEast {
	name: string = "DaoGe";
	show(): string {
		return "lou niuzhi le";
	}
}
// let dbws=new OnceUponaTimeAtNorthEast(); // 无法创建抽象类的实例
let daoge = new BrotherDao();
let classicLine = daoge.show();
// console.log(classicLine);
// console.log(daoge.showName());

// implements子句
interface StarInfo {
	name: string;
	age: number;
	sex?: string;
	show(): void;
}
interface StarGame {
	game: string;
}
class Philosopher implements StarInfo, StarGame {
	name: string = "vmz";
	age: number = 31;
	game: string = "DOTA";
	show(): void {
		console.log("yongsuWrongCuoBuxingShepi");
	}
}
let zhexuejia = new Philosopher();
// zhexuejia.show();
// 只要接口继承了某个类，那么就会继承接口中的所有属性和方法
interface Test extends Philosopher {
	standPoint: string;
}
class Zhexuejia extends Philosopher implements Test {
	standPoint: string = "leninism";
}
let z = new Zhexuejia();
// console.log(z.standPoint); // leninism
// console.log(z.name); // vmz
// console.log(z.age); // 31
// console.log(z.game); // DOTA
