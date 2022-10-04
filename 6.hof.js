const fruits = ["🍌", "🥝", "🍇", "🥝"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 배열을 빙글 빙글 돌면서 원하는것을 할때
fruits.forEach(function (value, index, array) {
  console.log("value", value);
  console.log("index", index);
  console.log("array", array);
});

// 배열을 빙글 빙글 돌면서 원하는것을 할때
fruits.forEach(value => console.log("value", value));

// 조건에 맞는(콜백함수) 아이템을 팢을때
// find: 제일 먼저 조건에 맞는 아이템을 반환
// findIndex, some, every, filter

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성!
const nums = [1, 2, 3, 4, 5];
result = nums.map(item => item * 2);
console.log(result);

// Floatmap: float 비슷함

const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0,5,4,2,1,10];
numbers.sort();
console.log(numbers);
numbers.sort((a,b) => a - b);
console.log(numbers);

// reduce 배열의 요소를 접어서 접어서 값을 하나로!
