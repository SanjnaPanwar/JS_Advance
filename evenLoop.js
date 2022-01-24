function levelone(){
    console.log("inside levelone");
}
function leveltwo(){
    console.log("inside level two");
    levelone();   
}
function main(){
    console.log("inside main");
    leveltwo();   
}
main();

// main()->leveltwo()->levelone()->



function levelone(a){
    console.log(a);
}
function leveltwo(e){
    console.log(e);
    levelone("inside two");
}
function main(t){
    console.log(t);
    leveltwo("inside main");
    
}
main("inside level one")


// main()->leveltwo()->levelone()
