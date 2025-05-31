console.log("hi")                                   //f1

function sync(){
    console.log("Hi Hemanth")                       //f3
    console.log("Hi sai")                           //f4
    console.log("Hi nith")                          //f5
}

sync()                                               //f2

setTimeout(()=>{console.log("Hi Hemanth"),2000})     //f6
setTimeout(()=>{console.log("Hi Sai"),3000})         //f7
setTimeout(()=>{console.log("Hi Nit"),5000})         //f8

console.log("Bye")                                   //f9


// in callstack first f1 will execute and f2 is func def and ant it is added in call stack
// it is executed in top of the stack and f3,f4,f5 and settime is also added in call stack 
// and it will inform to the browser and it will do ther work and and browser will send to the call back queue 
// event loop is used to check call stck should be empty and  it add from the queue 
