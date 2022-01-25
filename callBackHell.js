 // callbackhell
function display(){
    setTimeout(function show(){
        console.log("show function calling");
        // setTimeout(function call(){
        //     console.log("call function calling");
        // },2000);
    },4000);
    setTimeout(function call(){
        console.log("call function calling");
    },2000);
    console.log("display function calling");
}
display();
