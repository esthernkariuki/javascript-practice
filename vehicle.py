# // Here's the same question again, with the inheritance aspect explicitly highlighted:
# // Question Focusing on Inheritance:
# // Design a Vehicle class that serves as a base class, defining common attributes and actions for any type of vehicle. It should have:
# // Vehicle Class Properties:
# //  * make (string)
# //  * model (string)
# //  * year (integer)
# //  * speed (integer, initialized to 0)
# // Vehicle Class Behaviors (Methods):
# //  * accelerate(amount): Increases the speed by amount.
# //  * brake(amount): Decreases the speed by amount, ensuring speed does not go below 0.
# //  * get_info(): Returns a formatted string describing the vehicle (e.g., "2023 Toyota Camry, current speed: 60 mph").
# // Now, demonstrate inheritance by creating a Car subclass that extends the Vehicle class. This Car class should inherit all properties and methods from Vehicle, and add its own specific properties and behaviors:
# // Car Subclass Properties:
# //  * num_doors (integer)
# // Car Subclass Behaviors (Methods):
# //  * honk_horn(): Returns a string representing the sound of a horn (e.g., "Beep! Beep!").
# // Finally, demonstrate the proper use of inheritance by:
# //  * Creating an instance of the Vehicle class.
# //  * Creating an instance of the Car class.
# //  * Calling methods from both the Vehicle class (like accelerate or get_info) on your Car instance to show it inherited functionality.
# //  * Calling the honk_horn() method on your Car instance to show its unique functionality.


class Vehicle:
    def __init__(self,make,model,year,speed):
        self.make=make
        self.model=model
        self.year=year
        self.speed=speed

    def __str__(self):
        return f"{self.make} {self.model} moves which a speed of {self.speed} in {self.year}"
    
    def accelerate(self,amount):
        self.speed+=amount
        return f"Your current is speed is {self.speed}mpd"
    
    def brake(self,amount):
        if amount >0:
            self.speed-=amount
            return f"You speed is {self.speed}"
        else:
            return f"Your speed is below zero"
    def get_info(self):
        return f"{self.make} {self.model}  and its current speed is {self.speed} in year {self.year}"

class Car(Vehicle):
    def __init__(self, make, model, year, speed,num_doors):
        super().__init__(make, model, year, speed)
        self.num_doors=num_doors
    
    def accelerate(self, amount):
        self.speed


            
