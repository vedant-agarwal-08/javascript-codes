function myfunc2(){
    console.log("inside myfunc 2");
}
function myfunc(callback){
    console.log("hello");
    callback();
}
myfunc(myfunc2);