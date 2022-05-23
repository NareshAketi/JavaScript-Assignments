//first program--
const age = 34;
console.log("Age :",age);
try{
    console.log("Increased age ",++age);
}
catch(e){
    console.log("error in the  try block is: ",e);
}

//second program--
const j = 45;
if(j>0){
    let i=30;
    i=i+j;
}
try{
    console.log("i is : ",i);
}
catch(e){
    console.log("error: ",e);
}

//Third program--
function Order(){
    this.id = 1,
    this.title = 'Porsche',
    this.price =1000
}
Order.prototype.printOrder =function(){
    return this.id+": " + this.title+": " + this.price
}
let obj1 = new Order();
console.log(obj1.printOrder());

Order.prototype.getPrice =function(){
    return this.price;
}
let obj2 = new Order();
console.log("The price of order is : ",obj2.getPrice());

let targetObject = new Order();
const source = Order;

const returnedTarget = Object.assign(targetObject, source);
console.log("returned target using object.assign  is",returnedTarget)


//fourth program--
let names = ['Naresh', 'Kumar', 'Aketi']
names.forEach(element => {
    console.log("name: ",element,"length: ",element.length);
});
