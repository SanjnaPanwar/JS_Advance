const youtuber={
    name:"sanjna",
    constent:"programing",
    feature:function(){
        console.log(`my fav youtuber is ${this.name}.she is doing ${this.constent} on JavaScript`)
    }
}
// youtuber.feature();
// let youtuberfun=youtuber.feature;
// youtuberfun()
let youtuberfun2=youtuber.feature.bind(youtuber);
youtuberfun2();



const youtuber={
    name:"sanjna",
    constent:"programing",
}
const youtuber1={
    name:"laddu",
    constent:"programing",
}
const youtuber2={
    name:"sanjna panwar",
    constent:"programing",
}

function feature(rating){
    console.log(`my fav youtuber is ${this.name}.she is doing ${this.constent} on JavaScript and i love to giving ${rating} rating to her.`)
}
let you=feature.bind(youtuber);
you(7);

let you1=feature.bind(youtuber1);
you1(9);

let you2=feature.bind(youtuber2);
you2(11);
