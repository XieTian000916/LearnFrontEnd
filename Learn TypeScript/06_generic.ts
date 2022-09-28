export default {};

// 泛型，通常用于类和函数，使用时再指定类型
// 保证代码灵活和复用性
// <T>来表示

const createArr = <T>(value: T, items: number): T[] => {
	return new Array(items).fill(value);
};
let arr = createArr<string>("TypeScript", 3);
// console.log(arr);
let res = arr.map((item) => item.length);
// console.log(res);

// 泛型接口
interface Person<T = string, S = number> {
	name: T;
	age: S;
}
let p: Person = {
	name: "vmz",
	age: 31,
};
// 来自手册的例子
interface GenericIdentityFn {
	<T>(arg: T): T;
}
function identity<T>(arg: T): T {
	return arg;
}
let myIdentity: GenericIdentityFn = identity;

// 泛型约束
// 使用接口进行约束
interface ILength {
	length: number;
}
// 使用定义好的接口告诉编译器泛型存在length属性
function getLength<T extends ILength>(arr: T): number {
	return arr.length;
}
// console.log(getLength("BatMan"));
// console.log(getLength([1, 2, 3, 4]));
// console.log(getLength({ length: 40 }));

// 在泛型约束中使用类型参数
// 你可以声明一个类型参数，且它被另一个类型参数所约束。 比如，现在我们想要用属性名从对象里获取这个属性。
// 并且我们想要确保这个属性存在于对象 obj上，因此我们需要在这两个类型之间使用约束
interface IkeyInterface {
	[key: string]: any;
}
let getProps = (obj: IkeyInterface, key: string): any => {
	return obj[key];
};
let x = { a: 1, b: 2 };
let resl = getProps(x, "a");
// let resl = getProps(x, "c"); // 对象不存在c参数但没报错
// console.log(resl);
function getProperty<T, K extends keyof T>(obj: T, key: K) {
	return obj[key];
}
let y = { a: 1, b: 2 };
getProperty(y, "a");
// getProperty(x, "c");  // 报错   类型“"c"”的参数不能赋给类型“"a" | "b"”的参数
