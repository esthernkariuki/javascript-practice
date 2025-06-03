
// // //objects
// // // Create a function constructor called Employee that accepts a name, position, and salary.
// // //  Create an array of 5 employees. Write a program that increases the salary by 10% for employees who
// // //   have the position "developer" and print the updated employee list. (5 pts)


// // //  Given an array of product objects (each with name, price, and inStock properties),
// // //   write a function that returns a new array containing only the products that are inStock: true,
// // //    and sort the available products by price in ascending order. (5 pts)


// // //  Create an object called grades where the keys are student names and the values are 
 
// // //  arrays of their scores. Write a function that calculates and prints each student's average score, and if the average is above 70, print "Pass";
// // //   otherwise, print "Fail" next to their name. (5 pts)


// // //  Write a function constructor called User that takes username, email, and isActive (boolean). 
// // //  Create an array of users. Write a program that loops through the array and deactivates users who have not logged in recently 
// // //  (simulate this with a random isActive: false assignment) and print out the usernames of active users. (5 pts)


// // //  You have an array of destination objects, each with name, distance (in km), and budgetRequired (in dollars). 
// // //  Write a function that accepts a maximum distance and a budget and returns all destinations the user can afford and reach within that distance.
// // //   If none are found, return "No destinations available under your budget and distance". (5 pts)

// // // start 
// // //initialize a function employee
// // //increments the salary by 10% 
// // //loop the through the array to access every item and check if is the position developer 
// // //log the answers

// // // function gcd(a, b) { 
// // //     for (let temp = b; b !== 0;) { 
// // //         b = a % b; 
// // //         a = temp; 
// // //         temp = b; 
// // //     } 
// // //     return a; 
// // // } 
  
// // // function lcmFunction(a, b) { 
// // //     const gcdValue = gcd(a, b); 
// // //     return (a * b) / gcdValue; 
// // // } 
  
// // // let num1 = 12; 
// // // let num2 = 18; 
// // // let lcm = lcmFunction(num1, num2); 
// // // console.log("LCM of given numbers is :", lcm);







// // function lcmFunction(a, b) { 
// //     let larger = Math.max(a, b); 
// //     let smaller = Math.min(a, b); 
// //     for (let i = larger; ; i += larger) { 
// //         if (i % smaller === 0) { 
// //             return i; 
// //         } 
// //     } 
// // } 
  
// // let num3 = 149; 
// // let num4 = 236; 
// // let result = lcmFunction(num3, num4); 
// // console.log(`LCM of ${num3} and ${num4} is ${result}`);




// // const now = new Date();
// // const year = now.getFullYear();
// // const month = now.getMonth() + 1; // Month is 0-indexed
// // const day = now.getDate();

// // console.log(`${year}-${month}-${day}`);

// // const now1= new Date();
// // console.log(now1);

// // // Create a Vehicle class with properties for make, model, and year. Add a method getDetails that returns a string containing the vehicle's information. 
// // // Then, create a Car class that inherits from Vehicle and adds a property for numDoors.
// // //  Override the getDetails method in the Car class to include the number of doors.
// // // Next, without using the class syntax, achieve the same functionality using prototype-based inheritance. 
// // // Create vehiclePrototype and carPrototype objects, and use Object.create to establish the inheritance chain. 
// // // Ensure that both approaches produce the same output when calling getDetails on instances of Car.


// // class Vehicle{
// //     constructor(make,model,year){
// //         this.name=name;
// //         this.model=model;
// //         this.year=year;


// //     }

// // getDetails(){
// //     return `The ${name} of my car is this type of model ${model} and i want to sell it`}
// // }

// // class Car extends Vehicle{
// //     constructor(name,model,year,numDoors){
// //         super(name)
// //         super(model)
// //         super(year)
// //         this.numDoors=numDoors;


// //     }
// //     getDetails(){
// //         return `the name is ${name} and the number of numdoors is ${this.numDoors}`
// //     }

// // }


