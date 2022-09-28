function add(a, b) {
  console.log(a);
  // undefined
  console.log(b);
  // undefined
  return a + b;
}

const sum = add(1, 2);

console.log(sum);
console.log(add())
// NaN