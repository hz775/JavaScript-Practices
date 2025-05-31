 class BankingManagement{
    static noOfUsers=0;
    constructor(name,age,phNum,email,accountNo){
        this.name=name,
        this.age=age,
        this.phNum=phNum,
        this.email=email,
        this.accountNo=accountNo
        BankingManagement.noOfUsers++
    }
    cardApply(){
        console.log('Altready exit')
    }
    newCard(){
        if(this.age>19){
            console.log("create card")
        }
    }
    static totalusers(){
        console.log('no of users',BankingManagement.noOfUsers)
    }


 }
 class InitialDeposit extends BankingManagement{
    constructor(name,age,phNum,email,accountNo,DepositedMoney,AccBalance){
        super(name,age,phNum,email,accountNo);
        this.DepositedMoney=DepositedMoney,
        this.AccBalance=AccBalance
    }
    MonewDeposited(){
        console.log("Deposited Money:",this.DepositedMoney)
    }
    AccountBalance(){
        if(this.DepositedMoney>0){
             this.AccBalance=this.DepositedMoney
             return this.AccBalance
        }
    }


 }
 let user1=new BankingManagement("Nith",22,12335673,"abc@gmail.com",124364846)
 let user2=new BankingManagement("Nith",23,12335673,"abc@gmail.com",124364846)
 user1.newCard()
 user1.cardApply()
 user2.newCard()
 user2.cardApply()
 BankingManagement.totalusers()
 let user3=new InitialDeposit("Nith",22,12335673,"abc@gmail.com",124364846,3000,1000)
 user3.AccountBalance()
 user3.MonewDeposited()


 // static method should invoke using class name
 // class is a template of properties and methods
// inheritance is acquring properties of base class we can call using derived class object
// overriding("in base class method we are redefining the same method in child class")
// method chaining (we have to return the object(return this) then only it will work for ex: user3.Money().AccountBalance())





