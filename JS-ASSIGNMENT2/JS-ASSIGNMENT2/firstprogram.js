function composedValue(square, double, value){
  var result1 = square(value);
  var result2 = double(result1);
    console.log("Composed result is",result2 );
}

function square(a){
    return a*a;
}
function double(a){
    return 2*a;
}

composedValue(square, double,3);