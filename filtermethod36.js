const numbers=[1,3,2,4,9];
const iseven=function(number){
    return number%2===0;
}
const evennumbers=numbers.filter(iseven);
console.log(evennumbers);