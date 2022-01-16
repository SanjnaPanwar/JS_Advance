var promise = new Promise(function(resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks"
    if(x === y) {
        resolve();
    } else {
        reject();
    }
    });
    
promise.then(function () {
        console.log('Success, You are a GEEK');
    }).catch(function () {
        console.log('Some error has occurred');
    });






// const  pobj1= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let rollnum=[1,2,3,4,5];
//         resolve(rollnum);
//         reject("error")
//     },2000);
// });
// // promise consume
// pobj1.then((rollnum)=>{
//     console.log(rollnum);
// }).catch((error)=>{
//     console.log(error);
// })


// let done =true;
// const isItDoneYet=new Promise((resolve,reject)=>{
//     if (done){
//         const workDone="here is the thing  i built ";
//         resolve (workDone)
//     }else{
//         const why="still working on something else";
//         reject(why);
//     }
// })
// // console.log(isItDoneYet);
// const checkIfItsDone = () => {
//     isItDoneYet
//       .then(ok => {
//         console.log(ok)
//       })
    //   .catch(err => {
//         console.error(err)
//       })
//   }
// checkIfItsDone()