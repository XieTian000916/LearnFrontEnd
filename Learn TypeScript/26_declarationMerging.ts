// 声明合并

/* 接口的合并
   注意点: 1.如果名字一样会进行合并
   2.如果里面出现了同名函数，则会转化为函数重载

   命名空间合并
   注意点:  1.与接口一样,若名称相同则会进行合并
            2.同名的命名空间中不能出现同名的变量,方法等
    3.命名空间还可以和同名的类/函数/枚举合并:
   命名空间与类合并:    1.say会被放在 prototype上   2.类必须定义在命名空间的前面
   命名空间和函数合并: 函数必须定义在命名空间的前面
   命名空间和枚举合并：没有先后顺序的要求 */

// 接口的合并
interface JieKou {
  outNum(inNum: string): number;
}

interface JieKou {
  outNum(inNum: number): number;
}

const numOut: JieKou = {
  outNum(inNum: any): number {
    if (typeof inNum === "string") {
      return inNum.length;
    } else {
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
  say(): void {
    console.log("say Saika");
  }
}

namespace Person {
  export const hi = (): void => {
    console.log("hi Saika");
  };
}

console.log(Person);
// [class Person] { hi: [Function (anonymous)] }   say被放在原型上

// 命名空间和函数合并
// 注意点: 函数必须定义在命名空间的前面

function getCounter() {
  // 此处未声明count变量
  getCounter.count++;
  console.log(getCounter.count);
}

namespace getCounter {
  export let count: number = 0;
}

getCounter(); // 1
getCounter(); // 2

// 命名空间和枚举合并
// 注意点: 没有先后顺序的要求
enum Gender {
  Male,
  Female,
}

namespace Gender {
  export const Yao: number = 666;
}

console.log(Gender);
// { '0': 'Male', '1': 'Female', Male: 0, Female: 1, Yao: 666 }
