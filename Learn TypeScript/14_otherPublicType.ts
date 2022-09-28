export default {};

// Required<Type>
// 构建一个由 Type 的所有属性组成的类型，设置为必填。与 Partial 相反
interface IPerson {
  name?: string;
  age?: number;
}

let res: IPerson = {
  name: "Saika",
};

let res2: Required<IPerson> = {
  name: "Saika",
  age: 18,
};

// Omit<Type, Keys>
// 类似Exclude
// 通过从 Type 中选取所有属性，然后删除 Keys （属性名或属性名的联合）来构造一个类型。
interface Student {
  name: string;
  age: number;
  score: number;
  sex: boolean;
}

type SProps = Omit<Student, "name">;
// delete key "name"
let res3: SProps = {
  age: 18,
  score: 100,
  sex: false,
};

// OmitThisParameter
// 从类型T中剔除this参数类型，并构造一个新类型

function add(x: number): void {
  console.log(x);
}

function f0(this: object, x: number) {}

function f1(x: number) {}

// (x: number) => void
type T0 = OmitThisParameter<typeof f0>;

// (x: number) => void
type T1 = OmitThisParameter<typeof f1>;

// string
type T2 = OmitThisParameter<string>;

const x: T0 = add;
const y: T1 = add;
const z: T2 = "Saika";

console.log(x);
console.log(y);
console.log(z);
