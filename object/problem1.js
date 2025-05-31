const person=[{name:"Hemanth",age:20},{name:"sai",age:15}]
const totalage=person.reduce((acc,curr)=>acc+curr.age,0)
const averageage=totalage/person.length
console.log(averageage)