/* Challenge 1*/

function parta() {
    let number = parseInt(prompt("Enter number:"));
    if (number % 2 == 0){
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
}

function partb() {
    let age = parseInt(prompt("Enter your age:"));
    if (age < 18) {
        console.log("Not eligible to vote")
    }
    else{
        console.log("Eligible to vote")
    }
}

function partc() {
    let number = parseInt(prompt("Enter number:"));
    if (number <= 0){
        console.log("Negative") 
    }
    
    else if (number == 0){
        console.log("Zero")
    }

    else {
        console.log("Positive")
    }
}


/* Challenge 2*/

function parta(){
    for (let i = 1; i <=10; i++)
    console.log(i)
}    

function partb(){
    let i = 1
    while (i <=5){
        console.log(i);
        i++;
    }  
}

function partc(){
    let number = parseInt(prompt("Enter number:"));
    let x = 1;
    for (let newnumber = 1; newnumber <= number; newnumber++){
        x = x*newnumber
    }
    console.log(x)     
}

/* Challenge 3*/

function parta(){
    let name = prompt("Enter name:");
    console.log("Hello " + name + "! Welcome to Java(hell)Script")
}

function partb(){
    let number = parseInt(prompt("Enter number:"));
    if (number % 2 == 0){
        console.log("Even")
    }
    else{
        console.log("Odd")
    }  
}

function partc(){
    let string = prompt("Type anything: ");
    let vowels = ["a", "e", "i", "o", "u"];
    let counter = 0
    for (let x = 0; string[x]; x++){
        if(vowels.includes(string(x))){
            counter++
        }
    }
    console.log(counter)
}

/* Challenge 4*/

function parta(){
    let fruits = ["Banana", "Apple", "Pineapple"]
    for (let i = 1; fruits[i]; i++) {
        console.log(fruits[i])
    }
}

function partb(){
    let dictionary = {}; 
    dictionary ["Mary"] = "90";
    dictionary ["Janay"] = "80";
    dictionary ["Sheetal"] = "0";
    dictionary ["Carol"] = "100";
    dictionary ["Lali"] = "-1";
    console.log(dictionary);
}


function partc(){
    let numbers = [100, 20, 90, 80, 70, 120];
    let greater = 0;
    for (let x = 0; numbers[x];x++){
        let current_num = numbers[x];
        if(current_num < greater) {
            x++
        }
        else if (current_num > greater){
            greater = current_num
        }
        
    }
}

