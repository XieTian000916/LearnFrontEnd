export default {};

// 条件类型看起来像JavaScript中的三元表达式
// T extends U? True:false;
// 应用:解决函数重载问题

interface IName {
  name: string;
}

interface IAge {
  age: number;
}

type MyType<T> = T extends string ? string : any;
// type res = MyType<string>;
// type res = MyType<number>;

// function reload(name: string): IName;
// function reload(age: number): IAge;
// function reload(nameOrAge: string | number): IName | IAge;
// function reload(nameOrAge: string | number): IName | IAge {
//   throw nameOrAge;
// }
// // reload(123);
// reload("cancanneed");

// 使用条件类型优化函数重载
type condition<T> = T extends string ? IName : IAge;
function reLoad<T extends number | string>(nameOrAge: T): condition<T> {
  throw nameOrAge;
}
// console.log(reLoad(114514));
console.log(reLoad("ok"));

//使用函数重载后代码量明显减少
