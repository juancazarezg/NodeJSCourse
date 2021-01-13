var rect = {
    perimeter: (x,y) => (2*(x+y)), 
    area: (x,y) => (x*y)
};

function solveRect(l,b){
    console.log("Solve rect = " + l)
    if(l <= 0 || b<= 0 ){
        console.log("Dimensions hould be greater than zero")
    }else{
        console.log("the area is " + rect.area(l,b))
        console.log("The perimeter is " + (l+b+b))
    }
}

solveRect(2,4);
solveRect(4,5);