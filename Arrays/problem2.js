let values=[0,true,false,1,3,'strings',undefined,null]
let res=values.filter(item=>typeof item==='number' && !isNaN(item))
console.log(res)