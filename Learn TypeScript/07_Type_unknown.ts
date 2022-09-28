export default {};

// unknown 类型代表任何值。这与 any 类型类似，但更安全，因为对未知 unknown 值做任何事情都是不合法的。
// unknown 类型被称作安全的any

// 任何类型都可以赋值给unknown
let str: unknown;
str = 18;
str = "morty";
str = true;

// 不能将unknown类型赋值给其他任何类型
let num: number;
// num =str; // 不能将类型“unknown”分配给类型“number”
let bool: boolean;
// 使用类型断言解决报错
bool = str as boolean;
// 使用类型缩小解决报错
if (typeof str == "boolean") {
	bool = str;
}

// 3.unknown与其它任何类型组成的交叉类型最后都是其它类型
type MyType1 = number & unknown;
type MyType2 = unknown & boolean;
let a: MyType1 = 18;
let b: MyType2 = true;

// 4.unknown除了与any以外, 与其它任何类型组成的联合类型最后都是unknown类型
type MyType3 = unknown | any;
type MyType4 = unknown | number;
type MyType5 = unknown | string | boolean;

// 5.never类型是unknown类型的子类型
type MyType6 = never extends unknown ? true : false;
