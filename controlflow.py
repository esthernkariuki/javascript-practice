number=int(input("Enter 10 number range 1-10?"))
if number<=0:
    print("number is below zero")
elif number >10:
    print('Number is greater than 10')
else:
    print(number)

# password=str(input("Enter your password?"))
# if 'aeiou' and 'bcdfghjklmnpqrstvwxy' and 123456789 in password:
#     print('correct password')
# else:
#     print("invalid password")
    

clist=['Canada','USA','Mexico','Australia']
print(set(clist))

for x in range(1,101):
    print(x**2)


number =7
limit=10
for i in range(1,limit+1):
    product =number*i
    print(f"{number} *{i}={product}")
print('/n')

number =3
limit =19
for i in range(1,limit+1):
    product = number*i
    print(f"{number}*{i}={product}")


for i in range(10,0,-1):
   print( f"{i}")

for i in range(1,10,11):
   print( f"{i}")

for i in range(10):
    if i%2==0:
        print(f'{i}')
  
     
total=0
for i in range(100,201):
    total=total+ i
    print(f'{total}')

clist=["Canada","USA","Mexico"]
while clist ==[]:
    print(set(clist))




