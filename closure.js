const outerFun=(a)=>{
    let b =10;
    const innerFun=()=>{
        let sum=a+b;
        console.log(`the sum of two no.is ${sum}.`);
    }
    return innerFun();

}
outerFun(8)
// let inner=outerFun(5);
// console.log(inner())
// inner()