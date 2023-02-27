function addall(...numbers){
    let total=0;
    for(let number of numbers){
        total=total+number;
    }
    return total
}
const ans=addall(1,2,3,4,5);
console.log(ans);