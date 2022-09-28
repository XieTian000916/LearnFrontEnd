export interface Person {
  name: string;
  age: number;
  sex: number;
  do(): void;
}

export const obj = {
  name: "kokomi",
};

export function func() {
  console.log("我是导入的函数");
}

export class OutClass {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  say() {
    console.log(`my name is ${this.name}`);
  }
}
