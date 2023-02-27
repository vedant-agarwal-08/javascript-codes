function app(){
    const myfunc=()=>{
        console.log("hello");
    }
    const addtwo=(number1,number2)=>{
        return number1+number2;
    }
    const mul=(num1,num2)=>{
        return num1*num2;
    }
    console.log("inside loop");
    myfunc();
    console.log(addtwo(2,3));
    console.log(mul(2,3));
}
app();