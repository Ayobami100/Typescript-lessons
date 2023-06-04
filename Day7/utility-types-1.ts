interface myUser{
    name:string;
    id:string;
    email?:string;
    phone?:string
}
//Optional form of myUser interface
// interface myUserOptionals{
//     name?:string;
//     id:string;
//     email?:string;
// }

//Optional form of myUser interface create with Partial type
type myUserOptionals = Partial<myUser>;

//Required type
type requiredMyUser = Required<myUser>

//Pick Type
//it allows specificity

type justEmailAndName = Pick<myUser, "email" | "name">

type userWithoutId = Omit<myUser, "id">

const mapByID = (users: myUser[]):Record<string, userWithoutId> => {
    return users.reduce((a,v) =>{
        const {id, ...other} = v
        return {
            ...a,
            [id]: other,
        };
    }, {});
}

console.log(
    mapByID([
        {
            id:"foo",
            name:"Mr. Foo"
        },
        {
            id:"baz",
            name:"Mrs. Baz"
        },
    ])
);
