const band={
    bandName:"arjit singh",
    famousSong:"Tum hi ho",
    year:"2012",
    anotherfamousSong:"Blue",
};
let{bandName,famousSong,...rest}=band;
console.log(bandName);
console.log(rest);