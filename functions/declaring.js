function print2(){
    let name="Hemanth"
    console.log(name)
}

print2()

// in js functions and class are same

const person={
    name:'hemanth',
    age:20,
    bio:function(){
        return `my name is ${this.name} and my age is ${this.age}`
    },
    introduceself(){
        return `my name is ${this.name}`
    }
    
}
console.log(person.introduceself())
console.log(person.bio())
