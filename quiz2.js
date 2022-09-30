class Emploree {
  #time;
  constructor (name, partName, time) {
    this.name = name;
    this.partName = partName;
    if(isNaN(time) || time < 0){
      this.#time = 0
    } else{
      this.#time = time;
    }
  }
  get partTimeJob(){
    console.log(`${this.time * 160 * 8000}원입니다.`)
  }
  get fullTimeJob(){
    console.log(`${this.time * 160 * 10000}원입니다.`)

  }
}

const JK = new Emploree ('JK', 'alba', 10);
JK.partTimeJob()