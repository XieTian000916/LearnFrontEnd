export default {};

// 匿名函数
const makeMoney = function (salary: number, reward: number): number {
	return salary + reward;
};
// 命名函数
function writeCode(sleepHour: number): number {
	let codeTime = 24 - sleepHour;
	return codeTime;
}
// 箭头函数
const coding = (time: number): void => {
	console.log(`coding for ${time}hours everyday`);
};
// 接口函数
interface myFunc {
	(x: number, y: number): number;
}
let myFunc: myFunc;
myFunc = function (play: number, sleep: number) {
	let coding = 24 - play - sleep;
	return coding;
};

type codeFunc = (x: number, y: number) => number;
const myCode: codeFunc = (play: number, sleep: number) => 24 - play - sleep;

// 函数的参数处理
// 可选参数用？表示
// 默认参数在不传值时使用
function tryDefaultParam(a: number = 1, b: number = 1, c: number = 1) {
	console.log(a + b + c);
}
// tryDefaultParam(2); //4
// tryDefaultParam(2, 2); //5
// tryDefaultParam(2, 2, 2); //6
// 剩余参数
function tryRemainParam(a: any, b: any, ...args: any) {
	console.log(a);
	console.log(b);
	console.log(args);
}
// tryRemainParam(1, 2, 3, 4, 5, 6, 7, 8); // 1  2  [ 3, 4, 5, 6, 7, 8 ]

// 内置构造函数定义函数
// TS也支持JS中的内置构造函数来定义函数
const multip = new Function("a", "b", "return a*b");
// console.log(multip(9, 9));

// 函数重载 省去反复定义相同结构但是不同参数类型和数量函数的麻烦
function overloadFunc(a: number, b?: number): void;
function overloadFunc(a: string, b?: string): void;
function overloadFunc(a: number, b?: string): void;
function overloadFunc(a: string, b?: number): void;

function overloadFunc(x: any, y?: any): void {
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
	w: number;
	h: number;

	constructor(w: number, h: number) {
		this.w = w;
		this.h = h;
	}

	getArea(this: Rectangle) {
		return () => {
			return this.w * this.h;
		};
	}
}
// 禁止调用this
class Rectangle1 {
	w: number;
	h: number;

	constructor(w: number, h: number) {
		this.w = w;
		this.h = h;
	}

	getArea(this: void) {
		return () => {
			// return this.w * this.h; // 报错
			return 111; // 不调用this 不报错
		};
	}
}

// 特殊的返回值
// 使用类型别名定义函数，返回值并非一定不能有返回值
type voidFunc = () => void;
const returnVoid: voidFunc = function () {
	return 123;
};
// 如果我们定义函数的时候明确指出，返回值为void
// 那么我们将除undefined 和 null 以外的值进行返回都会进行报错
function returnVoid2(): void {
	// return 123; // 不能将类型“number”分配给类型“void”
}
