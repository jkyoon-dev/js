// 함수 선언문 function name() {}
// 함수 표현식 const name = function () {}
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));
// 화살표 함수 const name = () => {}
// 단순 표현식이면 return 및 {} 생략 가능
let counter = (a, b) => a - b;
console.log(counter(2, 3));

// 생성자 함수 const object = new Function (); // 뒤 객체편에서

// IIFE (Immedicately - Invoked Function Expressions); 즉시 실행 함수 표현
(function run() {
  console.log("IIFE");
})();