// // function Driver(name,carModel,rating){
// //     this.name=name;
// //     this.carModel=carModel;
// //     this.rating=rating; 
    
    
// // }
// // Driver.prototype.getDetails=function(){
// //     return `His ${this.name} is and he drives this type of car ${this.carModel}`
// // };
// // Driver.prototype.isTopRated=function(){
// //     return this.rating > 4.5? true:false
// // };
// // const driver1 = new Driver("Moraa","mercedes",4.9)
// // console.log(driver1.getDetails())
// // console.log(driver1.isTopRated())

// // const driver2 = new Driver("Mariam","toyota",3.4);
// // console.log(driver2.getDetails());
// // console.log(driver2.isTopRated());







// // class Student{
// //     constructor(name,course,scores){
// //         this.name=name;
// //         this.course=course;
// //         this.scores=scores;

// //     }
// // }
// // Student.prototype.getAverageScore=function(){
// //     return this.scores.reduce((acc,score)=>acc+score,0)/this.scores.length
// // }

// // Student.prototype.isPassing=function(){
// //     return this.scores >50?true:false
// // }
// // Student.prototype.totalScore=function(){
// //     return this.scores.reduce((acc,scores)=>acc+scores,0)

// // }
// // const mystudent=new Student("Jecinta","Math",[90,50,30,20,96]);
// // console.log(mystudent.getAverageScore());
// // console.log(mystudent.isPassing());
// // console.log(mystudent.totalScore());

// // const mystudent1=new Student("Eunice","science",[20,49,80,60]);
// // console.log(mystudent1.getAverageScore());
// // console.log(mystudent1.isPassing());
// // console.log(mystudent1.totalScore());


// // // function FeatureToggle(featureName,isEnabled,userGroupAccess){
// // //     this.featureName=featureName;
// // //     this.isEnabled=isEnabled;
// // //     this.userGroupAccess=userGroupAccess;
// // // }
// // // FeatureToggle.prototype.canAccess=function(userRole){
// // //     return this.userGroupAccess===userRole?true:false
// // // }
// // // FeatureToggle.prototype.toggleFeature=function(flag){
// // //     this.isEnabled=flag;


// // //     if(!this.isEnab){
// // //         console.log(`feature is enabled`);
        
// // //     }
// // //     else{
// // //         console.log(`feature disabled`);
        
// // //     }
// // //     switch()
// // // }

// // function TimeLog(freelancerName,projectDetails,logs){
// //     this.freelancerName=freelancerName;
// //     this.projectDetails=projectDetails;
// //     this.logs=logs;

// // }
// // TimeLog.prototype.totalEarning=function(){
// //     return this.logs.reduce((acc,sum)=>acc+(this.projectDetails.hourlyRate*this.logs.hoursWorked),0)
// // }

// // TimeLog.prototype.filterlogs=function(){
    
// // }



// // //  Create a BankAccount constructor function that takes a user's name and balance. Add a method called deposit(amount) that 
// // // increases the balance and logs the new balance, and another method withdraw(amount) that decreases the balance only if there are enough funds.
// // //  Create 3 user accounts and simulate deposits and withdrawals.





// // //  Create an object taskList with a property tasks (an array of task names). 
// // // Add methods: addTask(task) to add a task, completeTask(task) to remove it, and listTasks() to print all remaining tasks. 
// // // Test the object with 4–5 tasks and demonstrate the functionality of each method.


// // //  Create a Student object with name, scores (an array), and a method getAverage() that returns the average score.
// // //  Add another method hasPassed() that returns true if the average is 50 or more, otherwise false. Create and test this for at least two students.
// // const student = {
// //     name:'John',
// //     scores:[40,30,80,78],

// //     getAverageScore:function(){
// //         return scores.reduce((acc,sum) => acc+sum,0)
// //     },
// //     hasPassed:function(){
// //         return average >50?true:false
// //     }


// // }




// // //  Create a ShoppingCart object with a property items (an array of item objects with name and price).
// // //  Add a method addItem(item) to push new items, and a method getTotal() that returns the total cost of all items in the cart.
// // //  Add 3 items and print the final total.

