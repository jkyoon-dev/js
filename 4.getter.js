// 접근자 프로퍼티 (Accessor Property)

class Student {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName; 
  }
  // fullname(){
  //   return `${this.lastName} ${this.firstName}`
  // }
  get fullName(){
    return `${this.lastName} ${this.firstName}`  
  }
}

const student = new Student ('김','수지');
console.log(student.firstName);
console.log(student.fullName)