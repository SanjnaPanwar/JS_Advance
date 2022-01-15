// let people = [
//     {name: "aaron",age: 65},
//     {name: "beth",age: 2},
//     {name: "cara",age: 13},
//     {name: "daniel",age: 3},
//     {name: "ella",age: 25},
//     {name: "fin",age: 1},
//     {name: "george",age: 43},
// ]

// let toddlers = people.filter(person => person.age >= 3)

// console.log(toddlers)



// let competitors = ["Anna", "Beth", "Cara", "avid"]

// function displayWinners(name, index, array) {
//     let isNextItem = index + 1 < array.length ? true : false
//     if (isNextItem) {
//     	console.log(`The No${index+1} winner is ${name}.`);
//     } else {
//     	console.log(`Sorry, ${name} is not one of the winners.`)
//     }
// }

// competitors.filter((name, index, array) => displayWinners(name, index, array))


function isEven(value) {
    return value % 2 == 0;
}
function isOdd(value2){
    return value2%2 != 0;
}
function func() {
    var filteredEven = [11, 98, 31, 23, 944].filter(isEven);
    var filteredOdd = [11, 98, 31, 23, 944].filter(isOdd);

    console.log("even=",filteredEven);
    console.log("odd=",filteredOdd);

}
func();