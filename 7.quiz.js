const printItem = (a) => console.log(a)
const printDouble = (a) => console.log(a*2)
function iterate(max, action){
    for (i=0; i<max; i++){
        action(i);
    }
}

const a = iterate(10, printDouble);