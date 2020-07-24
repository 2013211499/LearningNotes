// 泛型 generic 泛指的类型

function join<T, P>(first: T, second: P): T {
  return first;
}

function map<T>(params: T[]) {
  return params;
}

function map2<T>(params: Array<T>) {
  return params;
}

join<string, number>('1', 2);

map<string>(['123']);

// 不写会进行类型推断
join(1, '1');
