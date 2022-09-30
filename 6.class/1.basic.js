// 객체를 손쉽게 만들수 있는 템플릿
// 0. 클래스
class Fruit {
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}
// 1. 생성자 함수
// function Fruit(name, emoji){
//   this.name = name;
//   this.emoji = emoji;
//   this.display = () => {
//     console.log(`${this.name}: ${this.emoji}`)
//   }
// }

// apple이란 객체는 Fruit 클래스의 인스턴스이다.
const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍎");

console.log(apple);
console.log(orange);
// obj는 객체이고 어떤 클래스의 인스턴스 아님
const obj = {name: 'ellie'}