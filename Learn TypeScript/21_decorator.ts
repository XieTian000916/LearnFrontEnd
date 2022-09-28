export default {};

// 使用装饰器避免重复多次书写相同的代码
/* const userInfo: any = undefined;

class Test {
  getName() {
    try {
      return userInfo.name;
    } catch (e) {
      console.log(e);
    }
  }
  getAge() {
    try {
      return userInfo.age;
    } catch (e) {
      console.log(e);
    } // 重复书写了try与catch的内容
  }
}

const t = new Test();
t.getName(); // 输出报错
t.getAge(); // 输出报错 */

/* const userInfo: any = undefined;
function catchError(target: any, key: string, descriptor: PropertyDescriptor) {
  const fn = descriptor.value;
  descriptor.value = function () {
    try {
      fn();
    } catch (e) {
      console.log("userInfo上该属性不存在"); // 输出内容固定，泛用性不佳
    }
  };
}

class Test {
  @catchError
  getName() {
    return userInfo.name;
  }
  @catchError
  getAge() {
    return userInfo.age;
  }
}

const t = new Test();
t.getName();
t.getAge(); */

const userInfo: any = undefined;
// 使用工厂函数，传入参数自定义输出报错内容
function catchError(msg: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function () {
      try {
        fn();
      } catch (e) {
        console.log(msg); // 输出内容自定义
      }
    };
  };
}

class Test {
  @catchError("userInfo.name is not exsist")
  getName() {
    return userInfo.name;
  }
  @catchError("userInfo.age is not exsist")
  getAge() {
    return userInfo.age;
  }
}

const t = new Test();
t.getName();
t.getAge();
