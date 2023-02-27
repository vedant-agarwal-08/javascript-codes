const key="email";
const person={
    name:"vedant",
    age:19,
    "person hobbies":["guitar","football"]
}
// console.log(person.person hobbies)-
// won't work because of gap b/w person and hobbies
// that is why we use bracket notation
console.log(person["person hobbies"]);
person[key]="vedantagrawal@gmail.com";
console.log(person);