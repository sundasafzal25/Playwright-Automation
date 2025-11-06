

//Q#1: Print your name and age using console.log.
let name = 'Sundas Afzal'; 
let age = '29'; 

console.log("Name: " +name, "Age: " +age);
//Q#2: Write a program that checks if a number is even or odd.
let num = 5;
if(num%2 ==0)
{
    console.log(num + " Number is Even");
}
else {
    console.log(num + " Number is Odd");
}
//Q#3: Write a loop that prints numbers from 1 to 10.
for(let i=1; i<=10; i++){
    console.log(i);
}
//Q#4: Create a function that adds two numbers and returns the result.
function sum(a,b) {
return a+b;
}
console.log("Sum of Numbers is: " + sum(15,12));
