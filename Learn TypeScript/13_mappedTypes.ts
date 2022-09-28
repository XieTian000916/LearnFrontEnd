export default {};

// 当你不想重复定义类型时，一个类型可以以另一个类型为基础创建新的类型
interface IPerson {
  name: string;
  age: number;
}

// 只读
type Readonly1<T> = {
  readonly [P in keyof T]: T[P];
};

type ReadonlyRes = Readonly1<IPerson>;

// 可选
type Partial1<T> = {
  [P in keyof T]?: T[P];
};

type PartialRes = Partial1<IPerson>;

// 通过 + - 指定添加或者删除
interface IPerson2 {
  readonly name?: string;
  readonly age?: number;
}

type ReadonlyPartial<T> = {
  -readonly [P in keyof T]-?: T[P];
};

type res = ReadonlyPartial<IPerson2>;

// Readonly/Partial 关键字
interface IPerson3 {
  name: string;
  age: number;
}

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type res1 = Readonly<IPerson3>;
type res2 = Partial<IPerson3>;

// Record映射类型
// 他会将一个类型的所有属性值都映射到另一个类型上并创造一个新的类型
type itemName = "person" | "animal" ;
type itemInfo = {
  name: string
  age: number
}
// interface IPerson  {
//   name: string
//   age: number
// }

type NewType = Record<itemName, itemInfo>
let res: NewType = {
  person: {
    name: "SaikaKawakita",
    age: 18
  },
  animal: {
    name: "doge",
    age: 0.3
  }
}
console.log(res);


// Pick映射类型
// 将原有类型中的部分内容映射到新类型中
type Info = {
  name: string
  age: number
}
// interface IInfo  {
//   name: string
//   age: number
// }

type PartProp = Pick<Info, "name">
let res2:PartProp = {
  name: "韩雪"
}
