
// using a for loop

function sumNumbers(num){
    let sum = 0;
for (let i=0; i<num.length; i++){
    sum += num[i];
}
return sum;
}
const numbers =[1,2,3,4,5,6,7,8,9];
const sumAll = sumNumbers(numbers);
console.log("The sum of the numbers is",sumAll);




//using a while loop

function sumUsingWhile(nums){
let sum = 0;
let i = 0;
while (i<nums.length) {
     sum
      += nums[i];
     i++;
}
return sum/2;
}
const myNums=[1,2,3,4,5,6,7,8,9];
const total=sumUsingWhile(myNums);
console.log("The sum using a while to loop is",total);



function sortedGrades(arr){
    return arr.sort(function(a,b){
        return b-a
    });
   
}
let grade=[90,40,30,20,70,50,10,60,90];
console.log(sortedGrades(grade));



function votes(arr,){
    let count =0
    arr.forEach(item =>{
        if(item.toLowerCase()==="yes"){
            count++
        }
    });
    return count;
}
let myArr=["yes","no","yes","yes","no","yes","yes"];
let yesCount=votes(myArr)
console.log(yesCount)


function salary (arr){
    let newsalary=5/100;
    return 
    
}   
let salary= [2000,3000,6000,4000,5000]                                                                                                                                    



// // given a number from 1 to 100, log 'fizz' if a number i divisible by 3 log buzz if a number is divisible by 5  log "fizzbuzz" if a number is divisible by3 and 5 else log the number 

const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`Fizzbuzz`);
        } else if (i % 3 === 0) {
            console.log(`Fizz`);
        } else if (i % 5 === 0) {
            console.log(`Buzz`);
        } else {
            console.log(i);
        }
    }
};
fizzBuzz();


// while

const logInAttepts =(maxattempts=>{
    let attempts=1;
    while(attempts <=maxattempts){// increment befor if starts with index 0
        console.log(`loginattempts ${attempts}`);
        attempts++;
    }
})

logInAttepts(3)



//do while

const logInAtteptsWithDoWhile =(maxattempts)=>{
    let attempts=1;
    do {
        console.log(`login attempts with do... while ${attempts}`);
        attempts++;
    } while (attempts <= maxattempts);
} 
logInAtteptsWithDoWhile(3);

//switch

const sendNotifications=(notifications)=>{
    notifications.forEach(notification => {
     switch (notification) {
        case "sms":
            console.log("send sms ");
            break;
            case"push":
            console.log("send push");
            break;
            case"email":
            console.log("send email");
            break;
            default:
            console.log("notification type not supported");
            break;
     }

    });
}


const notifications = ["sms", "push", "email", "whatsapp"];

sendNotifications(notifications);

//Loop through an array of numbers from 1–7 and use a switch to print the corresponding day name.

const numbers=(nums)=>{
    nums.forEach((number)=>{
        switch (number) {
            case 1:
                console.log(`Monday`)
                break;
                case 2:
                console.log(`Tuesday`)
                break;
                case 3:
                console.log(`Wednesday`)
                break;
                case 4:
                console.log(`Thursday`)
                break;
                case 5:
                console.log(`Friday`)
                break;
                case 6:
                console.log(`Saturday`)
                break;
                case 7:
                console.log(`Sunday`)
                break;
            default:
                console.log(`Invalid number`);
                break;
        }
    }); 
}
const nums=[1,2,3,4,5,6,7];
numbers(nums);

//Loop through an array of roles and use a switch to print the corresponding access level.

const roles = ["admin", "editor", "viewer", "commentor", "guest"];
const getAccess=(roles)=>{
    roles.forEach((access) => {
        switch (access) {
            case "admin":
                console.log(`Admin has full access`);
                break;
            case "editor":
                console.log(`Editor can edit content`);
                break;
            case "viewer":
                console.log(`Viewer can view content`);
                break;
            case "commentor":
                console.log(`Commentor can comment on content`);
                break;
            default:
                console.log(`Role not supported`);
                break;
        }
    });
};
getAccess(roles);


