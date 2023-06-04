//with Generics its possible to extend key of a type on another type

function pluck<DataType , KeyType extends keyof DataType>(
    items:DataType[],
    key: KeyType
):DataType[KeyType][]{
    return items.map((item) => item[key]);
}

const dogs = [
    {name: "mimi", age: 12},
    {name: "LG", age: 13}
];

console.log(pluck(dogs, "age"));
console.log(pluck(dogs, "name"));

//creating an interface of BasEvent for reusabililty
interface BaseEvent{
    time: number;
    user:string;
}
//creating an interface of EventMap for reusabililty

interface EventMap{
    addToCart: BaseEvent & {quantity: number; productID: string};
    checkOut: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
    name: Name,
    data: EventMap[Name]
):void{
    console.log([name, data]);
    
}

sendEvent("addToCart",{productID: 'foo', user:"baz", quantity:1, time:10})
sendEvent("checkOut",{time: 20, user:"bob"})