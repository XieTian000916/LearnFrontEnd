"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
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
const userInfo = undefined;
// 使用工厂函数，传入参数自定义输出报错内容
function catchError(msg) {
    return function (target, key, descriptor) {
        const fn = descriptor.value;
        descriptor.value = function () {
            try {
                fn();
            }
            catch (e) {
                console.log(msg); // 输出内容自定义
            }
        };
    };
}
class Test {
    getName() {
        return userInfo.name;
    }
    getAge() {
        return userInfo.age;
    }
}
__decorate([
    catchError("userInfo.name is not exsist")
], Test.prototype, "getName", null);
__decorate([
    catchError("userInfo.age is not exsist")
], Test.prototype, "getAge", null);
const t = new Test();
t.getName();
t.getAge();
