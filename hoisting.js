// // variable hoisting in Javascript
// var a;
// console.log(a);
// a=20;
// var b;
// console.log(b);
// b=39;


// // function hoisting in JavaScripts
// sum(2,6);
// function sum(a,b){
//     c=a+b;
//     console.log(c);   
// }


// function hoisting in JavaScripts
console.log("I am a "+job);
var job="Web Developer";
console.log("I am a "+job);
whoAmI();
function whoAmI(){
    console.log("I am a "+job1);
    var job1="Web Developer";
    console.log("I am a "+job1);
}
