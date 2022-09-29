// const apple = {
//   name: 'apple',
//   display: function(){
//     // 객체 안에서 자기자신의 속성에 접근할 때 항상 this
//     console.log(`${this.name} 🍎`)
//   }
// }

// const orange = {
//   name: 'orange',
//   display: function(){
//     // 객체 안에서 자기자신의 속성에 접근할 때 항상 this
//     console.log(`${this.name} 🍊`)
//   }
// }

function Fruit(name, emoji){
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`)
  }
}

const apple = new Fruit ('apple', '🍎')
const orange = new Fruit ('orange', '🍎')

console.log(apple);
console.log(orange);