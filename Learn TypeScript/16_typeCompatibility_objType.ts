export default {};

/* 对象类型的兼容性 */
interface nameTest {
  name: string;
}

let obj1 = { name: "Saika" };
let obj2 = { name: "Saika", age: 18 };
let obj3 = { age: 18 };

// 用接口约束对象类型，其中的属性可多不可少，否则不兼容
let nTest: nameTest;
nTest = obj1;
nTest = obj2;
// nTest = obj3; /* 类型 "{ age: number; }" 中缺少属性 "name"，但类型 "nameTest" 中需要该属性 */

interface infoTest {
  name: string;
  measurements: {
    B: number;
    W: number;
    H: number;
  };
}

let p1 = {
  name: "Saika",
  measurements: {
    B: 88,
    W: 59,
    H: 89,
  },
  age: 18,
};

let p2 = { name: "kokomi", measurements: {} }; // 可多不可少，会进行内部递归检查

let iTest: infoTest;
iTest = p1;
// iTest = p2;
/* 属性“measurements”的类型不兼容。
类型“{}”缺少类型“{ B: number; W: number; H: number; }”中的以下属性: B, W, H */
