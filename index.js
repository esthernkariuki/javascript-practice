
// //objects
// // Create a function constructor called Employee that accepts a name, position, and salary.
// //  Create an array of 5 employees. Write a program that increases the salary by 10% for employees who
// //   have the position "developer" and print the updated employee list. (5 pts)


// //  Given an array of product objects (each with name, price, and inStock properties),
// //   write a function that returns a new array containing only the products that are inStock: true,
// //    and sort the available products by price in ascending order. (5 pts)


// //  Create an object called grades where the keys are student names and the values are 
 
// //  arrays of their scores. Write a function that calculates and prints each student's average score, and if the average is above 70, print "Pass";
// //   otherwise, print "Fail" next to their name. (5 pts)


// //  Write a function constructor called User that takes username, email, and isActive (boolean). 
// //  Create an array of users. Write a program that loops through the array and deactivates users who have not logged in recently 
// //  (simulate this with a random isActive: false assignment) and print out the usernames of active users. (5 pts)


// //  You have an array of destination objects, each with name, distance (in km), and budgetRequired (in dollars). 
// //  Write a function that accepts a maximum distance and a budget and returns all destinations the user can afford and reach within that distance.
// //   If none are found, return "No destinations available under your budget and distance". (5 pts)

// // start 
// //initialize a function employee
// //increments the salary by 10% 
// //loop the through the array to access every item and check if is the position developer 
// //log the answers

// // function gcd(a, b) { 
// //     for (let temp = b; b !== 0;) { 
// //         b = a % b; 
// //         a = temp; 
// //         temp = b; 
// //     } 
// //     return a; 
// // } 
  
// // function lcmFunction(a, b) { 
// //     const gcdValue = gcd(a, b); 
// //     return (a * b) / gcdValue; 
// // } 
  
// // let num1 = 12; 
// // let num2 = 18; 
// // let lcm = lcmFunction(num1, num2); 
// // console.log("LCM of given numbers is :", lcm);







// function lcmFunction(a, b) { 
//     let larger = Math.max(a, b); 
//     let smaller = Math.min(a, b); 
//     for (let i = larger; ; i += larger) { 
//         if (i % smaller === 0) { 
//             return i; 
//         } 
//     } 
// } 
  
// let num3 = 149; 
// let num4 = 236; 
// let result = lcmFunction(num3, num4); 
// console.log(`LCM of ${num3} and ${num4} is ${result}`);




// const now = new Date();
// const year = now.getFullYear();
// const month = now.getMonth() + 1; // Month is 0-indexed
// const day = now.getDate();

// console.log(`${year}-${month}-${day}`);

// const now1= new Date();
// console.log(now1);

// // Create a Vehicle class with properties for make, model, and year. Add a method getDetails that returns a string containing the vehicle's information. 
// // Then, create a Car class that inherits from Vehicle and adds a property for numDoors.
// //  Override the getDetails method in the Car class to include the number of doors.
// // Next, without using the class syntax, achieve the same functionality using prototype-based inheritance. 
// // Create vehiclePrototype and carPrototype objects, and use Object.create to establish the inheritance chain. 
// // Ensure that both approaches produce the same output when calling getDetails on instances of Car.


// class Vehicle{
//     constructor(make,model,year){
//         this.name=name;
//         this.model=model;
//         this.year=year;


//     }

// getDetails(){
//     return `The ${name} of my car is this type of model ${model} and i want to sell it`}
// }

// class Car extends Vehicle{
//     constructor(name,model,year,numDoors){
//         super(name)
//         super(model)
//         super(year)
//         this.numDoors=numDoors;


//     }
//     getDetails(){
//         return `the name is ${name} and the number of numdoors is ${this.numDoors}`
//     }

// }


