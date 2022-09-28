export default {};

// 泛型的兼容性
// 因为TypeScript是一个结构化的类型系统，类型参数只在作为成员类型的一部分被消耗时影响到结果类型。

interface Empty<T> {}
let x: Empty<number>;
let y: Empty<string>;
// x = y; // 正确，因为y符合x的结构

/* 在上面，x和y是兼容的，因为它们的结构没有以区分的方式使用类型参数。通过给 Empty<T> 增加一
   个成员来改变这个例子，显示了这是如何工作的
 */
interface NotEmpty<T> {
  data: T; // 类型参数只在作为成员类型的一部分被消耗时影响到结果类型
}
let a: NotEmpty<number>;
let b: NotEmpty<string>;
// a = b; // 不能将类型“NotEmpty<string>”分配给类型“NotEmpty<number>”。
//不能将类型“string”分配给类型“number”
