// 1st
async function f(){
    let promise =new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("done");
        },2000)
    })
let result = await promise;
console.log(result);
}
f();

// 2nd
// function scaryClown() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('🤡');
//       }, 2000);
//     });
//   }
  
//   async function msg() {
//     const msg = await scaryClown();
//     console.log('Message:', msg);
//   }
  
//   msg();




// 3rd
function who() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('🤡');
      }, 200);
    });
  }
  
  function what() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('lurks');
      }, 300);
    });
  }
  
  function where() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('in the shadows');
      }, 500);
    }); 
  }
  
  async function msg() {
    const a = await who();
    const b = await what();
    const c = await where();
  
    console.log(`${ a } ${ b } ${ c }`);
  }
  
  msg();