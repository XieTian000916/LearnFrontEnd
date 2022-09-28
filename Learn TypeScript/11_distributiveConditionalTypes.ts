export default {};

// 定义：被检测类型是一个联合类型的时候, 该条件类型就被称之为分布式条件类型

type ToArray<Type> = Type extends any ? Type[] : never;

type StrArrOrNumArr = ToArray<string | number>; // type StrArrOrNumArr = string[] | number[]

// 通常这是我们期望的行为，如果你要避免这种行为，你可以用方括号包裹 extends 关键字的每一部分。

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

// 'strArrOrNumArr' is no longer a union.
type strArrOrNumArr = ToArrayNonDist<string | number>;
// type StrArrOrNumArr = (string | number)[]

// 从T中剔除可以赋值给U的类型。 Exclude
type res = Exclude<string | number | boolean, number>

// 提取T中可以赋值给U的类型。 Extract
type res1 = Extract<string | number | boolean, number>

// 从T中剔除null和undefined。 NonNullable
type res2 = NonNullable<string | boolean | null | undefined>

// 获取函数返回值类型。 ReturnType
type res3 = ReturnType<()=>number>

// 获取一个类的构造函数参数组成的元组类型。 ConstructorParameters
class Person {
    constructor(name:string, age:number){}
}
type res4 = ConstructorParameters<typeof Person>;

// 获得函数的参数类型组成的元组类型。 Parameters
function say(name:string, age:number, gender:boolean) {
}
type res5 = Parameters<typeof say>;
