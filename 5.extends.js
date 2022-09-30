class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹자!");
  }
  sleep() {
    console.log("잔다");
  }
}

class Tiger extends Animal {}
class Dog extends Animal {
  constructor(color, ownerName) {
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log("놀자");
  }
  eat() {
    console.log('강아지가 먹는다')
  }
}


const dog = new Animal ('빨강이', '나')
console.log(dog)