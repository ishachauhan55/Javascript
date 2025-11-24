

// area of a rectangle

let length = 5;
let width = 4;

let area = length * width;

console.log("The area of the ractangle is : " + area);


// c to f (temp)

let Celsius = 320;
let Fahrenheit = (Celsius * 9 / 5) + 32;

console.log(Celsius + "°C is equal to " + Fahrenheit + "°F");

//  simple interest

let p = 1432552;  
let r = 5; 
let t = 10;

let simpleInterest = (p * r * t) / 100;

console.log("The simple interest is :" + simpleInterest);


// Swap two numbers 

let x = 13;
let y =28;

let swap = x;
x = y;
y = swap;

console.log(" swapping the value : x = " + x + " and y = " + y);


// avg of three numbers.

let num1 = 152;
let num2 = 145;
let num3 = 128;

let average = (num1 + num2 + num3) / 3;

console.log(" The average of three numbers is : " + average);

// use of ++ and -- operators.

let count = 528;
console.log("count: " + count);

count++; 
console.log("After increment: " + count);


count--; 
console.log("After decrement: " + count);


//  even or odd 

let numberr = 115;

if (numberr % 2 == 0) {
    console.log("Number is even !")
}
else {
    console.log("Number is odd !");
}

// Find the square and cube of a number using operators.

let number1 = 29;

let square = number1 ** 2;
let cube = number1 ** 3;

console.log("The square of is : " + square);
console.log("THe cube of is : " + cube);




//max out of two num.....

let num = 225;
let numb = 320;

if (num > numb) {
    console.log(num + " is greater than " + numb);

}
else {
    console.log(numb + " is greater than " + num);

}

//  btwn 10 and 20 using logical operators.

let number = 25;


if (Number > 10 && Number < 20) {
    console.log(Number + "  Numberb between 10 and 20 ");

}
else {
    console.log(Number + " Number not between 10 and 20 ");

}


// max of three numbers using ternary

let i1 = 12;
let j1 = 25;
let k1 = 18;

let max = (i1 > j1) ? ((i1 > k1) ? i1 : k1) : ((j1 > k1) ? j1 : k1);

console.log("The largest number is : " + max);


// Convert minutes to seconds.

let minutes = 5;

let seconds = minutes * 60;

console.log(minutes + " minutes is equal to " + seconds + " seconds.");


// Calculate the perimeter of a square.

   let side = 6;
   let perimeter = 4 * side;

   console.log("The perimeter of the square is : " + perimeter);

// Find the remainder
 
    let dividend = 35;

    let divisor = 6;

    let reminder = dividend - (Math.floor(dividend/divisor)* divisor );

    console.log("The remainder is : "+ reminder)





// Check if a person is eligible 
  
    let age = 20;
    if(age >= 18){
        console.log("Eligible for vote !");
    }
    else{
        sondole.log("Not eligible for vote ! ");
    }



// Calculate the final price after applying a discount percentage.
   
let original = 1500;


let discountPercent = 15;

let discountAmount = (original * discountPercent) / 100;

let finalPrice = original - discountAmount;

console.log("The final price after discount is : " + finalPrice);


// Create a simple calculator performing +, –, ×, /, %.

let numA = 20;
let numB = 5;
console.log("Addition: " + (numA + numB));
console.log("Subtraction: " + (numA - numB));
console.log("Multiplication: " + (numA * numB));
console.log("Division: " + (numA / numB));
console.log("Modulus: " + (numA % numB));

// Check if marks are greater than 33 AND less than or equal to 100.

let marks = 85;

if (marks > 33 && marks <= 100) {   
    console.log("Pass");
}
else {
    console.log("Fail");
}


// Find the power of a number using the exponent operator.

 let cubeNum = 4;
 let power = cubeNum ** 3;

 console.log("The power of " + cubeNum + " to the 3rd is : " + power);
 

 //  find sum.

let d = 5;
let c = 10;

let sum = c + d;

console.log("The sum of " + c + " and " + d + " is: " + sum);

