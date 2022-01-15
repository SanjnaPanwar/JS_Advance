// sum
const arr=[1,2,3,4,5,6];
let sum=arr.reduce((accum,curre)=>{
    return accum+curre;
});
console.log(sum)


// product
const arr=[1,2,3,4,5,6];
let pro=arr.reduce((accum,curre)=>{
    return accum*curre;
});
console.log(pro)



// average
const arr=[1,2,3,4,5,6];
let average=arr.reduce((accum,curre,i)=>{
    return (accum+curre)/i;
});
console.log(average)