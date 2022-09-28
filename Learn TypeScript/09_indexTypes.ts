export default {};

// 使用索引访问类型来查询另一个类型上的特定属性
// []

class Person {
  name: string = "";
  age: number = 0;
}

type myType = Person["name"];
let n: myType = "tony";
console.log(n);

// 获取指定对象的部分属性的值,放到数组中返回
let cyberPerson = {
  name: "Jonny",
  age: 30,
  sex: "male",
};
function getObjValue<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  let arr = [] as T[K][];

  keys.forEach((key) => {
    arr.push(obj[key]);
  });

  return arr;
}
let res = getObjValue(cyberPerson, ["name", "sex"]);
console.log(res);

// 不会返回null/undefined/never类型
interface testInterface {
  a: string;
  b: number;
  c: boolean;
  d: symbol;
  e: null;
  f: undefined;
  g: never;
}
type testType = testInterface[keyof testInterface];