// // function ShoppingCart() {
// //     this.item=[];
// // this.addItem=function(item){
// //     this.item.push({item});
// //     console.log(`item${item.name} and price ${item.price} added`);
// // },
// // this.getTotal=function(items){
// //     return this.item.reduce((total,item) => total+ item.price,0)

// // };
// // }
// // const ShoppingCart1=new ShoppingCart();

// // ShoppingCart1.addItem({name:"Sausage",price: 500});
// // ShoppingCart1.addItem({name:"Books",price:100});
// // ShoppingCart1.addItem({name:"Vegetables",price:300});
// // const total= ShoppingCart1.getTotal();
// // console.log(`Total cost is ${total}`);

// // // function ShoppingCart(){
// // //    this.items=[];

// // // this.addItem =function(item) {
// // //          this.items.push({item})  ;
// // //          console.log(`item ${item.name} and price ${item.price} added`);},

// // //  this.getTotal=function() {
  
// // //  return this.items.reduce((total,item)=>total+ item.price,0) ;
// // //     };
// // // }
// // // const ShoppingCart1=new ShoppingCart();

// // // ShoppingCart1.addItem({name:"Sausage",price: 500});
// // // ShoppingCart1.addItem({name:"Books",price:100});
// // // ShoppingCart1.addItem({name:"Vegetables",price:300});
// // // const total= ShoppingCart1.getTotal();
// // // console.log(`Total cost is ${total}`);




// // //  Create a Movie constructor that takes title, year, and rating. Add a method isClassic() that returns true if the year is before 2000,
// // //  and a method recommend() that returns a string like "Highly recommended!" if rating is above 8. Create at least 3 movies and call 
// // // these methods on each.

// // function Movie(title,year,rating){
// //     this.title=title;
// //     this.year=year;
// //     this.rating=rating;

// // this.isClassic=function(){
// //    return (this.year < 2000)?true:false

// // }
// // this.recommend=function(){
// //    return  this.rating > 8? "Highly recommended":"low recommended";
// // };

// // }

// // const movie1= new Movie("upsider",2003,4.5)
// // const movie2= new Movie("outsider",1996,6) 

// // console.log(movie1.recommend());
// // console.log(movie2.isClassic());
// // In a banking system, a customer attempts to withdraw cash from their account. Use an if statement to check if their account balance 
// // (e.g., $500) is sufficient for the requested withdrawal amount (e.g., $200) and print a message like "Withdrawal
// //  successful" or "Insufficient funds."
//  function  bank(cash){
//     for(let i=0;i<cash.length;i++){
//         let accountBalance=500;
//         if (cash[i]>accountBalance){
//             console.log(`Insufficient funds`);
            
//         }
//         else{
//             console.log(`sufficient funds`);
            
//         }
//     }
//  }
//  const cash = [200,400,700,100]

//  bank(cash)

// // An online store offers discounts during a holiday sale.
// //  Write an if...else program to determine if a customer’s total purchase amount (e.g., $150)
// //  qualifies for a discount: 10% off for purchases over $100, 20% off for purchases over $200, or no discount otherwise.

// function onlineStore(amount){
//     amount.forEach(element => {
//         if(element <=100){
//             console.log(`no discount`)
//         }
//         else if (element >=101 && element<=200){
//             console.log(`The discount is 10%`);
            
//         }
//         else{
//             console.log(`The discount is 20%`)
//         }
        
//     });
// }
// const amount =[20,400,300,30,199]
// onlineStore(amount)




// // A factory uses a temperature sensor to monitor a machine’s operating condition.
// //  Create a while loop to continuously read the sensor’s temperature (in Celsius) and trigger an alert if it exceeds 85°C,
// //  stopping only when the machine is manually shut down.

// // A secure website requires users to log in with a username and password. 
// // Use a do...while loop to prompt the user to enter their credentials, allowing up to 3 attempts before locking the account,
// //  and continue until a correct login or the maximum attempts are reached.

