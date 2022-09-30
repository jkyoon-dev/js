// 매개변수 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 Default Parameters a = 1
function add (a = 0 , b = 10) {
  // console.log(arguments)
  return a + b;
}

// console.log(add(1, 2, 3))

// Rest 매개변수 Rest Parameters : 몇개의 인자를 받아올지 모를때
function sum(a, b, ...numbers) {
  console.log('a :', a);
  console.log('b :', b);
  console.log('numbers : ', numbers);
}

const sumList = sum(1,2,3,4,5,6,7,9,10)