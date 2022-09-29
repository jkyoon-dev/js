// 객체를 손쉽게 만들수 있는 템플릿
class Fruit {
  static MAX_FRUITS = 4;
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  static makeRandomFruit(){
    return new Fruit('banana', '🍌')
  }

  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple이란 객체는 Fruit 클래스의 인스턴스이다.
const banana = Fruit.makeRandomFruit();
console.log(Fruit.MAX_FRUITS);
console.log(banana);
const apple = new Fruit("apple", "🍎");
const orange = new Fruit("orange", "🍎");

console.log(apple);
console.log(orange.display());

Math.pow();
Number.isFinite();