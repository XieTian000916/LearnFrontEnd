"use strict";
// 声明合并
const numOut = {
    outNum(inNum) {
        if (typeof inNum === "string") {
            return inNum.length;
        }
        else {
            return inNum;
        }
    },
};
console.log(numOut.outNum(666));
console.log(numOut.outNum("666"));
// 命名空间与类合并
// 注意点: 1.say会被放在 prototype上
//        2.命名空间只能放在与之合并的类之后
class Person {
    say() {
        console.log("say Saika");
    }
}
(function (Person) {
    Person.hi = () => {
        console.log("hi Saika");
    };
})(Person || (Person = {}));
console.log(Person);
// [class Person] { hi: [Function (anonymous)] }   say被放在原型上
// 命名空间和函数合并
// 注意点: 函数必须定义在命名空间的前面
function getCounter() {
    // 此处未声明count变量
    getCounter.count++;
    console.log(getCounter.count);
}
(function (getCounter) {
    getCounter.count = 0;
})(getCounter || (getCounter = {}));
getCounter(); // 1
getCounter(); // 2
// 命名空间和枚举合并
// 注意点: 没有先后顺序的要求
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
(function (Gender) {
    Gender.Yao = 666;
})(Gender || (Gender = {}));
console.log(Gender);
// { '0': 'Male', '1': 'Female', Male: 0, Female: 1, Yao: 666 }
