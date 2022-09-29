const apple = {
  name: 'apple',
  display: function(){
    // 객체 안에서 자기자신의 속성에 접근할 때 항상 this
    console.log(`${this.name} 🍎`)
  }
}

apple.display()