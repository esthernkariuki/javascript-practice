// Lesson 1


// variable and constants
let name ="Esther";
const pie=22/7;
name = "Jane"
console.log ({name});
console.log({pie})

//bitwise operators
//&,|,<<,>>,

//Data types
 let x=10;

boolean=2<6 ? true:false
// null = "novalue"
let y;  //undefined
// bigInt= large intergers

// symbols
//x=10+4 // - +,/,// % ** arithemetic
//comparision ===,==,!=,!==,
//logical & ,||,!
// Ternary=:,?

//Type conversion
let num = "10";
let strnum =Number(num);
console.log(typeof strnum);
console.log(typeof num);

let count = 5;
let countstr= String(count);
console.log(typeof countstr);

console.log( 5 + Number("5"))



// Type  conversion
let letter = "ja";
let letter2 = "ne";
// let letter3=letter + ""+ letter2;
let letter4 =`${letter}${letter2}`;

 console.log({letter4})

 //spread operators
 let a=[1,2,3,4,5,6,7,8];
let a1=[...a,10,11]
let a2=[0, ...a1]
console.log({a1})
console.log({a2});

function sum(a,b,c){
    return a+b+c
}
let numbers=[12,34,56];
let result =sum(...numbers)
console.log(result)

function checkNumber(number){
    if(number>0)
        console.log( "Positive");
    else if (number<0)
       console.log( "Negative");
    else
        console.log("zero");
  
}; 
const number=[2,1,-4,0,6,9]
checkNumber(number)

function isEven(arr){
    let sum = 0;
    for (i=0;i<isEven.length;i++);
    if (arr[1] %2 ===0){
        sum += arr[i];
    }
    return sum
};
let arr1 =[10,30,21,,13,12,14,16,18,321,45,73];
console.log(isEven(arr1))
//sum usin for loop
function SumCheckIsEvenUsinReduce(arr){
  return  arr.reduce((accumulater,currentValue) =>{
        if(currentValue %2 ===0){
            return accumulater + currentValue;
        }
            else{
                return accumulater;
            }
        
        },0
    )
};
let number3=[20,13,28,12,10,8,4,3,7];
console.log(SumCheckIsEvenUsinReduce(number3))
//sum usin reduce
function reduceIsOdd(arr){
    return arr.reduce((accumulater,currentValue)=>{
        if (currentValue % 2!== 0){
                return accumulater + currentValue;
        }
        else{
            return accumulater;
        }
        },
0);
};

// let names=["jane","esther","kamau"]
// for(let i=0;i<names.length;i++){
//     if(names[i]==="esther"){
//         console.log(esther)

//     }
//     else if(names[i]==="kamau"){
//         console.log(kamau)
//     }
//     else{
//         console.log(jane)    }
    
// };

function greet (name){
    console.log(`Hello ${name}`)
};
greet("jane","bob")

function multiple(a,b){
    return a*b
}
console.log(multiple(3,4));

