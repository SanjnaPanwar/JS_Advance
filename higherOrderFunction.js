const interView=(name)=>{
    if (name==="Sanjna"){
        return function(topic){
            console.log(`hallo ${name}.What is  ${topic}?,please explain me.....?`)
        }
    }if (name==="panwar"){
        return function(topic){
            console.log(`hallo ${name}.What is  ${topic}?,please explain me.....?`)
        }
    }if (name==="javascript"){
        return function(topic){
            console.log(`hallo ${name}.What is  ${topic}?,please explain me.....?`)
        }
    }else{
        return function (){
            console.log("Wellcome to Interview"); 
        }
    }
}
const candidate=interView("Sanjna");
candidate("IT")
candidate("AI")
candidate("uv")   