function calculator(a,b,op){
    try{
        let result
        switch(op){
            case '+':
                return a+b
            case '-':
                return a-b
            case '*':
                return a*b
            case '/':
                if(a!=0){
                    return a/b;}
                else{
                    return 0;}
            
        }
        throw "Error"
    }
     catch(c)
    {
        console.log(c)
    }
    
}

console.log(calculator('hemanth',2,'+'))