// // const secureWebsite =(maxattepts=>{
// //     let attepts =3;
// //    do {
// //     console.log(`${attepts} left`);
// //      attepts++
// //    }
// //    while (attepts >= maxattepts){
  
// //    }});

// // secureWebsite(0);


// const secureWebsite2 =(maxattepts=>{
//     let attepts =3
//    while (attepts >= maxattepts){
//      console.log(`${attepts} left`);
//        attepts--  

//    }
// })

// secureWebsite2(0)














// // A vending machine at a train station accepts numeric inputs (1–5) for item selection. 
// // Write a switch statement to dispense the chosen item (1: Water, 2: Soda, 3: Chips, 4: Candy, 5: Gum)
// //  and display its price (e.g., $1.50 for Soda).

// function vendingMachine(num){
//     for(let i=0;i<num.length;i++){
//         switch (num[i]) {
//             case 1:
//                 console.log(` water is 1.50`)
//                 break;
//             case 2:
//                 console.log(`soda is 2.0`)
//                 break;
//             case 3:
//                 console.log(`chips is 3.0`)
//                     break;
//             case 4:
//                 console.log(`candy is 4.0`)
//                 break;
//             case 5:
//                 console.log(`gum is 5.0`)
//                 break;
//             default:
//                 console.log(`not known`)
//                 break;
//         }
//     }
// };

// const num=[1, 2 ,3 ,4,5,6];
// vendingMachine(num);






// // A traffic monitoring system tracks vehicle speeds on a 60 mph highway. Use an if statement to check if a vehicle’s speed (e.g., 75 mph) exceeds the legal limit and log a warning for potential ticketing.
// // A health app calculates a user’s BMI based on their height (in meters) and weight (in kg). Write an if...else program to categorize the BMI into Underweight (<18.5), Normal (18.5–24.9), Overweight (25–29.9), or Obese (≥30).
// // A warehouse tracks stock levels for a popular product (e.g., 500 units initially). Create a while loop to monitor the inventory and automatically place a reorder of 200 units when the stock falls below 100 units, updating the inventory each time.
// // A movie theater’s online booking system assigns seats (e.g., A1 to F10). Use a do...while loop to prompt the user to enter a seat number, checking if it’s available (not already booked) and continuing until a valid seat is selected or the user cancels.
// // A company’s content management system assigns permissions based on user roles. Write a switch statement to grant access rights for roles (1: Admin, full access; 2: Editor, edit only; 3: Viewer, read-only) based on the user’s role ID.
// // A bank evaluates loan applications using credit score (300–850) and annual income. Use an if...else statement to approve a loan if the credit score is above 700 and income is at least $40,000; otherwise, reject or flag for manual review.
// // A coffee shop’s point-of-sale system processes customer orders in a queue. Create a while loop to handle each order (e.g., Latte, Cappuccino) one by one, removing it from the queue until all orders are processed.
// // An ATM serves customers at a busy mall. Write a do...while loop to display a menu (1: Withdraw, 2: Deposit, 3: Check Balance, 4: Exit) and process the user’s choice, continuing until they select Exit.
// // An e-commerce platform offers multiple shipping options. Use a switch statement to calculate the shipping cost based on the user’s selection (1: Standard, $5; 2: Express, $15; 3: Overnight, $30) for a package weighing 2 kg.
// // A streaming service restricts premium content to active subscribers. Write an if statement to check if a user’s subscription status (e.g., Active or Expired) allows access to a new movie, displaying an error if the subscription is expired.
// // A parking garage charges different rates based on vehicle type. Use an if...else program to compute the fee for a 3-hour stay: $5 for Motorcycles, $10 for Cars, $20 for Trucks, based on the vehicle type entered.
// // A smart city’s traffic light system operates at a busy intersection. Create a while loop to cycle through Red (30 seconds), Green (45 seconds), and Yellow (5 seconds) states, updating the light status until the system is powered off.
// // A retail website offers promotional coupon codes during checkout. Write a do...while loop to prompt the user to enter a coupon code, validating it against a list of valid codes (e.g., SAVE10, FREESHIP), until a valid code is entered or the user skips.
// // A restaurant’s online payment system supports multiple payment methods. Use a switch statement to process the transaction based on the user’s choice (1: Credit Card, 2: Debit Card, 3: PayPal, 4: Cash on Delivery) and confirm the payment type.
// // A logistics company tracks delivery schedules. Write an if...else statement to check a package’s status based on its estimated delivery time (e.g., 2 PM) and actual delivery time (e.g., 3 PM), categorizing it as On Time (within 30 minutes), Delayed (beyond 30 minutes), or Canceled (no delivery).

