// class car{
//     constructor(name,year){
//         this.name;
//         this.year;
//     }
// }
// console.log(car.name)

// tor(name,year){
    //         this.name;
    //         this.year;
    //     }
    // }
    // console.log(car.name)
    

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
}
let myCar = new Car("laddu", 2018);
console.log("My scooty is " + myCar.age() + " years old.");