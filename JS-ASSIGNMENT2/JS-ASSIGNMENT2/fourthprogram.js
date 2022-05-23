var numbers = [11,12,13,14,15];
var newArray = [];
var square = function(numbers)
{
    for(i=0;i< numbers.length; i++)
    {
        newArray.push(math.pow(numbers[i],2));
    }
    console.log(newArray);
}
