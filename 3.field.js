// 접근제어자 - 캡슐화
// private(#), public(기본), protected : 클래스 내부용으로 외부에서 접근 막을때 # 사용
class Fruit {
  #name;
  #emoji;
  #type = '과일';
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit("apple", "🍎");

console.log(apple);
