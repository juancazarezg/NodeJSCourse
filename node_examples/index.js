const rectangle = require('./rectangle');
var rect = require('./rectangle')

function solveRect(l,b){
    console.log("Solve rect = " + l)
  
    rect(l,b, (err, rectangle) => {
        if (err) {
            console.log("ERROR : ", err.message);
        }
        else{
            console.log("The area of the rect l = " + l + " and b = " + b + " is " + rectangle.area())
        }
    });
    console.log("This statement is after the call to rect");
}

solveRect(2,4);
solveRect(4,5);