// // #  * Scenario: Modeling a Library System
// // #    You are tasked with designing a simplified digital library system.
// // #    * a. Identify at least three distinct classes you would create (e.g., Book, Member, Librarian).
// // #    * b. For each identified class, list at least three key attributes it would need and at least two important methods it would perform.
// // #    * c. Briefly explain how these classes would interact with each other (e.g., how would a Member borrow a Book?).

// class Book{
//     constructor(read,wrote,mark,carry) {
//         this.read=read;
//         this.wrote=wrote;
//         this.mark=mark;
//         this.carry=carry
//     }

// }
// Book.prototype.readed=function(){
//     return `Book was ${this.read} and by student`
// }
// Book.prototype.carried=function(){
//   return  this.carry > 50? true:false
// }
// Book.prototype.marked=function(){
//   return this.mark.reduce((acc,sum)=> acc+sum,0)
// }
// Book.prototype.write=function(){
//     if(this.wrote.length>1){ 
//         console.log(`negative cases`)
//     }
//     else{
//         console.log(`positive case`)
//     }

// }

// const book =new Book("trevor",[2,3,4],[30,40,50,80],70)
// console.log(book.carried());
// console.log(book.readed());
// console.log(book.write());
// console.log(book.marked());

// // 1. How would you design a User class in JavaScript and Kotlin for a messaging app, and how would you handle different types of users like regular users and admins?
// // Key aspects to explore:
// // Define a base User class with properties like username, email, and status.
// // Add methods like sendMessage() and login().
// // Extend the User class to create an AdminUser class with additional methods like deleteMessage() or banUser().
// // In Kotlin, consider using inheritance with open classes. In JavaScript, use class or constructor functions with prototypes.
// // Reflect: What are the differences in how JavaScript and Kotlin handle class extension, method overriding, and access control?


// class MessagingApp{
//     constructor(username,email,status){
//         this.username=username;
//         this.email=email;
//         this.status=status;
//     }
// }
// MessagingApp.prototype.sendMessage=function(){
//     return `You have successfully created ${this.username}${this.email}  and your ${this.status}is updated`
// }

// MessagingApp.prototype.login=function(){
//  if(this.email.includes('@' && '.com')){
//     console.log(`Valid email`)
//  }
//  else{
//     console.log(`Invalid email`);
    
//  }
// }

// class AdminUser extends MessagingApp{
//     constructor(username,email,status,experiences){
//         super(username,email,status);
//         this.experiences=experiences;
//     }
// }
//  AdminUser.prototype.deleteMessage=function(){
//     if(this.experiences>5){
//         console.log(`Retirement needed`)
//     }
//     else{
//         console.log(`Promotion required`);
        
//     }
//  }

//  AdminUser.prototype.banuser=function(){
//     if(this.email.length && this.username.length===10){
//         console.log(`valid input`);
        
//     }
//     else{
//         console.log(`invalid input`);
        
//     }
//  }

//  const messagingapp = new MessagingApp('estherk','estherk@gmail.com','admin')
//  console.log(messagingapp.sendMessage());
//  console.log(messagingapp.login());

//  const adminuser =new AdminUser('estherkariuki','estherkariuki@gmail.com','user',5.5)
//  console.log(adminuser.deleteMessage());
//  console.log(adminuser.banuser());
 


