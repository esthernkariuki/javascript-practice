# Okay, let's break down 5 real-life Python questions that progressively incorporate basics, control flow, functions, OOP, and classes.
# Here are 5 real-life Python questions:
#  * Basic Input/Output & Control Flow (Beginner):
#    "You are writing a simple program for a local shop to calculate the total cost of a customer's purchase.
#  The program should ask the user for the price of three different items one by one. 
# After getting all three prices, it should calculate the total and then apply a 10% discount if the total cost is greater than $50.
#  Finally, it should print the original total, the discount applied (if any), and the final price the customer needs to pay. 
# Ensure the program handles cases where the user might enter non-numeric values for prices gracefully (e.g., print an error message instead of crashing)."


# item1 =float(input("Enter the price of item?"))
# item2 =float(input("Enter the price of item?"))
# item3 =float(input("Enter the price of item?"))
# total=item1+item2+item3
# if total > 50:
#    print(total*0.9)
#    print(total)
#    print(total-(total*0.9))
# else:
#    print('error')
#  * Functions & Control Flow (Intermediate):
#    "A small library wants to automate checking if a book is overdue and calculate the late fee.
#  Create a Python function called calculate_late_fee that takes two arguments:
#  due_date (a string in 'YYYY-MM-DD' format) and return_date (a string in 'YYYY-MM-DD' format). The function should:
#    * Convert these date strings into actual date objects for comparison.
#    * Determine if the return_date is after the due_date.
#    * If overdue, calculate a late fee of $0.50 per day.
#    * Return the calculated late fee (or 0 if not overdue).
#    * Include error handling for invalid date formats.
#    * Self-correction hint: You might need to import the datetime module."

# def calulate_late_fee(due_date,return_date):
#  * Classes & Objects (Intermediate/Advanced):
#    "You are developing a system for a simple inventory management. Create a Python class named Product. 
# Each Product object should have the following attributes: 
# product_id (string), name (string), price (float), and quantity_in_stock (integer).
#    The Product class should have the following methods:
#    * __init__(self, product_id, name, price, quantity_in_stock): Constructor to initialize these attributes.
#    * get_info(self): Returns a formatted string with all product details.
#    * restock(self, amount): Increases quantity_in_stock by the given amount.
#    * sell(self, amount): Decreases quantity_in_stock by the given amount. It should prevent selling if amount is greater than quantity_in_stock and
#  return False if the sale can't be made, True otherwise.
#      Demonstrate creating a few Product objects, calling restock, and attempting sell operations."

class Product:
   def __init__(self,product_id,name,price,quantity_in_stock):
     self.product_id=product_id
     self.name=name
     self.price=price
     self.quantity_in_stock=quantity_in_stock
   def get_info(self):
      return f"{self.name} with {self.product_id} that cost {self.price} and the amount in stock is {self.quantity_in_stock}"
    
   def restock(self,amount):
      self.quantity_in_stock+=amount
      print(f"Your amount of stock is {self.quantity_in_stock} ")

   def sell(self,amount):
      if amount<=self.quantity_in_stock:
         self.quantity_in_stock-=amount
         print(f'You have sold {amount} your current stock is {self.quantity_in_stock}')
      else:
         print(f'invalid stock')     
   
     
      
   
   
   




#  * Object-Oriented Programming (OOP) - Inheritance (Advanced):
#    "Expand on the previous inventory system. Now, you need to manage different types of products. 
# Create a base class Electronics and a derived class Smartphone that inherits from Electronics.
#    * The Electronics class should inherit from your Product class and add an attribute for warranty_period_months (integer).
#    * The Smartphone class should inherit from Electronics and add attributes for operating_system (string) and storage_gb (integer).
#    * Override the get_info method in Smartphone to include its specific details (OS and storage) in addition to the base Product and Electronics info.
#      Demonstrate creating a Smartphone object and calling its get_info method."

class Electronics(Product):
   def __init__(self,product_id,name,price,quantity_in_stock,warranty_period_months):
      super().__init__(product_id,name,price,quantity_in_stock)
      self.warranty_period_months=warranty_period_months

   def get_info(self):
      return f"{self.name} with {self.product_id} that cost {self.price} and the amount in stock is {self.quantity_in_stock}\n with a warranty of {self.warranty_period_months}"
   
class Smartphone(Electronics):
   def __init__(self,product_id,name,price,quantity_in_stock,warranty_period_months,operating_system,storage_gb):
      super().__init__(product_id,name,price,quantity_in_stock,warranty_period_months)
      self.operating_system=operating_system
      self.storage_gb=storage_gb

   def get_info(self):
      return f"{self.name} with {self.product_id} that cost {self.price} and the amount in stock is {self.quantity_in_stock}\n which they have a period of {self.warranty_period_months} of warranty and the operaing system is {self.operating_system} with this amount of storage {self.storage_gb}"
      
   

     
      





#  * Putting It All Together: A Simple 'Order' System (Advanced):
#    "Using your Product class (and potentially Smartphone if you did Q4), create a new class called CustomerOrder.
#    * Each CustomerOrder object should have an order_id (string), customer_name (string), and a list of items 
# (which will be Product objects or a dictionary mapping Product objects to quantities).
#    * Implement an __init__ method for CustomerOrder.
#    * Add a method add_item(self, product, quantity) that adds a Product to the order.
#  This method should also call the sell() method on the product object to update its stock. 
# If sell() fails (not enough stock), it should print an error and not add the item.
#    * Add a method calculate_total_cost(self) that iterates through the items in the order
#  and calculates the total price based on the product prices and quantities.
#    * Demonstrate:
#      * Creating a few Product objects.
#      * Creating a CustomerOrder object.
#      * Adding items to the order, including trying to add more than available stock.
#      * Calculating and printing the total cost of the order."



   