// function Driver(name,carModel,rating){
//     this.name=name;
//     this.carModel=carModel;
//     this.rating=rating; 
    
    
// }
// Driver.prototype.getDetails=function(){
//     return `His ${this.name} is and he drives this type of car ${this.carModel}`
// };
// Driver.prototype.isTopRated=function(){
//     return this.rating > 4.5? true:false
// };
// const driver1 = new Driver("Moraa","mercedes",4.9)
// console.log(driver1.getDetails())
// console.log(driver1.isTopRated())

// const driver2 = new Driver("Mariam","toyota",3.4);
// console.log(driver2.getDetails());
// console.log(driver2.isTopRated());







// class Student{
//     constructor(name,course,scores){
//         this.name=name;
//         this.course=course;
//         this.scores=scores;

//     }
// }
// Student.prototype.getAverageScore=function(){
//     return this.scores.reduce((acc,score)=>acc+score,0)/this.scores.length
// }

// Student.prototype.isPassing=function(){
//     return this.scores >50?true:false
// }
// Student.prototype.totalScore=function(){
//     return this.scores.reduce((acc,scores)=>acc+scores,0)

// }
// const mystudent=new Student("Jecinta","Math",[90,50,30,20,96]);
// console.log(mystudent.getAverageScore());
// console.log(mystudent.isPassing());
// console.log(mystudent.totalScore());

// const mystudent1=new Student("Eunice","science",[20,49,80,60]);
// console.log(mystudent1.getAverageScore());
// console.log(mystudent1.isPassing());
// console.log(mystudent1.totalScore());


// // function FeatureToggle(featureName,isEnabled,userGroupAccess){
// //     this.featureName=featureName;
// //     this.isEnabled=isEnabled;
// //     this.userGroupAccess=userGroupAccess;
// // }
// // FeatureToggle.prototype.canAccess=function(userRole){
// //     return this.userGroupAccess===userRole?true:false
// // }
// // FeatureToggle.prototype.toggleFeature=function(flag){
// //     this.isEnabled=flag;


// //     if(!this.isEnab){
// //         console.log(`feature is enabled`);
        
// //     }
// //     else{
// //         console.log(`feature disabled`);
        
// //     }
// //     switch()
// // }

// function TimeLog(freelancerName,projectDetails,logs){
//     this.freelancerName=freelancerName;
//     this.projectDetails=projectDetails;
//     this.logs=logs;

// }
// TimeLog.prototype.totalEarning=function(){
//     return this.logs.reduce((acc,sum)=>acc+(this.projectDetails.hourlyRate*this.logs.hoursWorked),0)
// }

// TimeLog.prototype.filterlogs=function(){
    
// }



// //  Create a BankAccount constructor function that takes a user's name and balance. Add a method called deposit(amount) that 
// // increases the balance and logs the new balance, and another method withdraw(amount) that decreases the balance only if there are enough funds.
// //  Create 3 user accounts and simulate deposits and withdrawals.





// //  Create an object taskList with a property tasks (an array of task names). 
// // Add methods: addTask(task) to add a task, completeTask(task) to remove it, and listTasks() to print all remaining tasks. 
// // Test the object with 4–5 tasks and demonstrate the functionality of each method.


// //  Create a Student object with name, scores (an array), and a method getAverage() that returns the average score.
// //  Add another method hasPassed() that returns true if the average is 50 or more, otherwise false. Create and test this for at least two students.
// const student = {
//     name:'John',
//     scores:[40,30,80,78],

//     getAverageScore:function(){
//         return scores.reduce((acc,sum) => acc+sum,0)
//     },
//     hasPassed:function(){
//         return average >50?true:false
//     }


// }




// //  Create a ShoppingCart object with a property items (an array of item objects with name and price).
// //  Add a method addItem(item) to push new items, and a method getTotal() that returns the total cost of all items in the cart.
// //  Add 3 items and print the final total.

// function ShoppingCart() {
//     this.item=[];
// this.addItem=function(item){
//     this.item.push({item});
//     console.log(`item${item.name} and price ${item.price} added`);
// },
// this.getTotal=function(items){
//     return this.item.reduce((total,item) => total+ item.price,0)

