// // 基础类型 null undefined symbol boolean void
// const count: number = 123;
// const teachName: string = 'wei';

// // 对象类型
// class Person {}

// const teacher: {
//   name: string;
//   age: number;
// } = {
//   name: 'wei',
//   age: 18,
// };

// const numbers: number[] = [1, 2, 3];

// const wei: Person = new Person();

// const getTotal: () => number = () => {
//   return 123;
// };

// type annotation 类型注解 我们来告诉TS变量是什么类型
// type inference 类型推断
// 如果TS能够自动分析变量类型，我们就什么都不需要做了
// 如果TS无法分析变量类型，我们就需要使用类型注解

// let count1: number;
// count1 = 123;

// let countInference = 123;

// const firstNumber = 1;
// const secondNumber = 2;
// const total = firstNumber + secondNumber;

// function getTotalNew(firstNumber: number, secondNumber: number) {
//   return firstNumber + secondNumber;
// }

// const total = getTotalNew(1, 2);

// const obj1 = {
//   name: 'wei',
//   age: 18,
// };

/**
 * 函数部分
 */
// function add(first: number, second: number): number {
//   return first + second;
// }

// const total = add(1, 2);

// function sayHello(): void {
//   console.log('hello');
// }

// function errorEmitter(): never {
//   console.log('123');
//   // throw new Error();
//   while (true) {
//     console.log('1');
//   }
// }

// function add1({ first, second }: { first: string; second: string }): string {
//   return first + second;
// }

// const total2 = add1({ first: 'wei', second: 'chen' });

// function getNumber({ first }: { first: number }) {
//   return first;
// }

// const count11 = getNumber({ first: 2 });

// let func: (str: string) => number = (str) => {
//   return parseInt(str, 10);
// };

// const func1 = (str: string): number => {
//   return parseInt(str, 10);
// };

// const date = new Date();

// // 其他的 case
// interface PersonInfo {
//   name: string;
// }
// const rawData = '{"name": "weichen "}';
// const newData: Person = JSON.parse(rawData);

// let temp: number | string  = 123;
// temp = 456;

/**
 * 数组部分
 */
// const arr: (number | string)[] = [1, '2', 3];

// class Teacher {
//   name: string;
//   age: number;
// }

// // type alias 类型别名
// type User = { name: string; age: number };
// const objectArr: Teacher[] = [
//   new Teacher(),
//   {
//     age: 30,
//     name: 'weichen',
//   },
// ];

// // 元祖 tuple  数量有限，类型固定
// // 当明确知道数组里每一个index对应的value是具体什么类型时，| 运算符约束不住了，需要用到tuple
// const teacherInfo: [string, string, number] = ['wei', 'male', 25];

/**
 * interface 接口  和type相类似，但并不完全一致
 */

// interface Person {
//   readonly name: string;
//   age?: number;
//   [propName: string]: any; //可选属性
//   say(): string;
// }

// interface Teacher extends Person {
//   teach(): string;
// }

// interface SayHi {
//   (word: string): string;
// }

// const getPersonName = (person: Teacher): void => {
//   console.log(person.name);
//   //  person.name = name;
// };

// // 当用字面量时，ts会进行强校验
// getPersonName({
//   name: 'wei',
//   say() {
//     return 'hello';
//   },
//   height: 170,
//   teach() {
//     return 'teach';
//   },
// });
// const me = {
//   name: 'wei',
//   height: 170,
//   say() {
//     return 'hello';
//   },
//   teach() {
//     return 'teach';
//   },
// };
// getPersonName(me);

// const say: SayHi = (word: string) => {
//   return 'sayHi';
// };

/**
 * 类
 */

// class Person {
//   name = 'wei';
//   getName() {
//     return this.name;
//   }
// }

// class Teacher extends Person {
//   getTeacherName() {
//     return 'dell';
//   }
//   getName() {
//     return super.getName() + 'lee';
//   }
// }

// const person = new Teacher();
// console.log(person.getName());

// private protected public访问类型
// public 允许在类的内外被调用
// private 允许在类内被调用
// protected 允许在类内及继承的子类中使用
// class Person {
//   protected name: string;
//   public sayHi() {
//     this.name;
//     console.log('hi');
//   }
// }

// class Teacher extends Person {
//   sayBye() {
//     this.name;
//   }
// }

// const person = new Person();
// person.name = 'wei';
// console.log(person.name);
// person.sayHi();

// constructor
// class Person {
//   // public name: string;
//   constructor(public name: string) {
//     // this.name = name;
//   }
// }
// const person = new Person('wei');

// getter && setter
// class Person {
//   constructor(private _name: string) {}
//   get name() {
//     return this._name;
//   }
//   set name(name: string) {
//     this._name = name;
//   }
// }

// const person = new Person('wei');
// console.log(person.name);
// person.name = 'weichen';
// console.log(person.name);

// 单例模式
// class Demo {
//   private static instance: Demo;
//   private constructor(public name: string) {}
//   public static getInstance(name: string) {
//     if (!this.instance) {
//       this.instance = new Demo(name);
//     }
//     return this.instance;
//   }
// }

// const demo1 = Demo.getInstance('demo1');
// const demo2 = Demo.getInstance('demo2');
// console.log(demo1.name, demo2.name);

// 抽象类
// abstract class Geometry {
//   width: number;
//   abstract getArea(): number;
//   getType() {
//     return 'geo';
//   }
// }

// class Circle extends Geometry {
//   constructor(private _radius: number) {
//     super();
//   }
//   getArea() {
//     return this._radius ** 2 * Math.PI;
//   }
// }
// const circle = new Circle(3);
// console.log(circle.getArea());

// class Square {}

// interface Bird {
//   fly: boolean;
//   sing: () => {};
// }

// interface Dog {
//   fly: boolean;
//   bark: () => {};
// }

// // 类型断言
// // function trainAnimation(animal: Bird | Dog) {
// //   if (animal.fly) {
// //     (animal as Bird).sing();
// //   } else {
// //     (animal as Dog).bark();
// //   }
// // }

// // in语法做类型保护
// function trainAnimationSecond(animal: Bird | Dog) {
//   if ('sing' in animal) {
//     animal.sing();
//   } else {
//     animal.bark();
//   }
// }

// // typeof语法做类型保护
// function add(first: string | number, second: string | number) {
//   if (typeof first === 'string' || typeof second === 'string') {
//     return `${first} + ${second}`;
//   } else {
//     return first + second;
//   }
// }

// 使用 instanceof 语法来做类型保护
// class NumberObj {
//   public count: number;
//   constructor(count: number) {
//     this.count = count;
//   }
// }

// function addSecond(first: object | NumberObj, second: object | NumberObj) {
//   if (first instanceof NumberObj && second instanceof NumberObj) {
//     return first.count + second.count;
//   }
// }

// console.log(addSecond(new NumberObj(2), new NumberObj(3)));