//  let string ="I love coding";
//  let firstword=string.startsWith("I love");
//  console.log(firstword);
//  let lastword=string.endsWith("coding")
//  console.log(lastword)

//  let string2="extravaganza";
// let string3= string2.length > 10? true:false
//  console.log(string3)

//  let word="I love javascript"
//  let word2=word.replaceAll(" ","s")
//  console.log(word2)

//  let string4="I love javascript";
//  let string5=string4.toUpperCase();
//  console.log(string5);
//  let string6=string4.toLowerCase();
//  console.log(string6);

//  let language="javascript"
//  let languages=language.at(0);
//  let lang=language.at(-1)
//  console.log(languages);
//  console.log(lang);
 
//  let a="50";
//  let b= Number(a);
//  console.log(b);
//  let c = b + 20;
//  console.log(c);

//  let x=10
//  let y=(x-=3)
//  console.log(y)
//  let z=(y/=2)
//  console.log(z);
 

//  let statement="Hello world"
//  let statement2=statement.slice(6)
//  console.log(statement2);


// //  Create a CustomerOrder class with properties: orderId (string), items (array of objects with name, quantity, price), and status (string). 
// //  Add a method calculateTotal() that returns the total order amount. Write an async method processPayment()
// //   that simulates payment with a Promise that resolves after 2 seconds. 
// //  After calling the method, change the status to "paid" and print a success message.

// class CustomerOrder{
//     constructor(orderId,items,status){
//         this.orderId=orderId;
//         this.items=items;
//         this.status=status;
//     }
//     calculateTotal(){
//         return this.items.reduce((total,item)=> total +this.items.quantity*this.items.price,0)
//     }
// }

// async function processPayment() {
//   return  await new Promise(resolve => {
//         setTimeout(() =>{
//             resolve(`success message`)
//         },2000);

//     });
// };

// const payment =new CustomerOrder("784rt",[{name:"books",quantity:40,price:300},{name:"novel",quantity:20,price:600}],"paid")
// console.log(payment.calculateTotal());
// console.log(payment.processPayment);



// // Create a TeamMember class that takes name, role, and an array of tasks 
// // (each task is an object with title and completed boolean). Write a prototype method completeTask(taskTitle)
// //  that marks a task as completed. Write another method checkProgress() that returns a Promise resolving to 
// //  "All tasks completed!" or rejecting with "Pending tasks remaining" based on the state of the tasks array.

// // Create a TeamMember class that takes name, role, and an array of tasks 
// // (each task is an object with title and completed boolean). 
// // Write a prototype method completeTask(taskTitle) that marks a task as completed.
// // Write another method checkProgress() that returns "All tasks completed!" if all tasks are done, 
// // or "Pending tasks remaining" if any are incomplete.

// class TeamMember {
//     constructor(name,role,tasks) {
//         this.name=name;
//         this.role=role;
//         this.tasks=tasks;
        
//     }

// }
// TeamMember.prototype.completeTask=function(taskTitle){
//     let found = false;
//     this.tasks.forEach(task => {
//         if(task.title==taskTitle
//         ){
//             task.completed=true
//             found=true
        
//         }
//          });
//         if (found){
//             console.log(`task ${taskTitle} is complete`);
            
//         }
//         else{
//             console.log(`task ${taskTitle} is incomplete`)
//         }
        
   
// }


// const teamMember=new TeamMember("Esther","Manager",[{title:"reading",completedBoolean:"completed"},{title:"writing",completedBoolean:"incomplete"}])
// console.log(teamMember);
// teamMember.completeTask("writing");
// teamMember.completeTask("reading")



//  Build a Candidate class with properties: name, position, and interviews (array of objects with date, status). 
//  Add a method scheduleInterview(date) that pushes a new interview with status "pending".
//   Then write an async function sendConfirmation() that returns a Promise that resolves after 1 second with a message "Interview confirmed with [name]", and log the message.

