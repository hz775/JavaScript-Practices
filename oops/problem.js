class vechicle{
    constructor(name,model,color,noofseats){
        this.name=name,
        this.model=model,
        this.color=color,
        this.noofseats=noofseats
    }
    Quality(){
        if(this.name.toLowerCase()==="car" || this.model.toLowerCase()=="tata"){
            return `${this.name} is very trustable`
        }
    }
    Performance(){
        if(this.model.toLowerCase()==="bmw"){
            console.log("Good performance and High Speed")
        }
    }
  
}

let users=new vechicle("car","tata","Black",6)
let users1=new vechicle("car","Bmw","white",2)
console.log(users.Quality())
users.Performance()

