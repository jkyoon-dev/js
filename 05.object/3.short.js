const x = 0;
const y = 0;

// key 이름과 참조하고 있는 변수의 이름이 동일한 경우
const coordinate = {x: x, y: y}
console.log(coordinate)

function makeObj(name, age) {
  // 전달받은 이름과 age라는 값을 받아서 새로운 obj
  return {
    name,
    age
  }
}

console.log(makeObj('hi', 20))
