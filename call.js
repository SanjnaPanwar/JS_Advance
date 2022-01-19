const obj={
    name:"Sanjna",
    content:"JavaScript",
    feature:function(rating,susbcribe){
        console.log(`she is my fav person and her name ${this.name},she is doing ${this.content},i loe to give her ${rating} star..,plz ${susbcribe} her channel.`)
    }
}
const obj2={
    name:"laddu",
    content:"programming"
}
obj.feature.call(obj2,5,"subscribe");
