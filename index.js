// function reversedstr (arr){
//     return arr.map(arr.split("").sort().join(""))
// }
// reversedstr()
// //     function reversed( str,indices){
// //         return arr.map(str,index)
// //         if indices.includes(index)
// //       return  str.split("").reverse().join("")
// //       return str}.sort(a,b => a-b)
// //  }
    
// //     let string =["esther","nyambura","queen","meron"]
// //     console.log(reverse(arr(str,[1,2])))
// function reversedstr(arr) {
//     return arr.map(str => str.split('').join('')).sort();}
//   function specificItem(arr, indices)
//    { return arr.map((str, index) => {if (indices.includes(index)) {
//         return str.split('').reverse().join('');}
//       return str }).sort((a, b) => a-b);
//     }
    
//   let strs = ["Thinkpad", "X1 Carbon", "Yoga", "IdeaPad"];
//   console.log(specificItem(strs, [1 ,2]));

// function addition(num){
//     return 2+4

// }
// console.log(addition())

// function filterEvenNumbers(numbers) { 

//     return numbers.filter(num => num % 2 === 0); 
  
//   }
//   let numbers=[1,2,3,4,5,6,7,8,9,12,45,89,145]
//   console.log(filterEvenNumbers(numbers))

//   function changingtitleCase(string){
//   return  string.map(string =>string.split("").charAt(0).toUpperCase().slice(0).join(""))

//   }
//   let string="nyamburaEsther"
//   console.log(changingtitleCase(string))

//   Write a JS program that will join the following array elements into a string. myPets = ["Cow", "Bird", "Snake", "Dog"];
 myPets = ["Cow", "Bird", "Snake", "Dog"];
 myNewPet= myPets.join(",")
 mySorted=myPets.sort((a,b) =>a-b)
console.log(`my pet is:${myNewPet}`)
console.log(mySorted);

let arr=[4,16,24,21,27]
 let newArr =arr.filter((item)=> item%4===0)
 console.log(newArr);
 


 let course=["math","english","kiswahili","science","science","math"]
 let  duplicates = [];
 let uniqueArr=[];

 course.forEach((item) =>{
    if(!uniqueArr.includes(item)){
        uniqueArr.push(item) }



    else{
        duplicates.push(item)
    }
 )

 console.log(uniqueArr)
 console.log(duplicates)