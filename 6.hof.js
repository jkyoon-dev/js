const fruits = ["π", "π₯", "π", "π₯"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// λ°°μ΄μ λΉκΈ λΉκΈ λλ©΄μ μνλκ²μ ν λ
fruits.forEach(function (value, index, array) {
  console.log("value", value);
  console.log("index", index);
  console.log("array", array);
});

// λ°°μ΄μ λΉκΈ λΉκΈ λλ©΄μ μνλκ²μ ν λ
fruits.forEach(value => console.log("value", value));

// μ‘°κ±΄μ λ§λ(μ½λ°±ν¨μ) μμ΄νμ ν’μλ
// find: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ λ°ν
// findIndex, some, every, filter

// Map λ°°μ΄μ μμ΄νλ€μ κ°κ° λ€λ₯Έ μμ΄νμΌλ‘ λ§€νν  μ μλ, λ³νν΄μ μλ‘μ΄ λ°°μ΄ μμ±!
const nums = [1, 2, 3, 4, 5];
result = nums.map(item => item * 2);
console.log(result);

// Floatmap: float λΉμ·ν¨

const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0,5,4,2,1,10];
numbers.sort();
console.log(numbers);
numbers.sort((a,b) => a - b);
console.log(numbers);

// reduce λ°°μ΄μ μμλ₯Ό μ μ΄μ μ μ΄μ κ°μ νλλ‘!
