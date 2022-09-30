// 배열 생성 방법
// 사이즈 전달
let array = new Array(2);
console.log(array);
// 실제 아이템 전달
array = new Array(1,2,3);
console.log(array);
// of 정해저있지않을때
array = Array.of(1,2,3,4,5);
console.log(array);
// [] 배열 리터럴
const anotherArray = [1,2,3,4];
console.log(anotherArray)

// from 그대로 복사해서 만들수있음 iterable 순회가능한
array = Array.from(anotherArray);
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적을 이어져 있어야됨
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고
// 오브젝트와 유사함(사실 같다고 봐도 무방)
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다.
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Typed Collections);
array = Array.from({
  0: '안',
  1: '녕',
  length: 2
})
console.log(array)