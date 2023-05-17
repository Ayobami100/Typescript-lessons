// The challenge is to reproduce For Each, Filter and Map using reduce and it has to be type safe in Generics

// For each loop 
function myForEach<T>(items: T[], forEachFunc: (V:T) => void):void{
    items.reduce((a, v) =>{
        forEachFunc(v);
        return undefined;
    }, undefined);
}

myForEach(["a","b","c","d"],(v) => console.log(`forEach $(v)`));

//Filter 

function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[]{
    return items.reduce((a,v) => (filterFunc(v)? [...a, v] : a),[]);
}

console.log(myFilter([1,2,3,4,5,6,7,8], (v) => v % 2 === 0));

//Map

function myMap<T,K>(items: T[], mapFunc: (v: T) => K): K[]{
return items.reduce((a,v) => [...a, mapFunc(v)], [] as K[]);
}

console.log(myMap([1,2,3,4,5,6,7,8], (v) => (v * 10).toString()));
