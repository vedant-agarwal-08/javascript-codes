
//1
function sumThree(number1,number2,number3){
    return number1+number2+number3;
}
const returnedValue=sumThree(2,3,4);
const returnedValue1=sumThree(2,3);
console.log(returnedValue);
console.log(returnedValue1);


//2
function iseven(number){
    if(number%2===0){
        return true;

    }else{
        return false;
    }

}
console.log(iseven(4));
console.log(iseven(5));

//3
function findtarget(array,target){
    for(let i=0;i<i<array.length;i++){
        if(array[i]===target){
            return i;
        }
        
    }
    return -1
}
const myArray=[1,3,8,90];
const ans=findtarget(myArray,8);
console.log(ans)
