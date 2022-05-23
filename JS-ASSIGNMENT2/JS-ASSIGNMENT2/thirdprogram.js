const myArray = [1, 43, 7, 4, 2];

function find(array, isEven) {
    for(let item of array){
        if(isEven(item))
        {
            console.log("first even number is: ",item);
            break;
        }
    }
}

// function to Check Even Numbers
function isEven(num) {
    return ((num % 2) == 0);
}
find(myArray,isEven);