/*
let cities=["chennai","madurai","bangalore"];
console.log(cities.length);
console.log(cities[cities.length-1]);

let arr=[5,12,3,'a','abc',[3,4]]
console.log(arr[arr.length-1])
console.log(arr[5][0])
*/

let array=['a','b','c','d','e']
console.log(array)
array.push('f')
console.log(array)
console.log(array.pop())
console.log(array.shift())  // shift is used to remove element from the front
console.log(array.unshift('a'))     // unshift is used to add new element in the front
console.log(array)
/*
delete array[2]
console.log(array)
*/

console.log(array.splice(2,1))      // splice is used to delete an element using index
console.log(array)

array.splice(1,1,'m')
console.log(array)


console.log(array.slice(0,2))


let name=['a','b','c','d']
console.log(name.reverse())


//join is used to convert the array into string

let str=name.join();
console.log(str)

//split is used to convert string to array

let str3="a,b,c,d"
let str2=str3.split();
console.log(str2)

let arr1=[1,2,3,4]
let arr2=[4,5,6,7]

let joinedarr=arr1.concat(arr2)
console.log(joinedarr)

let joinedarr1=[...arr1,...arr2];
console.log(joinedarr1)


let Arr=[5,8,10,7,9,11]
console.log(Arr)

Arr.splice(3,3,17,11,111)
console.log(Arr)
console.log(Arr.unshift(100))
console.log(Arr.length-1,0,200)
Arr.push(1000)
let middle=Math.floor(Arr.length/2)
Arr.splice(middle,0,0)
console.log(Arr)