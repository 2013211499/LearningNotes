// const Status = {
//   OFFLINE: 0,
//   ONLINE: 1,
//   DELETE: 2,
// };

// enum自动从0开始编号
// 也可以自行设置开始的编号
enum Status {
  OFFLINE = 2,
  ONLINE,
  DELETE = 8,
}

function getResult(status: number) {
  if (status === Status.OFFLINE) {
    return 'Offline else';
  } else if (status === Status.ONLINE) {
    return 'Online';
  } else if (status === Status.DELETE) {
    return 'Delete';
  }
  return 'error';
}

console.log(Status.OFFLINE);
console.log(Status.ONLINE);
console.log(Status.DELETE);

console.log(Status[3]);
console.log(Status[4]);
