// 1
const numbers=[1,2,3,4,5];
const sum=numbers.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue
});
console.log(sum);

// 2
const usercart=[
    {productId:1,productname:"mobile",price:12000},
    {productId:2,productname:"laptop",price:52000},
    {productId:3,productname:"tv",price:62000},
    {productId:4,productname:"pc",price:15000},
];
const totalamount=usercart.reduce((totalprice,currentproduct)=>{
    return totalprice+currentproduct.price;
},0);
console.log(totalamount);