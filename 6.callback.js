// 콜백함수
const add = (a, b) => a + b;
const multifly = (a, b) => a * b;

function calculator(a, b, action) {
  let result = action(a, b);
  console.log(result);
  return result;
}
// add 호출하지 않고 참조값을 전달
calculator(2, 3, add)