const myVar="value1";
function myapp(){
    function myfunc(){
        console.log("inside myfunc",myVar);
    }
    console.log(myVar);
    myfunc();
}
myapp();