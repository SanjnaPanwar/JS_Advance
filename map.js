// In Normal function 
const arr=["Laddu","Sanju","Sanjna"];
const Newarr=arr.map(function(value){
    return value+"Panwar";
});
console.log(Newarr);
console.log(arr);



// with indexing
const arr=["Laddu","Sanju","Sanjna"];
const Newarr=arr.map(function(value,i){
    return i+":"+ value+"Panwar";
});
console.log(Newarr);
console.log(arr);



//use arrow function in object and map method 
const studentData=[
    {id:1,name:"sanjna",degree:"bsc"},
    {id:2,name:"laddu",degree:"12 th"},
    {id:3,name:"sanju",degree:"traning"}
];
const newData=studentData.map((value) =>{
    return `student name is ${value.name},student degree is ${value.degree}`;
});
console.log(newData)