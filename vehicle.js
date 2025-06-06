// Here's the same question again, with the inheritance aspect explicitly highlighted:
// Question Focusing on Inheritance:
// Design a Vehicle class that serves as a base class, defining common attributes and actions for any type of vehicle. It should have:
// Vehicle Class Properties:
//  * make (string)
//  * model (string)
//  * year (integer)
//  * speed (integer, initialized to 0)
// Vehicle Class Behaviors (Methods):
//  * accelerate(amount): Increases the speed by amount.
//  * brake(amount): Decreases the speed by amount, ensuring speed does not go below 0.
//  * get_info(): Returns a formatted string describing the vehicle (e.g., "2023 Toyota Camry, current speed: 60 mph").
// Now, demonstrate inheritance by creating a Car subclass that extends the Vehicle class. This Car class should inherit all properties and methods from Vehicle, and add its own specific properties and behaviors:
// Car Subclass Properties:
//  * num_doors (integer)
// Car Subclass Behaviors (Methods):
//  * honk_horn(): Returns a string representing the sound of a horn (e.g., "Beep! Beep!").
// Finally, demonstrate the proper use of inheritance by:
//  * Creating an instance of the Vehicle class.
//  * Creating an instance of the Car class.
//  * Calling methods from both the Vehicle class (like accelerate or get_info) on your Car instance to show it inherited functionality.
//  * Calling the honk_horn() method on your Car instance to show its unique functionality.

class Vehicle{
    constructor(make,model,year,speed){
        this.make=make;
        this.model=model;
        this.year=year;
        this.speed=speed;

    }
    accelerate(amount){
        this.speed+=amount
        return `The current speed is ${this.speed}mph`
    }

    brake(amount){
        this.speed-=amount
        if(this.speed<0){
            console.log(`Your ${this.speed}mph is below zero`)
        }
        else{
            console.log(`Your speed is ${this.speed}mph`);
        }
      
    }
    getInfo(){
        return `${this.model} ${this.make} was bought in ${this.year}an uses a speed of ${this.speed}mph`
    }
}

class Car extends Vehicle{
    constructor(make,model,year,speed,numDoors){
        super(make,model,year,speed);
        this.numDoors=numDoors;
    }
     accelerate(amount){
        this.speed+=amount
        return `The current speed is of the car is${this.speed}`
    }

    brake(amount){
        this.speed-=amount
        if(this.speed<0){
            console.log(`Your ${this.speed}mph is below zero`)
        }
        else{
            console.log(`Your speed is ${this.speed}mph`);
        }
      
    }
    honkHorn(){
        return `Beep!! Beep`
    }
    getInfo(){
        return `${this.model}${this.make} was bought in ${this.year}an uses a speed of ${this.speed}`
    }
}

const vehicle =new Vehicle("Toyota","Carmy",2034,400)
console.log(vehicle.accelerate(100));
vehicle.brake(200);
console.log(vehicle.getInfo());
const car= new Car('v8','mercedez',2017,20)
console.log(car.accelerate(100))
car.brake(150)
console.log(car.honkHorn());
console.log(car.getInfo());






