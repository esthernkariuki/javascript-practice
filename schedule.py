class Vehicle:
    def __init__(self,name,max_speed):
        self.name=name
        self.max_speed=max_speed
    def vehicle(self):
        return f"The vehicle {self.name} travels with spedd of {self.max_speed}."


class Car(Vehicle):
    def __init__(self,name,max_speed,number_of_doors):
        super().__init__(name,max_speed)
        self.number_of_doors=number_of_doors

    def car_make(self):
        return f"The {self.name} travel with {self.max_speed} to reach Nairobi and it has this number of doors{self.number_of_doors}"
    
class Bike(Vehicle):
    def __init__(self,name,max_speed,has_carrier):
        super().__init__(name,max_speed)
        self.has_carrier=has_carrier

    def bike_details(self):
        self.has_carrier=True
        if self.has_carrier==True:
            return f"The Bike {self.name} tvavel with thisamount of {self.max_speed} speed to reach Nairobi and {self.has_carrier} "
        else:
            return f"The Bike {self.name} travels with the spedd of {self.max_speed}and it {self.has_carrier}"





























# You're building a system that tracks vehicles.
# Each vehicle has:
# a name
# a max speed
# Create a class Vehicle.
# Then, create two subclasses:
# Car (with an extra property: number of doors)
# Bike (with an extra property: hasCarrier – true/false)
# You should:
# 1. Instantiate at least one Car and one Bike.
# 2. Print their details using a method.
# > :mag: Inheritance can be used to make Car and Bike extend Vehicle.


class Employee:
    def __init__(self,name,employee_id,base_salary):
        self.name=name
        self.employee_id=employee_id
        self.base_salary=base_salary

    def total_salary(self):
        return f"{self.name} with id {self.employee_id} your total salary is {self.base_salary}"
        
class FullTimeEmployee(Employee):
    def __init__(self,name,employee_id,base_salary,allowance):
        super().__init__(name,employee_id,base_salary)
        self.allowance=allowance

    def total_salary_allowance(self):
        self.base_salary+=self.allowance
        return f"{self.name} with id{self.employee_id} where the total amount with allowance is{self.base_salary}"
    
class partTimeEmployee(Employee):
    def __init__(self,name,employee_id,base_salary,rate_hourly,hours_worked):
        super().__init__(name,employee_id,base_salary)
        self.rate_hourly=rate_hourly
        self.hours_worked=hours_worked

    def total_salary_rate(self):
        self.rate=self.rate.hours_worked * self.rate_hourly
        self.base_salary += self.rate
        return f"{self.name} with id {self.employee_id} and theit total amout is {self.base_salary}"

        
        

# :white_check_mark: Complex Question (requires inheritance)
# :receipt: Question: Employee Payroll System
# You're designing a payroll system for a company.
# Each employee has:
# name
# employee ID
# base salary
# There are two types of employees:
# FullTimeEmployee (with benefits allowance)
# PartTimeEmployee (with hours worked and hourly rate)
# Create:
# 1. A base class Employee.
# 2. Subclasses FullTimeEmployee and PartTimeEmployee that inherit from Employee.
# You should:
# Calculate the total salary:
# For full-time: base salary + allowance
# For part-time: hourly rate × hours worked
# Print name, ID, and total salary for at least 2 employees of each type.
# > :bulb: Use inheritance to reuse shared properties and override methods where needed.

