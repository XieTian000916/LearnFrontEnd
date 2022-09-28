// 导入方式1
// 导入的名字可以自由命名，如test
import test = require("./23_modules_export");

class TryImport implements test.Person {
  name: string = "saika";
  age: number = 18;
  sex: number = 0;
  do() {
    console.log("hello!");
  }
}
let ti = new TryImport();
console.log(ti);
ti.do();

// 导入方式2
// 此处对象名必须一致，或者使用as进行重命名
import { obj as ob } from "./23_modules_export";
console.log(ob);

// 导入函数试试
import { func as fn } from "./23_modules_export";
fn();
test.func();

// 导入一个类试试
class inputClass extends test.OutClass {
  sex: number;
  constructor(name: string, age: number, sex: number) {
    super(name, age);
    this.sex = sex;
  }
}
let ic = new inputClass("kokomi", 18, 0);
ic.say();
