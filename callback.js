// function display(callback){
//     console.log("Display function calling");
//     callback();
// }
// display(function(){
//     console.log("show function calling");
// });



function display(){
    setTimeout(function show(){
        console.log("show function calling");
    },5000);
    console.log("display function caalling")
};
display();