// };
// }
// const ShoppingCart1=new ShoppingCart();

// ShoppingCart1.addItem({name:"Sausage",price: 500});
// ShoppingCart1.addItem({name:"Books",price:100});
// ShoppingCart1.addItem({name:"Vegetables",price:300});
// const total= ShoppingCart1.getTotal();
// console.log(`Total cost is ${total}`);

// // function ShoppingCart(){
// //    this.items=[];

// // this.addItem =function(item) {
// //          this.items.push({item})  ;
// //          console.log(`item ${item.name} and price ${item.price} added`);},

// //  this.getTotal=function() {
  
// //  return this.items.reduce((total,item)=>total+ item.price,0) ;
// //     };
// // }
// // const ShoppingCart1=new ShoppingCart();

// // ShoppingCart1.addItem({name:"Sausage",price: 500});
// // ShoppingCart1.addItem({name:"Books",price:100});
// // ShoppingCart1.addItem({name:"Vegetables",price:300});
// // const total= ShoppingCart1.getTotal();
// // console.log(`Total cost is ${total}`);




// //  Create a Movie constructor that takes title, year, and rating. Add a method isClassic() that returns true if the year is before 2000,
// //  and a method recommend() that returns a string like "Highly recommended!" if rating is above 8. Create at least 3 movies and call 
// // these methods on each.

// function Movie(title,year,rating){
//     this.title=title;
//     this.year=year;
//     this.rating=rating;

// this.isClassic=function(){
//    return (this.year < 2000)?true:false

// }
// this.recommend=function(){
//    return  this.rating > 8? "Highly recommended":"low recommended";
// };

// }

// const movie1= new Movie("upsider",2003,4.5)
// const movie2= new Movie("outsider",1996,6) 

// console.log(movie1.recommend());
// console.log(movie2.isClassic());
// In a banking system, a customer attempts to withdraw cash from their account. Use an if statement to check if their account balance 
// (e.g., $500) is sufficient for the requested withdrawal amount (e.g., $200) and print a message like "Withdrawal
//  successful" or "Insufficient funds."
 function  bank(cash){
    for(let i=0;i<cash.length;i++){
        let accountBalance=500;
        if (cash[i]>accountBalance){
            console.log(`Insufficient funds`);
            
        }
        else{
            console.log(`sufficient funds`);
            
        }
    }
 }
 const cash = [200,400,700,100]

 bank(cash)

// An online store offers discounts during a holiday sale.
//  Write an if...else program to determine if a customer’s total purchase amount (e.g., $150)
//  qualifies for a discount: 10% off for purchases over $100, 20% off for purchases over $200, or no discount otherwise.

function onlineStore(amount){
    amount.forEach(element => {
        if(element <=100){
            console.log(`no discount`)
        }
        else if (element >=101 && element<=200){
            console.log(`The discount is 10%`);
            
        }
        else{
            console.log(`The discount is 20%`)
        }
        
    });
}
const amount =[20,400,300,30,199]
onlineStore(amount)




// A factory uses a temperature sensor to monitor a machine’s operating condition.
//  Create a while loop to continuously read the sensor’s temperature (in Celsius) and trigger an alert if it exceeds 85°C,
//  stopping only when the machine is manually shut down.

// A secure website requires users to log in with a username and password. 
// Use a do...while loop to prompt the user to enter their credentials, allowing up to 3 attempts before locking the account,
//  and continue until a correct login or the maximum attempts are reached.

// const secureWebsite =(maxattepts=>{
//     let attepts =3;
//    do {
//     console.log(`${attepts} left`);
//      attepts++
//    }
//    while (attepts >= maxattepts){
  
//    }});

// secureWebsite(0);


const secureWebsite2 =(maxattepts=>{
    let attepts =3
   while (attepts >= maxattepts){
     console.log(`${attepts} left`);
       attepts--  

   }
})

secureWebsite2(0)











