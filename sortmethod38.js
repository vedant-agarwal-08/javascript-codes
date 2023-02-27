// 1
const numbers=[5,9,1200,410];
numbers.sort()
console.log(numbers);

// 2
const usernames=["vedant","abcd","pqrs"];
usernames.sort();
console.log(usernames);

// 3
const numbers1=[5,9,10,400,9000];
numbers.sort((a,b)=>{
    return a-b;
});
console.log(numbers1);

// 4
const usercart=[
    {productId:1,productname:"mobile",price:12000},
    {productId:2,productname:"laptop",price:52000},
    {productId:3,productname:"tv",price:62000},
    {productId:4,productname:"pc",price:15000},
];
usercart.sort((a,b)=>{
    return a.price-b.price;

});
console.log(usercart);