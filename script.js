console.log("Section-1 - Basic Arithmetic");
console.log("1. ",25 + 4);
console.log(25 - 4);
console.log(25 * 4);
console.log(25 / 4);
console.log("2. 100 % 30",100 % 30);
console.log("3. Print 7 ** 2",7**2);
console.log("4. Print 2 ** 5",2**5);
//Store 50 in a variable and divide by 5
var store = 50
console.log("5. 50 / 5",store/5);
console.log("6. Remainder - 45 / 6: ",45%6);
console.log("7. Multiply 0.5 * 8 : ",0.5*8);
console.log("8. subtract 200 from 75",200-75);
console.log("9. Add three numbers(10,20,30): ",10+20+30);
console.log("10. Find 9 % 2: ",9%2);


console.log("Section-2 - Increment / Decrement");

let a =5
console.log(a++);  //Result is = 5
console.log(a);   //Result is = 6

let b =5
console.log(++b);    //Result is = 6
console.log(b);      //Result is = 6

let c = 10
let d = a++
console.log(c,d);   //Result is = 10 6

let a1 = 10
let b1 = ++a1
console.log(a1,b1);     //Result is = 11 11

let c1 = 1
let d1 = a++ + a++
console.log(c1,d1);     //Result is = 1 15

let a2 = 1
let b2 = ++a + ++a
console.log(a2,b2);    //Result is = 1 21

let a3 = 3
a3 = a3++
console.log(a3)      //Result is =3

let a4 = 3
a4 = ++a4
console.log(a4)      //Result is = 4

let x =5
let y = --x
console.log(x,y);     //Result is = 4 4

let x2 =5
let y2 = x2--
console.log(x2,y2);      //Result is = 4 5 

let x1 = 2
let y1 = x1++ + ++x1 + x1++
console.log(x1,y1);      //Result is = 5 10

let a5 = 4
let b5 = --a5 + a5-- + --a
console.log(a5,b5);        //Result is = 2 16 

let m = 1
let n = ++m + m++ + ++m
console.log(m,n);         //Result is = 4 8

let m1 = 5
let n1 = m1++ + m1++ + m1++
console.log(m1,n1);         //Result is = 8 18

let a11 = 10
a11 += a11++
console.log(a11);        //Result is = 20

console.log("Section-3 - Assignment Operators");
let t = 10
t += 5
console.log(t);      //Result is = 15

let t1 = 10
console.log(t1 -= 5);       //Result is = 5

let t3 = 20
console.log(t3 *= 8);       //Result is = 160

let t2 = 7
console.log(t2 /= 3);       //Result is = 2.333333333

let t4 = 25
console.log(t4 %= 4);       //Result is = 1

let k = 5
k += 3
k *=2
console.log(k);       //Result is = 16

let k1 = 10
k1 -= 2
k1 /=4
console.log(k1);       //Result is = 2

let k2 = 8
k2 %= 3
console.log(k2);       //Result is = 2

let k3 = 6
k3 += k3
console.log(k3);       //Result is = 12

let k4 =2
k4 *= k4 += 3
console.log(k4);       //Result is = 10

console.log(`Section-4 - Comparison`);

console.log(5 == "5");                //Result is  = true
console.log(5 === "5");              //Result is  =  false
console.log(0 == false);            //Result is  =   true
console.log(0 === false);           //Result is  =   false
console.log(null == undefined);        //Result is = true
console.log(null === undefined);       //Result is = false
console.log("10" > 5);               //Result is  =  true
console.log("2" > "10");           //Result is    =  true
console.log(true == 1);           //Result is  =  true 
console.log(true === 1);        //Result is = false

console.log(`Section-5 - Logical Operators`);

console.log(true && false);             //Result is =  false          
console.log(true || false);            //Result is =  true          
console.log(false || false);          //Result is = false             
console.log(!true);                 //Result is  =  false             
console.log(!(5 > 2));              //Result is =   false             
console.log(5 > 3 && 10 > 5);        //Result is = true              
console.log(5 > 3 && 10 < 5);        //Result is = false              
console.log(5 < 3 || 10 < 5);        //Result is = false              
console.log(5 < 3 || 10 > 5);        //Result is = true              
console.log((5 > 2 && 3 > 1) || (10 < 2));   //Result is = true

console.log(`Section-6 - Ternary`);

let age = 20;
(age >= 18 && console.log("Adult")) || console.log("Minor");
let marks = 65;
(marks >= 50 && console.log("Pass")) || console.log("Fail");
let num = 7;
(num % 2 === 0 && console.log("Even")) || console.log("Odd");
let marks1 = 60;
(marks1 >= 90 && console.log("A")) ||
(marks1 >= 75 && console.log("B")) ||
(marks1 >= 50 && console.log("C")) ||
console.log("Fail");
let number = -5;
(number >= 0 && console.log("Positive")) || console.log("Negative");

console.log(`Section-7 - String & Concatenation`);
console.log("Hello" + "World");

let firstName = "Naveen";
let lastName = "Kumar";
console.log(firstName + " " + lastName);

console.log(`${firstName} ${lastName}`);

console.log("10" + 5);
console.log(5 + "10");


console.log(`Section-8 - Implicit Type Conversion`);
console.log("5"+2)       //Result is = 52
console.log(typeof("5" + 2))       //Result  = string
console.log("5"-2)       //Result is = 3
console.log(typeof("5"-2))       //Result is = number
console.log("5"*2)       //Result is = 10
console.log(typeof("5" * 2))       //Result is = number
console.log(true + 1)       //Result is = 2
console.log(typeof(true + 1))       //Result is = number
console.log(false + "1")       //Result is = false1
console.log(typeof(false + "1"))       //Result is = string


console.log(`Section-9 - Explicit Type Conversion`);
console.log("123")       //Result is = 123
console.log(Number("123"))       //Result is = 123
console.log("abc")       //Result is = abc
console.log(Number("abc"))       //Result is = NaN
console.log(true)       //Result is = true
console.log(Number("true"))       //Result is = NaN
console.log("")       //Result is = 
console.log(Boolean(""))       //Result is = false
console.log("hello")       //Result is = hello
console.log(Boolean("hello"))       //Result is = true





// FINAL RAPID FIRE ROUND :


// 1. Difference between == and ===

//  Compares value only (does type conversion).
//  Compares value and type (no type conversion).

//  Example:
//  5 == "5"   // true
//  5 === "5"  // false

// 2. Difference between a++ and ++a

// a++ → Post-increment (use value first, then increase)
// ++a → Pre-increment (increase first, then use value)

// Example:
// let a = 5;
// console.log(a++); // 5
// console.log(a);   // 6

// let b = 5;
// console.log(++b); // 6

// 3. List all falsy values in JavaScript

// false , 0 , undefined , NaN , null.

// 4. Why "5" - 2 works but "5" + 2 behaves differently
// "5" - 2 → JavaScript converts string to number → 3. 
// (- forces numeric conversion).
// "5" + 2 → + operator does string concatenation → "52".
// (+ can concatenate strings).

// 5. Why null == undefined is true
//   == (loose equality), JavaScript treats null and undefined as equal.

//    null === undefined  // false
//     Strict equality checks type, so they are different.