class Candidate{
    constructor(name,position,interviews=[]){
        this.name=name
        this.position=position
        this.interviews=interviews
    }
    scheduleInterview(date){
        this.interviews.push({date:date,status:"pending"})
        return `your interview date is ${date} although its status: pending`
    }
    async sendConfirmation(){
       return  await new Promise((resolve)=>{
            setTimeout(()=>{
            resolve(`Interview confirmed with ${this.name}`)
        },1000);
    })
}
}



const candidate=new Candidate("Joanita","Manager")
console.log(candidate.scheduleInterview('2025-4-2'))
candidate.sendConfirmation().then(msg => console.log(msg));




// Design a Course class with properties: title, instructor, and students (array of student objects with
//      name and progress). Add a method updateProgress(studentName, value) that modifies the student’s progress. 
//      Create an async method generateCertificate(studentName) that returns a Promise resolving only if the progress
//       is 100, otherwise reject with "Incomplete progress".
// class Course {
//     constructor(title,instructor,students){
//         this.title=title;
//         this.instructor=instructor
//         this,students=students
//     }
//     updateProgress(studentName,value){
//         this.students.add("complete progress")
//         retrun `Your progress is being updated`
//     }

//     async generateCertificate(studentName){
//         return await new Promise((resolve, reject) => {
//             if (this.student.progress ===100){
//                 console.log(`progressing`);
                
//             }
//             else{
//                 console.log(`Incomplete progress`);
                
//             }
            
//         })
//     }
// }

// const course=new Course('Backend','Mwai',[{name:'Carol',progress:20}])
//  console.log(course.generateCertificate("Mukami"));
//  console.log(course.updateProgress("Carol",60))
 



// Create a StockTracker class with a property watchlist 
// (array of objects with symbol, threshold, currentPrice). Add a method updatePrice(symbol, newPrice)
//  that updates the stock’s current price. Write an async method checkAlerts() that loops through the watchlist
//   and returns a Promise resolving with a list of stocks where currentPrice >= threshold, or rejecting with "No alerts
//    triggered".

class StockTracker {
    constructor(watchlist) {
        this.watchlist=watchlist
        
    }
    updatePrice(symbol,newPrice){
        
    }
}























// class BankAccount {
//     constructor(name) {
//         this.name=name;
//         this.transaction=[];
//         this.loan=0;
//         this.balance=0;
//         this.frozen=true;

        
//     }
// }

// BankAccount.prototype.getDeposited=function(amount){
//     if(amount>0){
//         this.balance +=amount
//         this.transaction.push(`Deposited:${amount}`)
//         return `You have successfull deposited ${amount} your current balance is ${this.balance}`

//     }
//     else{
//         return `You have insufficient balance try again!`
//     }

// }
// BankAccount.prototype.getwithdraws=function(amount){
//     if(amount>0){
//         this.balance-=amount
//         this.transaction.push(`withdraws:${amount}`)
//         return `you have withdrawn ${amount} your account balance is ${this.balance}`
//     }
//     else if(amount>self.balance){
//         return `you have insufficient balance.Your balance is ${self.balance}`
//     }
//     else `invalid request`
        
//     }

// BankAccount.prototype.requestLoan=function(amount){
//     const loan =7000
//     if(amount>0 && amount<loan){
//         this.balance +=amount
//            this.transaction.push(`loan:${amount}`)
//         return `Your loan request have been approved.you have received  ${amount} and you r current balance is ${this.balance}`   
//     }
//     else{
//         return `Insufficient balance`
//     }
// }

// BankAccount.prototype.repayLoan=function(amount){
//     const loanamount =7000
//     if(amount>0 ){
//         this.balance -=amount
//            this.transaction.push(`reloan:${amount}`)
//         return `You have repaid ${amount} your repayment loan amount is ${this.loan}`   
//     }
//     else if(amount >loanamount){
//         this.getDeposited+=amount
//         return `${amount} have being deposited and you current balance is ${this.balance} `
//     }
//     else{
//         return `Insufficient balance`
//     }
// }

 
// const account=new BankAccount("Esther");
// console.log(account.getDeposited(4000));
// console.log(account.getDeposited(1000));
// console.log(account.getwithdraws(1000));
// console.log(account.getwithdraws(500));
// console.log(account.requestLoan(6000));
// console.log(account.requestLoan(9000));
// console.log(account.repayLoan(6000));
// console.log(account.repayLoan(9000));

