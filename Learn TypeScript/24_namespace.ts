/* 项目开发过程中，我们会发现我们的命名是有严格规范的，我们不能随意的去起名字
但若是都采用尽量标准化的方式去命名，我们又无法避免的会造成污染
TypeScript提供了namespace避免这个问题出现 */

namespace A {
  export const a = 100;
  //   命名空间可以进行嵌套,被嵌套的需要export才能调用
  export namespace B {
    export const b = 200;
  }
  export interface Name {
    name: string;
  }
}
// 从命名空间取值
console.log(A.a);
console.log(A.B.b);

// 简化命名空间
let c = A.B.b;
console.log(c);
