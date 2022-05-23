//Question 1---------->

var Rectangle = function(width,height) 
{
    this.width = width;
    this.height = height;
    this.area = function()
    {
        console.log("Area of the Rectangle is : " +this.width * this.height);
    }
} 

var myRect1 = new Rectangle(15,25); 
var myRect2 = new Rectangle(20,30);
var myRect3 = new Rectangle(45,65);
var myRect4 = new Rectangle(25,50);

console.log(myRect1.width); 
console.log(myRect1.height);
myRect1.area();
console.log("---");

console.log(myRect2.width);
console.log(myRect2.height);
myRect2.area();
console.log("-----")
console.log(myRect3.width); 
console.log(myRect3.height);
myRect3.area();
console.log("---")
console.log(myRect4.width); 
console.log(myRect4.height);
myRect4.area();
console.log("---")




//Question 2-------->
Rectangle.prototype.getArea = function()
{
    console.log("Getting Area using prototype property : " +this.width * this.height);
}

console.log(Rectangle.prototype);
myRect1.getArea(); 
myRect2.getArea();
myRect3.getArea();
myRect4.getArea();


//Question 3---->

Rectangle.prototype.getAreaForRect = function(width,height)  
{
    console.log("Getting Area using prototype property : " +width * height);
}

console.log(Rectangle.prototype);
myRect1.getAreaForRect(4,5); //calling method which is created using prototype property
myRect2.getAreaForRect(5,6);
myRect3.getAreaForRect(7,8);
myRect4.getAreaForRect(11,2);


//Question 4---->
var obj = {
    firstName : "Naresh",
    lastName : "Aketi"
};
console.log(obj);

//Question 5--->

var obj1 = {
    firstName : "Naresh",
    middleName : "kumar",
    lastName : "Aketi"
};
console.log(obj1);


//Question 6 => Create a string with what looks like an object with firstName and lastName,use eval() property.

var myString = new String('4 + 4')
eval(myString.toString());
console.log(eval(myString.toString()));




//Question 8 => Creating a Person dynamic object
function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}

Person1 = new Person("Naresh","Aketi",24,['html','C#'],"10/05/1998",{city:"Tanuku",pincode:534328},"false","SoftwareEngineer");
Person2 = new Person("Manish","Reddy",24,["Nodejs","dotnet"],"14/1/1997",{city:"Ranchi",pincode:500030},"false","Analyst");

console.log(Person1);
console.log(Person2);

print=function()       
{
    console.log(Person1);
    console.log(Person2);
}();



//Question 9 =>Abhishek and Amithab program
function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}
Amithabh = new Person("Amithabh","Bacchan",90,['java','c#'],"10/05/1954",{city:"Kolhapur",pincode:200134},"false","AnalystA2");
Abhishek = new Person("Abhishek",50,["html","css"],"05/04/1981","false","SrAnalyst");
Aaradhya = new Person("Aaradhya",10,"02/11/2005","false","film");

var Abhishek = Object.create(Amithabh); 
var Aaradhya = Object.create(Abhishek);   

print = function()
{
    console.log(Amithabh);
    console.log(Abhishek.lastName);
    console.log(Abhishek.address);
    console.log(Aaradhya.lastName);
    console.log(Aaradhya.skills);
    console.log(Aaradhya.address);
    console.log(Aaradhya.firstName);
}();



//Question 10 => Bank Account Application

function Account(accountNumber,accountHolderName,accountBalance) 
{
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
}
function Savings(isSalary,accountNumber,accountHolderName,accountBalance)
{
    this.isSalary = isSalary;
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
    this.withdraw = function(amount)
    {
        if(this.accountBalance > 0 && this.accountBalance < 100)
        {
            console.log("Insuffient balance! Account balance is  less than 100 rs.");
        } 
        if((this.accountBalance >= 100 && this.accountBalance <= 500) && amount === 200)
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Account balance after debiting  : " + this.accountBalance);
        }
        if((this.accountBalance > 500 && this.accountBalance <= 5000) && amount === 500 || amount === 2000);
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Account balance after debiting  : " + this.accountBalance);
        }
        if((this.accountBalance > 5000) && amount === 200 || amount === 500 || amount ===2000)
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Account balance after debiting : " + this.accountBalance);
        }
        if(this.accountBalance <= 0)
        {
            console.log("OPPS! , Insufficient balance in your Account--Can't Withdraw");
        }
      
    };
    this.getCurrentBalance = function()
    {
        console.log("Your current Account balance is : " + this.accountBalance);
    };
}
function Current(odLimit,accountNumber,accountHolderName,accountBalance)
{
    this.odLimit = odLimit;
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
    this.withdraw = function(amount)
    {
        if(odLimit > 500)
        {
            if((this.accountBalance > 500 && this.accountBalance < 2000) && amount === 200 || amount === 500)
            {
                this.accountBalance = this.accountBalance - amount;
                console.log("Balance after debiting the money is : " +this.accountBalance);
            }
            if((this.accountBalance > 2000) && amount=== 200 || amount === 500 || amount === 2000)
            {
                this.accountBalance = this.accountBalance - amount;
                console.log("Your balance after debiting the money is : " +this.accountBalance);
            }
        } 
        else
        {  
            console.log("odLimit for Current acocunt is less than 500");
        }  
    };
    this.getCurrentBalance = function()
    {
        console.log("Current balance in Account : " + this.accountBalance);
    };
       
}

var obj1 = new Account(50100,"Naresh",43657);
console.log(obj1);


var objSavings = new Savings("true",12435,"Kumar",908735); 
console.log(objSavings);
console.log(objSavings.withdraw(100));
console.log(objSavings.getCurrentBalance());

var objCurrent = new Current(550,689754,"Aketi",2876490); 
console.log(objCurrent);
console.log(objCurrent.withdraw(2500));
console.log(objCurrent.getCurrentBalance());
