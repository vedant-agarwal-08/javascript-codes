const users=[
    {userId:1,firstName:"Vedant",gender:"male"},
    {userId:2,firstName:"Aman",gender:"male"},
    {userId:3,firstName:"Shubham",gender:"male"},
]
const[user1,user2,user3]=users;
console.log(user1);
const[{firstName}, ,{gender}]=users;
console.log(firstName);
console.log(gender);