function isprime(n){
    if(n<=1) return false;
    if(n===1) return true;
    for (let i=2;i<n;i++){
        if(n%i==0) return false;
    }
    return true;

}

const arr=[2,4,5,6,7,8,9]
const res=[]

for(let i=0;i<arr.length;i++){
    if(isprime(arr[i])){
        res.push(arr[i])
    }
}

console.log("Prime no are: ",res)