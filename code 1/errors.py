#Challenge 1

def evenodd():
    number = int(input("Enter number:"))
    if number / 2 == 0:
        print ("Even")
    else:
        print("Odd")

def votecheck():
    age = int(input("Enter your age:"))
    if age < 18:
        print ("Not eligible to vote")
    else:
        print("Eligible to vote")

def posneg():
    number = int(input ("Enter a number: "))
    if number == 0:
        print ("Zero")
    elif number < 0:
        print ("Negative")
    else:
        print ("Positive")

#Challenge 2

def parta():
    for i in range (1,11):
        print (i)

def partb():
    num = 1
    while num <=5:
        print (num)
        num += 1

def partc(num):
    newnum = 1
    for i in range (1 , num):
        newnum *= i
    print (newnum)

#Challenge 3

def parta():
    name = input("Enter your name: ")
    print (f"Hello {name}! Welcome to the program.")

def partb():
    number = int(input("Enter number:"))
    if number % 2 == 0:
        print ("Even")
    else:
        print("Odd")

def partc():
    string = input ("Type anything: ")
    vowels = ["a", "e", "i", "o", "u"]
    i = 0
    for letter in string:
        if letter in vowels:
            i +=1    
    print (i)
       
#Challenge 4

def parta():
    fruits = ["Banana", "Melancia", "Mac~a", "Kiwi", "Abacaxi"]
    for i in fruits:
        print (i)

def partb():
    gradebook = {"Carol" : "100" , "Mary" : "10" , "Janay" : "5" , "Sheetal":"0"}
    for key , value in gradebook.items():
        print (f"{key},{value}")

def partc():
    numlist = [1,99,0,734,93,435,1,5,453,36,7]
    print(max(numlist))
