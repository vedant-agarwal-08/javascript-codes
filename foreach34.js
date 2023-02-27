//1
const numbers=[1,3,2,4];
function myfunc(number,index){
    console.log(`index is ${index} number is ${number}`);
    
}
numbers.forEach(myfunc);

// 2
const users=[
    {firstname:"vedant",age:19},
    {firstname:"shubham",age:17},
    {firstname:"aman",age:18},
    {firstname:"vishal",age:20},
    {firstname:"juan",age:29},
]
users.forEach((function(user){
    console.log(user.firstname);
}));
