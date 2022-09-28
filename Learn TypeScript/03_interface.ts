export default {};
/* 
接口也是一种数据类型
interface interface_name {

}
 */
interface FullName {
	firstName: string;
	lastName: string;
}
let MyName: FullName = {
	firstName: "sky",
	lastName: "xie",
};
let MyName2: FullName = {
	firstName: "Tian",
	lastName: "Xie",
};
// console.log(MyName.firstName);
// console.log(MyName.lastName);

function sayMyName({ firstName, lastName }: FullName): void {
	console.log(`My name is ${lastName}${firstName}`);
}
// sayMyName(MyName);
// sayMyName(MyName2);

// 只读属性 & 可选属性
interface fullName {
	readonly firstName: string;
	readonly lastName: string;
	// 属性名?   表示该属性是可选属性
	age?: number;
}

let beauty: fullName = {
	firstName: "Kawakita",
	lastName: "Saika",
};
// beauty.lastName = "Yae" // 无法分配到 "lastName" ，因为它是只读属性

// 用接口约束变量或者形参，多一个或少一个都会报错
// 开发过程中往往出现多或少的情况
// 方案一：设置可选属性
// 方案二：使用变量（使用变量接过参数再赋值，编辑器浅校验不会报错）   不推荐！！！
// 方案三：类型断言

// 方案四：索引签名
// 索引签名用于描述那些通过“索引得到的”类型
interface fullName {
	readonly firstName: string;
	readonly lastName: string;
	age?: number;
	[props: string]: any;
}

let Saika: fullName = {
	firstName: "Kawakita",
	lastName: "Saika",
	age: 18,
	job: "actress",
};
// console.log(Saika);

// 函数接口
interface intrForFunc {
	(x: number, y: number): number;
}

const sum: intrForFunc = function (sum1: number, sum2: number): number {
	return sum1 + sum2;
};
// console.log(sum(10, 20));

// 数组接口
interface IStringArray {
	[index: number]: string;
}

let myArray: IStringArray;
myArray = ["Saika", "Miri"];

let myStr: string = myArray[0];
console.log(myStr);
