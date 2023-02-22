function addNumbers(a:number,b:number):number{
    return a + b
}

export default addNumbers;


export const addStrings = (str1: string, str2: string = ""):string => `${str1} ${str2}`

// Union Type

export const format = (title:string, param: string | number):string => `${title} ${param}`;
export const printFormat = (title:string, param: string | number): string => {
    console.log(format(title,param));
    
};

//Fetch Data Type

export const fetchData = (url:string): promise<string> => Promise.resolve(`Data from ${url}`);
