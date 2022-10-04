// 얕은 복사 shallow copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign
// 얕은 복사때문에 Obj에서 복사하는건 좋지 않다.
const pizza = { name: '🍕', price: 2}
const hamberger = {name: '🍔', price:3}
const chips = {name: '🍟', price: 1}

const store1 = [pizza, hamberger];
const store2 = Array.from(store1);

console.log('store1',store1);
console.log('store2',store2)

pizza.price= 4;
console.log(store1)