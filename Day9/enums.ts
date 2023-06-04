const beforeLoad = "beforeLoad";
const loading = "loading";
const loaded = "loaded";

enum loadingState{
     beforeLoad = "beforeLoad",
     loading = "loading",
    loaded = "loaded"
}
const englishLoadingStates = {
    [loadingState.beforeLoad]:"Before Load"
}
const isLoading = (state: loadingState) => state === loadingState.loading;

console.log(isLoading(loadingState.beforeLoad));

//Literal types

//Numeric Literals Included 

function rollDice(dice:1|2|3):number{
    let pip = 0;
    for (let i = 0; i < dice; i++) {
       pip += Math.floor((Math.random() * 5)) + 1;
        
    }

    return pip;
}

console.log(rollDice(3));


//String Literals 
// function sendEvent(name: "addToCart", data: {productId: number}): void;
// function sendEvent(name: "checkOut", data: {cartCount: number}): void;
function sendEvent(name: "addToCart", data: unknown): void{
    console.log(`${name}: ${JSON.stringify(data)}`);

}