// console.log(account.transaction);


 
// # You're building a system that tracks vehicles.
// # Each vehicle has:
// # a name
// # a max speed
// # Create a class Vehicle.
// # Then, create two subclasses:
// # Car (with an extra property: number of doors)
// # Bike (with an extra property: hasCarrier – true/false)
// # You should:
// # 1. Instantiate at least one Car and one Bike.
// # 2. Print their details using a method.
// # > :mag: Inheritance can be used to make Car and Bike extend Vehicle.
 

class Vehicle{
    constructor(name,maxSpeed){
        this.name=name
        this.maxSpeed=maxSpeed

    }
    start(){
        return `The ${this.name} moves with a speed of ${this.maxSpeed} km/hr`
}
}
class Car extends Vehicle{
    constructor(name,maxSpeed,numberOfDoors){
        super(name,maxSpeed)
        this.numberOfDoors=numberOfDoors
    }
    start(){
        return `The ${this.name} uses a speed of ${this.maxSpeed} and have ${this.numberOfDoors}of doors`
    }
    
}

class Bike extends Vehicle{
    constructor(name,maxSpeed,has_carried){
        super(name,maxSpeed)
        this.has_carried=this.has_carried
    }
    start(){
       return  this.has_carried="iscarring"?"is carring":"is not carring"
      
    }
}

const vehicle=new Vehicle("KTU",400)
 console.log(vehicle.start());

 const car=new Car("KUu",200,3)
 console.log(car.start());

 const bike=new Bike("KBU",100,false)
 console.log(bike.start());

  const bike1=new Bike("KYA",30,true)
 console.log(bike1.start());
 
 
 
// # :white_check_mark: Complex Question (requires inheritance)
// # :receipt: Question: Employee Payroll System
// # You're designing a payroll system for a company.
// # Each employee has:
// # name
// # employee ID
// # base salary
// # There are two types of employees:
// # FullTimeEmployee (with benefits allowance)
// # PartTimeEmployee (with hours worked and hourly rate)
// # Create:
// # 1. A base class Employee.
// # 2. Subclasses FullTimeEmployee and PartTimeEmployee that inherit from Employee.
// # You should:
// # Calculate the total salary:
// # For full-time: base salary + allowance
// # For part-time: hourly rate × hours worked
// # Print name, ID, and total salary for at least 2 employees of each type.
// # > :bulb: Use inheritance to reuse shared properties and override methods where needed.

class Employee {
    constructor(name,EmployeeId,baseSalary) {
        this.name=name
        this.EmployeeId=EmployeeId
        this.baseSalary=baseSalary
        
    }
    totalSalary(){
        return this.baseSalary
    }

}

class FullTimeEmployee extends Employee{
    constructor(name,EmployeeId,baseSalary,allowance){
        super(name,EmployeeId,baseSalary)
        this.allowance=allowance
    }
    fullTime(){
        return this.baseSalary + this.allowance
    }

}

class PartTimeEmployee extends Employee{
    constructor(name,EmployeeId,baseSalary,hours){
        super(name,EmployeeId,baseSalary)
        this.hours=hours
    }
    partTime(){
      return  this.hours.reduce((baseSalary,hour)=>baseSalary +(hour.hourlyRate * hour.hoursWorked ),0)
        
    }
}

const employee=new Employee("Esther","T021",30000)
console.log(employee.totalSalary());

const fte=new FullTimeEmployee("Esther","W094",40000,2000)
console.log(fte.fullTime());

const pte=new PartTimeEmployee("Esther","W04",60000,[{hourlyRate:20,hoursWorked:6}])
console.log(pte.partTime());


// Design a data structure to represent a shopping cart for an online store that supports adding items ,
//  removing items, updating items .


 
 
 


