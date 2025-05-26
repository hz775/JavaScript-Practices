//Assignment Operator
let a=10
a+=1
console.log(a)
a-=1
console.log(a)
a*=2
console.log(a)
a/=5
console.log(a)
a%=2
console.log(a)
a**=3
console.log(a)


//arithmetic op

let number1=10
let number2=20

console.log(number1+number2)
console.log(number1-number2)
console.log(number1/number2)
console.log(number1%number2)
console.log(number1**number2)


function reverseString(str){
    return str.split('').reverse().join('')
}

console.log(reverseString("madam"))


function fibonocci(n){
    let a=0,b=1;
    for(let i=0;i<n;i++){
        console.log(a);
        let next=a+b;
        a=b;
        b=next;
    }
}

fibonocci(5)

function ispalindrome(str){
    let reversed=str.split('').reverse('').join('');
    return str === reversed;
}

console.log(ispalindrome("madam"));
console.log(ispalindrome("hello"));