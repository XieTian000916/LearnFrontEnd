export default {};

// 枚举类型补充知识
// 数字枚举
// 1.数字枚举的取值可以是字面量, 也可以是常量, 也可以是计算的结果
// 2.如果采用字面量对第一个成员进行赋值，下面的成员会自动递增
// 3.如果采用常量或计算结果进行赋值，则下面的成员也必须初始化
const val = 100;
const num = () => 200;
enum Gender {
  Male = val,
  Female = num(),
  //Intersex, // 枚举成员必须具有初始化表达式
}

// 字符串枚举
// 1.如果采用字面量对第一个成员进行赋值，下面的成员也必须赋值
enum Direction {
  up = "UP",
  down = "DOWN",
  // 3.字符串枚举不能使用常量或者计算结果给枚举值赋值
  //   right = 10 + 1, // 含字符串值成员的枚举中不允许使用计算值
}
console.log(Direction.up); //UP
console.log(Direction.down); //DOWN
// 2.采用[index]的形式不能获取到内容,需要传入[key]
// console.log(Direction[0]); // undefined
console.log(Direction["up"]); // UP

enum Lang {
  stp1 = "HTML",
  // 4.它可以使用内部的其它枚举值来赋值
  stp2 = stp1,
}

// 异构枚举：枚举中既包含数字又包含字符串, 我们就称之为异构枚举
// 1.如果是字符串枚举, 那么无法通过原始值获取到枚举值
enum HeterogeneousEnums {
  Yes = 0,
  No = "No",
}
console.log(HeterogeneousEnums.Yes); // 0
console.log(HeterogeneousEnums.No); // No
console.log(HeterogeneousEnums[0]); // Yes
console.log(HeterogeneousEnums["No"]); // No

// 把枚举成员当做类型来使用
enum gender {
  Male,
  Female,
}
interface testInterface {
  sex: gender;
}
class Person implements testInterface {
  sex: gender.Male = 1;
}

// 枚举的兼容性
// 1、数字枚举与数字兼容
enum NumEnum {
  Yes,
  No,
}
let value: NumEnum;
value = NumEnum.Yes;
value = 666;

// 2、数字枚举与数字枚举不兼容
enum NumEnum1 {
  Yes,
  No,
}
enum NumEnum2 {
  Good,
  Bad,
}
let test: NumEnum1;
test = NumEnum1.Yes;
// test = NumEnum2.Good; // 不能将类型“NumEnum2.Good”分配给类型“NumEnum1”

// 3、字符串枚举与字符串不兼容
enum StrEnum {
  Male = "jimmy",
  Female = "kim",
}
let str: StrEnum;
str = StrEnum.Male;
str = StrEnum.Female;
// str = "howard"; // 不能将类型“"howard"”分配给类型“StrEnum”

// 4、字符串枚举与字符串枚举不兼容
enum StrEnum1 {
  Male = "kong",
  Female = "ying",
}
enum StrEnum2 {
  Male = "deluc",
  Female = "kaiya",
}
let StrTest: StrEnum1;
StrTest = StrEnum1.Male;
// StrTest = StrEnum2.Male; // 不能将类型“StrEnum2.Male”分配给类型“StrEnum1”
