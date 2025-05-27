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