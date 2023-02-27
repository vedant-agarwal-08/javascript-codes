const person={
    name:"vedant",
    age:19,
    "person hobbies":["guitar","sleeping"]
}
for(let key in person){
    // console.log(key)
    // console.log(person[key])
    // // // // key-value pair
    console.log(`${key}:${person[key]}`);
    // console.log[key,":",person[key]];
    // console.log(Object.keys(person));
}
for(let key of Object.keys(person)){
    console.log(person[key]);
}
