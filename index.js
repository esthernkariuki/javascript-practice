let x= 10;
let y =20;
console.log( x+y);

function add(x,y){
    return x+y
}
console.log(add(3,5));

var message="Hello";
function say(){
    var message='Hie'
    console.log(message);
    

}

say();
console.log(message);

"Use strict";


function say(){
    message="hi"
    console.log({message});

    
}
say();
console.log({message});

console.log(message);
var message="hae"

let a=0o12
console.log(a);

console.log('a'/2);

// let sum =0;
// let number =prompt("Enter your number:");

// while (number>=0){
//     sum+=number;

// // number=parseInt(prompt("Enter a number:"));

// }
// console.log(`The sum is ${sum}` );


let i=1;

do{
    console.log(i);
    i++
    
}
while (i<=5) {
    

}
// let sum = 12;
// let number =100
//  do {
//    sum+=number
//  } while (number >=0);
//  console.log(sum);
 
for (let i=0;i<=3;i++){
    for (let j = 0; j < 3; j++) {
        if (i==2){
            break;
        }
        console.log(`i=${i},j=${j}`);
        
        
        
    }
}

let m=2;
switch (m){
    case 1:
    m="one";
    break;
    case 2:
        m='two'
        break;

        default:
            m='not found';
            break;
}
console.log({m});


let fruit="apple";
switch(fruit){
    case 'apple':
        case 'banana':
            case 'mango':
                console.log(`${fruit} is a fruit`);
                break;
                default:
                    console.log(`${fruit} not a fruit`);
                    
                
}

let string='i\r \nm a string'
console.log(string);

let str='javascript string split()';
let substring=str.split('',2);
console.log(substring);





// You are building a reminder feature for a task management app. Write an async function that sends a reminder (simulated with console.log) 
// after a delay using setTimeout. The function should return a Promise that resolves after 3 seconds with the message "Reminder sent to user!",
//  and you should await it to log the message.

async function reminder(){
 return await new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(`Reminder  sent to user!`)
        },3000)
    })
}

(async () => {
    const message = await reminder();
    console.log(message); // Logs "Reminder sent to user!" after 3 seconds
})();




// async function sendReminder() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Reminder sent to user!");
//             resolve("Reminder sent to user!");
//         }, 3000); // 3000 milliseconds = 3 seconds
//     });
// }

// // Usage
// (async () => {
//     await sendReminder();
// })();



// In a startup's DevOps dashboard, implement a setInterval function that checks server status every 5 seconds
//  by calling an async function checkServer() that returns a Promise resolving to "Server is running" or rejecting with "Server down". 
// Use .then() and .catch() to handle the result and stop the interval after 30 seconds using clearInterval.

// async function startup(){
//     return await new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`Server is running`)
//             reject(`Server down`)
//         },5000)
//     })
// }
// setclearInterval(30000);

// Simulated async function to check server status
async function checkServer() {
    // Instead of randomizing, we return a fixed response for demonstration
    return new Promise((resolve, reject) => {
        const serverStatus = "Server is running"; // Fixed response
        resolve(serverStatus); // Resolve with the fixed message
    });
}

// Function to start checking server status
function startServerCheck() {
    const intervalId = setInterval(() => {
        checkServer()
            .then((message) => {
                console.log(message); // Log success message
            })
            .catch((error) => {
                console.error(error); // Log error message
            });
    }, 5000); // Check every 5 seconds

    // Stop checking after 30 seconds
    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Stopped checking server status.");
    }, 30000); // Stop after 30 seconds
}

// Start the server check
startServerCheck();




// You're building a system to show multiple notifications to a user. 
// Create an async function showNotifications that takes an array of messages and shows each message 1 second apart 
// using await and setTimeout wrapped in a Promise. After all messages are shown, log "All notifications sent".

async function showNotifications(messages) {
    return await new Promise((resolve)=>{
        setTimeout(()=>{
             resolve(`notification`)
        },1000)
       return 'all notification '
    })
    
}
const messages=['notifiaction','notify','note']
console.log(showNotifications(messages));



// In your startup’s API integration, write an async function fetchDataWithRetry() that tries to
//  fetch data from a mock API (use Promise.reject() for failure), retries up to 3 times with a 2-second 
// delay between attempts using setTimeout, and resolves with "Data fetched" or logs "Failed after 3 attempts" if all fail.



// You’re building a countdown timer for a product launch. Write a function that takes a number n 
// and logs the countdown every second using setInterval. Once it reaches 0, stop the interval and call an async function
//  launchProduct() that returns a resolved Promise with "Product Launched!" and logs it.



const score = 85;
const grade = score >= 90 ? "A" : (score >= 80 ? "B" : (score >= 70 ? "C" : (score >= 60 ? "D" :"F")));
console.log(`Score: ${score}, Grade: ${grade}`);