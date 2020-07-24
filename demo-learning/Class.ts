// interface Item {
//   name: string;
// }

// class DataManager<T extends Item> {
//   constructor(private data: T[]) {}
//   getItem(index: number): string {
//     return this.data[index].name;
//   }
// }

// // const data = new DataManager<string>(['1']);
// // console.log(data.getItem(0));

// const data = new DataManager([{ name: 'wei' }]);

// 想让类型同步，但又只希望类型是string和number该如何做？
class DataManager<T extends number | string> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
}

const data = new DataManager([12]);

function hello<T>(param: T): T {
  return param;
}
const func: <T>(param: T) => string = <T>(): string => {
  return '123';
};

const fc: <T>(params: T) => T = hello;
