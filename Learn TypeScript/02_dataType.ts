// 数值类型 number
// 定义了一个名称为money的变量，数据类型限定为number
let money: number;
money = 114514;
// money = '114514'; // 不能将类型“string”分配给类型“number”
// money = true;     // 不能将类型“boolean”分配给类型“number”
money = 0x00;
money = 0o00;
money = 0b00; // 其他进制输出时自动转换为十进制
// console.log(money);

// 布尔类型 boolean
let flag: boolean;
flag = true;
// flag = 1;       // 不能将类型“number”分配给类型“boolean”
// flag = 'true'; // 不能将类型“string”分配给类型“boolean”
// console.log(flag);

// 字符串型 string
let str: string;
str = "CanCanNeed";
// str = 1; // 不能将类型“number”分配给类型“strig”
// str = true; // 不能将类型“boolean”分配给类型“string”
// console.log(str);

// 数组类型
let homoList_str: string[];
homoList_str = ["1", "1", "4", "5", "1", "4"];
// homoList_str = [1, 1, 4, 5, 1, 4]; // 不能将类型“number”分配给类型“strig”
// homoList_str = [true, false];      // 不能将类型“boolean”分配给类型“string”

// let homoList_num: number[];
let homoList_num: Array<number>;
homoList_num = [1, 1, 4, 5, 1, 4];
// homoList_num = ['1', '1', '4', '5', '1', '4']; // 不能将类型“string”分配给类型“number”
// homoList_num = [true, false];      // 不能将类型“boolean”分配给类型“number”

let boolList: boolean[];
boolList = [true, false];
// boolList = ['true', 'false']; // // 不能将类型“string”分配给类型“boolean”
// boolList = [114514]; // 不能将类型“number”分配给类型“boolean”

let arbitrarily: any[];
arbitrarily = [1, "1", true]; // 输入任意数据类型均可

// 联合类型
let unionType: (string | number)[];
unionType = ["114514", 114514];

// console.log(homoList_str);
// console.log(homoList_num);
// console.log(boolList);
// console.log(arbitrarily);
// console.log(unionType);

// 元组 Tuple
// 数组的一种扩展
// 用于保存定长、定数据类型的数据
let tup: [string, number, Boolean];
tup = ["114514", 114514, true];
// tup = ['114514', 114514, true, 666];
// tup = [114514, true, '114514'];
// 超过指定长度或数据类型错位均报错
// console.log(tup);

// any类型的使用
// TS中的任意数据类型都可以赋值给any
// 变量的值会动态改变时,any类型可以让变量在编译阶段跳过类型检查
let anyType: any = 114514;
anyType = "114514";
anyType = true;
anyType = undefined;
anyType = null;
anyType = [1, "1", true, [1, 2, 3], { a: 1, b: 2 }, null, undefined];

// void类型
// TS中只有null和undefined可以赋值给void类型
let variable: void;
variable = undefined;
// variable = null; // 严格模式下不能将类型"null"赋值给"void"

// null & undefined
let a: undefined = undefined;
let b: null = null;
let num = 666;
// 在非严格模式下null和undefined可以赋值给number类型
// num = a;
// num = b;

// never & object
// never类型是那些总是抛出异常的或根本就不会有返回值的函数表达式的返回值类型
// never是任何类型的子类型,也可以赋值给任何类型
// 没有任何类型可以赋值给never
// !any也不能赋值给never!
function error(message: string): never {
	throw new Error(message);
}

// error("FBI Warning!");

// 返回never的函数必须存在无法到达的终点
function failed(): never {
	while (true) {
		//死循环不会报错
	}
}

// object类型
// 定义了一个只能保存对象的类型
let myID: object = {
	myname: "name",
	age: 22,
};
// console.log(myID);

// 枚举 enum
enum Season {
	Spring,
	Summer,
	Autumn,
	Winter,
}
let val: Season;
// val = "spring";
// val = true;
val = 666; // TS中枚举的本质就是数值类型,所以不报错
// console.log(val); // 666
val = Season.Spring;
// console.log(val); // 0
// val = Season[0]; //报错:不能将类型“string”分配给类型“Season”

// console.log(Season); // ?打印了所有文件的输出内容

// 打印出的是值,默认从零开始,依次递增
// console.log(Season.Spring);
// console.log(Season.Summer);
// console.log(Season.Autumn);
// console.log(Season.Winter);

// 可以手动指定值,后面依次递增
enum Season1 {
	Spring = 1,
	Summer,
	Autumn,
	Winter,
}
// console.log(Season1.Spring); //1
// console.log(Season1.Summer); //2
// console.log(Season1.Autumn); //3
// console.log(Season1.Winter); //4

// 后面指定的不影响前面
enum Season2 {
	Spring,
	Summer,
	Autumn = 66,
	Winter,
}
// console.log(Season2.Spring); //0
// console.log(Season2.Summer); //1
// console.log(Season2.Autumn); //66
// console.log(Season2.Winter); //67

// 都有指定值,输出指定值
enum Season3 {
	Spring = 11,
	Summer = 22,
	Autumn = 33,
	Winter = 44,
}
// console.log(Season3.Spring); //11
// console.log(Season3.Summer); //22
// console.log(Season3.Autumn); //33
// console.log(Season3.Winter); //44

// 枚举值与其数值(类似数组的索引号)
// console.log(Season3[11]);
// console.log(Season3.Spring);

// bright类型和symbol
// 极少使用,要用自己查...

// 变量声明与解构
// 与js中完全一致

// 类型断言
// 用于手动指定一个值的类型，即允许变量从一种类型更改为另一种类型
// 语法：<type>val  or:  val as type
str =
	"这种解法是很庸俗的It'sWrong挫不行蛇皮脑残低智商不够灵性没慧根你这样解的话就是笨蛋";
let len = (<string>str).length;
// console.log(len);
len = (str as string).length;
// console.log(len);

function strLength(x: string | number) {
	let len = (x as string).length;
	console.log(len);
}
// strLength(123); // undefined
// strLength("123"); // 3
// strLength(str); // 45

// type 类型别名
// 给一个类型起一个新名字，但是他们都代表一个类型
type vmz = "庸俗" | "蛇皮" | "不够灵性" | "没慧根" | "笨蛋" | 666 | false;
let criticize: vmz;
criticize = "庸俗";
criticize = 666;
criticize = false;
// 只能赋值对应类型定义好的内容
// criticize = 114514; //报错
// criticize = true; // 报错

type func = (x: string, y: number) => number;
// let tryFunc:func = (p:number, q:string) => q; // 报错
let tryFunc: func = (p: string, q: number) => q;
// console.log(tryFunc("666", 666));

type sbID = {
	name: string;
	age: number;
	sex: string;
};
let userID: sbID = {
	name: "uname",
	// age: "18", // 数据类型不匹配报错
	age: 18,
	sex: "male",
};
