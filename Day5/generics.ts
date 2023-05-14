
//Using a similar useState for a tuple 
function simpleStringState<T>(initial: T): [() => T,(v: T) => void]{
let str: T = initial; 
return [
    () => str,
    (v: T) =>{
        str = v
    }
    
];
}

const [st1getter, st1setter] = simpleStringState(1)
console.log(st1getter());

st1setter(62)

console.log(st1getter());

//Overiding inferred generics type with <string | null>

const [st2getter, st2setter] = simpleStringState <string | null>(null)
console.log(st2getter());

st2setter("str")

console.log(st2getter());


interface Rank<RankItem>{
items: RankItem,
rank: number
}

function ranker<RankItem>(items: RankItem[], rank: (v: RankItem )=> number):RankItem[]{
    const ranks = items.map((item) =>({
        item,
        rank:rank(item)
    }));
    ranks.sort((a , b) => a.rank - b.rank);

    return ranks.map((rank) => rank.item);
}

interface Pokemon{
    name: string;
    hp: number;
}

const pokemon: Pokemon[] = [
{
    name: "Bulbasur",
    hp: 20
},
{
    name: "Megaassur",
    hp:5
}
]

const ranks = ranker(pokemon, ({hp}) => hp);

console.log(ranks);
