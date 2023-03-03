// /////////////
// Basic of function overloading
// ///////////////////////

//Creating interface for coordinate object 
interface Coordinate {
    x: number,
    y: number
}

//a function that defines string coordinate 
function parseCoordinate(str: string): Coordinate;
//a function that defines object coordinate 
function parseCoordinate(obj: Coordinate):Coordinate;
//a function that defines number coordinate 
function parseCoordinate(x: number, y: number):Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown):Coordinate{
    let coord: Coordinate={
        x:0,
        y:0
    };

    
//if/else Conditional statement to check the data type of the argument passed
    if (typeof arg1 === "string"){
        (arg1 as string).split(',').forEach(str =>{
            const [key,value] = str.split(":");
            coord[key as "x" | "y"] = parseInt(value,10)
        });
    
    }
    else if (typeof arg1 === "object"){
        coord = {
            ...(arg1 as Coordinate),
        };
    }
    else{
        coord={
            x: arg1 as number,
            y: arg2 as number
        };
    }
    return coord;
}

//printing out the result of the coordinate 
console.log(parseCoordinate(10,20));
console.log(parseCoordinate({x:52, y:35}));
console.log(parseCoordinate("x:52, y:35"));

