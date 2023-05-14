// Optional Parameter
function printIngredient(quantity:string, ingredient: string, extra?: string){
    console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ""})`);
    
}

printIngredient("1C", "Flour");
printIngredient("1C","Sugar","something more")


// Optional Fields
interface User{
    id:string;
    info?:{
        email?:string;
    }
}

// Checking the Availability of  field in an old way
function getEmail(user:User): string{
    if(user.info){
        return user.info.email!;
    }
    return "";
}

// Checking the Availability of  field in the modern way
function getEmailEasy(user:User): string{
    return user?.info?.email ?? "";
}


// Optional Callback 
function addWithCallback(x: number, y:number, Callback?:() => void){
    console.log([x,y]);
    Callback?.();
}
