# // In a banking system, a customer attempts to withdraw cash from their account. Use an if statement to check if their account balance 
# // (e.g., $500) is sufficient for the requested withdrawal amount (e.g., $200) and print a message like "Withdrawal
# //  successful" or "Insufficient funds."

def banking_system(cash):
    for i in cash:
        cash=500
        if i >cash :
            print(f"Insufficient fund")
        else :
            print(f"sufficient fund")


# An online store offers discounts during a holiday sale.
# Write an if...else program to determine if a customer’s total purchase amount (e.g., $150)
#qualifies for a discount: 10% off for purchases over $100, 20% off for purchases over $200, or no discount otherwise.   

def online_store(amount):
    for i in amount:
        if i <=100:
            print(f"no discount available")
        elif i >=101 and i <=200:
            print(f"discount offered is 10%")
        elif i >200:
            print(f"discount offered is 20%")

# // A factory uses a temperature sensor to monitor a machine’s operating condition.
# //  Create a while loop to continuously read the sensor’s temperature (in Celsius) and trigger an alert if it exceeds 85°C,
# //  stopping only when the machine is manually shut down.

# // A secure website requires users to log in with a username and password. 
# // Use a do...while loop to prompt the user to enter their credentials, allowing up to 3 attempts before locking the account,
# //  and continue until a correct login or the maximum attempts are reached

def secure_website(maxattempts):
    attempts=3
    while attempts>=maxattempts:
        print(f"{attempts} left")
        attempts -= 1



# // A vending machine at a train station accepts numeric inputs (1–5) for item selection. 
# // Write a switch statement to dispense the chosen item (1: Water, 2: Soda, 3: Chips, 4: Candy, 5: Gum)
# //  and display its price (e.g., $1.50 for Soda).

def vending_machine(numbers):
    for item in numbers:
        if item == 1:
            print(f"Soda for 1.5")
        elif item ==2:
            print(f"Water fpr 2.0")
        elif item == 3:
            print("Chips for 3.0")
        elif item ==4:
            print("Candy for 5.0")
        elif item ==5:
            print("Gum for 6.0")