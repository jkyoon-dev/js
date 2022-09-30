class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
  }
}

class PartTImeEmployee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth){
    super(name, department, hoursPerMonth, PartTImeEmployee.PAY_RATE)
  }
}

const ellie = new FullTimeEmployee("엘리", "s/w", 30);
const bob = new PartTImeEmployee("밥", "s/w", 20);
console.log(ellie.calculatePay());
console.log(bob.calculatePay());

// class Emploree {
//   #time;
//   constructor (name, partName, time) {
//     this.name = name;
//     this.partName = partName;
//     if(isNaN(time) || time < 0){
//       this.#time = 0
//     } else{
//       this.#time = time;
//     }
//   }
//   get partTimeJob(){
//     console.log(`${this.time * 160 * 8000}원입니다.`)
//   }
//   get fullTimeJob(){
//     console.log(`${this.time * 160 * 10000}원입니다.`)

//   }
// }

// const JK = new Emploree ('JK', 'alba', 10);
// JK.partTimeJob()
