// // 类的装饰器
// // 装饰器本身是一个函数
// // 通过@符号来使用

// function testDecorator(flag: boolean) {
//   if (flag) {
//     return function (constructor: any) {
//       constructor.prototype.getName = () => {
//         console.log('wei');
//       };
//       console.log('decorate');
//     };
//   } else {
//     return function (constructor: any) {};
//   }
// }

// @testDecorator(true)
// class Test {
//   hello() {}
// }

// const test = new Test();
// (test as any).getName();
// console.log('test: ', test.hello);

// function testDecorator() {
//   return function <T extends new (...args: any[]) => any>(constructor: T) {
//     console.log('3');
//     return class extends constructor {
//       name = 'chen';
//       getName() {
//         return this.name;
//       }
//     };
//   };
// }

// const Test = testDecorator()(
//   class Test {
//     name: string;
//     constructor(name: string) {
//       console.log('1');
//       this.name = name;
//       console.log('2');
//     }
//   }
// );

// const test = new Test('wei');
// console.log(test.name, test.getName);

// 类的方法装饰器
// 普通方法  target对应的是类的prototype
// 静态方法  target对应的是类的构造函数
function getNameDecorator(
  _target: any,
  _key: string,
  _descriptor: PropertyDescriptor
) {
  _descriptor.writable = false;
  console.log(_target, typeof _target, _key);
}

// function nameDecorator(target: any, key: string): any {
//   const descriptor: PropertyDescriptor = {
//     writable: false,
//   };
//   return descriptor;
// }

// 修改的并不是实例上的name 而是原型上的name
function nameDecorator(target: any, key: string) {
  target[key] = 'chen';
}

// 参数: 原型 方法名 参数所在的位置
function paramDecorator(target: any, key: string, paramIndex: number) {
  console.log(target, key, paramIndex);
}

// name放在实例上
class Test {
  @nameDecorator
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @getNameDecorator
  getName() {
    return this.name;
  }
  getInfo(@paramDecorator name: string, age: number) {
    console.log(name, age);
  }
}

const test = new Test('123');
// test.getName = () => {
//   return 're-write func';
// };
