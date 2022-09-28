export default {};

// 函数类型的兼容性

// 参数类型:参数类型必须相同
let func1 = (x: string) => {};
let func2 = (y: string) => {};
let func3 = (z: number) => {};
func1 = func2;
func2 = func1;
// func1 = func3;
// func3 = func1;
/* 不能将类型“(x: number) => void”分配给类型“(x: string) => void”
   参数“x”和“z” 的类型不兼容。
   不能将类型“string”分配给类型“number” 
*/

// 参数个数：少的可以赋值给多的
let func4 = (a: number, b: number) => {};
let func5 = (x: number) => {};
func4 = func5;
// func5 = func4; //不能将类型“(a: number, b: number) => void”分配给类型“(x: number) => void”

// 返回值类型:类型必须相同
let func6 = (): number => 18;
let func7 = (): number => 28;
let func8 = (): string => "woaixuexi";
func6 = func7;
func7 = func6;
// func6 = func8;
/* 不能将类型“() => string”分配给类型“() => number”。
   不能将类型“string”分配给类型“number” 
*/
// func8 = func6;
/* 不能将类型“() => number”分配给类型“() => string”。
   不能将类型“number”分配给类型“string” 
*/

// 函数双向协变
// 1.参数的双向协变
let func9 = (x: number | string) => {};
let func10 = (x: number) => {};
// func9 = func10;
/* 不能将类型“(x: number) => void”分配给类型“(x: number | string) => void”。
   参数“x”和“x” 的类型不兼容。
   不能将类型“string | number”分配给类型“number”。
   不能将类型“string”分配给类型“number”。
*/
func10 = func9;

// 2.返回值双向协变
// 不能将返回值是联合类型的赋值给具体类型的
// 可以将返回值是具体类型的赋值给联合类型的
let func11 = (x: boolean): number | string => (x ? 18 : "张含韵");
let func12 = (x: boolean): number => 28;
func11 = func12;
// func12 = func11;
/* 不能将类型“(x: boolean) => number | string”分配给类型“(x: boolean) => number”。
   不能将类型“string | number”分配给类型“number”。
   不能将类型“string”分配给类型“number”。
*/

// 函数重载
// 不能将重载少的赋值给重载多的
// 可以将重载多的赋值给重载少
function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: any, y: any) {
  return x + y;
}

function sub(x: number, y: number): number;
function sub(x: any, y: any) {
  return x - y;
}

let fn1 = add;
// fn1 = sub;
/* 不能将类型“(x: number, y: number) => number”分配给
   类型“{ (x: number, y: number): number; (x: string, y: string): string; }”。
   参数“x”和“x” 的类型不兼容。
   不能将类型“string”分配给类型“number”。
*/

let fn2 = sub;
fn2 = add;

// 可选参数及剩余参数
// 当一个函数有剩余参数时，它被当做无限个可选参数
function func(args: any[], callback: (...args: any[]) => void) {}

func([1, 2], (x, y, z) => console.log(x + ", " + y + z));
func([1, 2], (x?, y?) => console.log(x + ", " + y));
func([1, 2], (x, y?, z?) => console.log(x + ", " + y));
