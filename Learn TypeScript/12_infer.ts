export default {};

// 假如想获取数组里的元素类型，如果是数组则返回数组中元素的类型，否则返回这个类型本身

type IStr = string[];
type INum = number[];

type Unpack<T> = T extends IStr ? string : T extends INum ? number : T;
type strType = Unpack<IStr>; // string
type numType = Unpack<INum>; // number
type otherType = Unpack<boolean>; // boolean

// 使用infer关键字简化操作
type ElemantOf<T> = T extends Array<infer S> ? S : T;
type res1 = ElemantOf<IStr>;
type res2 = ElemantOf<INum>;
type res3 = ElemantOf<boolean>;

// infer关键字可以推断出联合类型
type inferUnion<T> = T extends { a: infer S; b: infer S } ? S : never;
type res4 = inferUnion<{ a: string; b: boolean }>;
