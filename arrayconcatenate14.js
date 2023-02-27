//1
let array1=["item1","item2"];
let array2=array1.slice(0);
array1.push("item3");
console.log(array1===array2);
console.log(array1)
console.log(array2)

//2
let array3=["item1","item2"];
let array4=[].concat(array1);
array1.push("item3");
console.log(array3===array4);
console.log(array3);
console.log(array4);

//3
let array5=["item1","item2"];
let array6=[...array5];
array5.push("item3");
console.log(array5===array6);
console.log(array5);
console.log(array6);