// A vending machine at a train station accepts numeric inputs (1–5) for item selection. 
// Write a switch statement to dispense the chosen item (1: Water, 2: Soda, 3: Chips, 4: Candy, 5: Gum)
//  and display its price (e.g., $1.50 for Soda).

function vendingMachine(num){
    for(let i=0;i<num.length;i++){
        switch (num[i]) {
            case 1:
                console.log(` water is 1.50`)
                break;
            case 2:
                console.log(`soda is 2.0`)
                break;
            case 3:
                console.log(`chips is 3.0`)
                    break;
            case 4:
                console.log(`candy is 4.0`)
                break;
            case 5:
                console.log(`gum is 5.0`)
                break;
            default:
                console.log(`not known`)
                break;
        }
    }
};

const num=[1, 2 ,3 ,4,5,6];
vendingMachine(num);






// A traffic monitoring system tracks vehicle speeds on a 60 mph highway. Use an if statement to check if a vehicle’s speed (e.g., 75 mph) exceeds the legal limit and log a warning for potential ticketing.
// A health app calculates a user’s BMI based on their height (in meters) and weight (in kg). Write an if...else program to categorize the BMI into Underweight (<18.5), Normal (18.5–24.9), Overweight (25–29.9), or Obese (≥30).
// A warehouse tracks stock levels for a popular product (e.g., 500 units initially). Create a while loop to monitor the inventory and automatically place a reorder of 200 units when the stock falls below 100 units, updating the inventory each time.
// A movie theater’s online booking system assigns seats (e.g., A1 to F10). Use a do...while loop to prompt the user to enter a seat number, checking if it’s available (not already booked) and continuing until a valid seat is selected or the user cancels.
// A company’s content management system assigns permissions based on user roles. Write a switch statement to grant access rights for roles (1: Admin, full access; 2: Editor, edit only; 3: Viewer, read-only) based on the user’s role ID.
// A bank evaluates loan applications using credit score (300–850) and annual income. Use an if...else statement to approve a loan if the credit score is above 700 and income is at least $40,000; otherwise, reject or flag for manual review.
// A coffee shop’s point-of-sale system processes customer orders in a queue. Create a while loop to handle each order (e.g., Latte, Cappuccino) one by one, removing it from the queue until all orders are processed.
// An ATM serves customers at a busy mall. Write a do...while loop to display a menu (1: Withdraw, 2: Deposit, 3: Check Balance, 4: Exit) and process the user’s choice, continuing until they select Exit.
// An e-commerce platform offers multiple shipping options. Use a switch statement to calculate the shipping cost based on the user’s selection (1: Standard, $5; 2: Express, $15; 3: Overnight, $30) for a package weighing 2 kg.
// A streaming service restricts premium content to active subscribers. Write an if statement to check if a user’s subscription status (e.g., Active or Expired) allows access to a new movie, displaying an error if the subscription is expired.
// A parking garage charges different rates based on vehicle type. Use an if...else program to compute the fee for a 3-hour stay: $5 for Motorcycles, $10 for Cars, $20 for Trucks, based on the vehicle type entered.
// A smart city’s traffic light system operates at a busy intersection. Create a while loop to cycle through Red (30 seconds), Green (45 seconds), and Yellow (5 seconds) states, updating the light status until the system is powered off.
// A retail website offers promotional coupon codes during checkout. Write a do...while loop to prompt the user to enter a coupon code, validating it against a list of valid codes (e.g., SAVE10, FREESHIP), until a valid code is entered or the user skips.
// A restaurant’s online payment system supports multiple payment methods. Use a switch statement to process the transaction based on the user’s choice (1: Credit Card, 2: Debit Card, 3: PayPal, 4: Cash on Delivery) and confirm the payment type.
// A logistics company tracks delivery schedules. Write an if...else statement to check a package’s status based on its estimated delivery time (e.g., 2 PM) and actual delivery time (e.g., 3 PM), categorizing it as On Time (within 30 minutes), Delayed (beyond 30 minutes), or Canceled (no delivery).

