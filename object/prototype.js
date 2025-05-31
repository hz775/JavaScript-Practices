const character={
    employee: function(){
        console.log("Software department")
    }
}

const manager={
    name:"Hemanth",
    __proto__:character,
}

manager.employee()


let arr=""
let numbers=[20,12,13,45,66]
arr=numbers.forEach(myfunction)

function myfunction(arr){
    setTimeout(() => {
        console.log(arr)
    }, 5000);
}