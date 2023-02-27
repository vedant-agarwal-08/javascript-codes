// 1
const myarray=["hello","cat","dog","lion"];
function islength3(string){
    return string.length===3;
}
const ans=myarray.find(islength3);
console.log(ans);

// 2
const usercart=[
    {productId:1,productname:"mobile",price:12000},
    {productId:2,productname:"laptop",price:52000},
    {productId:3,productname:"tv",price:62000},
    {productId:4,productname:"pc",price:15000},
];
const myuser=usercart.find((user)=>{
    return user.productId===3;
});
console.log(myuser);