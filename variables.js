
var name="Hemanth";
console.log(name);

let newName="Hemanth";
newName="Sai Siddhu";
console.log(newName);

// in let keyword we can change or modify the value

//const newName1="Sai"
//newName1="Saisiddu"
//console.log(newName1)


//let and const are some what similar and we cant modify the values
//we can use it where we are changing the values

const Naam="Hemanth"
const dob="01-1-2000";

let msg="Hi my name is "+name+" and i born on "+dob+".";

console.log(msg);


var name="Hemanth"
var name="sai"
name="SIDDU"
console.log(name)

//You can change it and declare it again.

let age=25;
age=30;
console.log(age)

//You can change it but can’t declare it again in the same block.
//works only inside the block where it's defined.

const country="India"
//country="Usa"
console.log(country)

//You can’t change or redeclare it.
//It must be given a value when created.
//But if it’s an object or array, you can change its contents

const car={brand:"BMW"};
car.brand="AUDI";
console.log(car.brand)

// object

let Person={
    name:"Hemanth",
    Age:22,
    DOB:"18/10/2003",
    Degree:"B-tech",
    College:"SRM"

};

console.log(Person.name);       //Dot notation
console.log(Person["name"]);    //Bracket method

Person.grade="9";               // adding new key
delete Person.DOB;              // delete values

if("name" in Person){
    console.log("Person is identified");
}

console.log("Keys: "+Object.keys(Person));
console.log("Values: "+Object.values(Person));


for (let key in Person) {
    console.log(`${key}: ${Person[key]}`);
}



