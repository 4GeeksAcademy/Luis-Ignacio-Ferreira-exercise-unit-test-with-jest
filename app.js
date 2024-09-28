//Esta es mi función que suma dos números
const sum = (a,b)=>{
    return a+b;
}
//Regitsro en consola
console.log(sum(7,3))


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

let fromEuroToDollar=(euroAmount) => {
    let equivalenteAmountInDollars = euroAmount * oneEuroIs.USD;
    return equivalenteAmountInDollars;
        
    };
    //Console para comprobar función
console.log(fromEuroToDollar(10));


let fromDollarToYen=(dollarAmount) => {
    let equivalenteAmountInYens = dollarAmount / oneEuroIs.USD * oneEuroIs.JPY;
    return equivalenteAmountInYens;
        
    };
    //Console para comprobar función
console.log(fromDollarToYen(10));

let fromYenToPound = (yenAmount) => {
    let equivalenteAmountInPounds= yenAmount / oneEuroIs.JPY * oneEuroIs.GBP;
    return equivalenteAmountInPounds;
        
    };
    //Console para comprobar función
console.log(fromYenToPound(1));


//Exporta función para usarla en otros archivos
module.exports={sum,fromEuroToDollar,fromDollarToYen,fromYenToPound};

