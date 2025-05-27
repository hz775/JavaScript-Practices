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
