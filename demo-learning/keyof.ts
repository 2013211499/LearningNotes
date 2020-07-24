interface Person {
  name: string;
  age: number;
  gender: string;
}

class Teacher {
  constructor(private info: Person) {}
  // getInfo(key: string) {
  //   // 如果什么key都可以不加约束地传进来，那么可能会返回undefined
  //   // 为了避免这种情况，对key进行约束
  //   if (key === 'name' || key === 'age' || key === 'gender')
  //     return this.info[key];
  // }
  /**
   * 也可以用泛型 + keyof
   * T extends 'name'  ===>  type T = 'name'
   * T extends keyof Person  ===> T要么是name要么是age要么是gender
   */
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key];
  }
}

const teacher = new Teacher({
  name: 'wei',
  age: 18,
  gender: 'male',
});

const log = teacher.getInfo('age');
console.log(log);

type NAME = 'name';
const abc: NAME = 'name';
