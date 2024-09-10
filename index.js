// Q1. Find the Product.
// Write a program that takes an array find out the product of the elements.

let arr =[2,5,6,9]

// Function to calculate the product
function product(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        result *= arr[i];
    }
    return result;
}

console.log("Product of the array elements: ", product(arr));

// Q2. Find the Sum.
// Write a program which takes an array find out the sum of the array elements
let arr1 =[2,5,6,7]

// Function to calculate the product
function sum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

console.log("Product of the array elements: ", sum(arr1));


// Q3. Count Occurrences
// You are given an array A containing N integer elements and an integer K, and your task is to return the count of 
// occurrences of K in array A.

function countOccurrences(A, K) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === K) {
            count++;
        }
    }
    return count;
}

let A = [4,3,3,3,1,2];
let K = 3;
console.log(countOccurrences(A, K));

/*Q4. Even Odd
You are given an array A containing N integer elements, and your task is to return an array B ((having a size equal to 22)), 
where B[0] contains the sum of all even elements of array A and B[1] has the sum of all odd elements of the array A.
Note: You have to complete findEvenOdd function. No need to take any input.
*/

function findEvenOdd() {
    let A = [1, 2, 3, 4, 5, 6];
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            evenSum += A[i];
        } else {
            oddSum += A[i];
        }
    }
    return [evenSum, oddSum];
}

console.log(findEvenOdd()); 

/*Q5. Find whether the number is present or not
Write a program which takes an array as input from the user and a number. Check whether the number is present or not.
*/

let arr2= [5,1,2,3,4,5,2];
let num= '6';
function ispersent(arr2,num){
 
    return arr2.includes(Number(num))
    
}
if(ispersent(arr2,num)){
  console.log(num,'is persent in the array');
      
}

else{
    console.log(num,'is not persent in the array');
}

/*Q6. Higher Age
You are given an array A containing the age of persons in your locality, and your task is to find and return an array 
containing the age of persons that are over 18 (18(18 included)).
*/

function highAge(arr3){
   return arr3.filter(age => age >= 18);
}
console.log(highAge( [6,11,23,3,45,72,68]));
 


/*Q7. Increment the Array Elements
You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.
You have to complete Inc_Arr. No need to take any input.
*/

let arr5= [5,1,2,3,4,5];

function increment(arr5){
    return arr5.map(num => num+1)
}

console.log(increment(arr5));


/*Q8. Pass or Fail
You are given an array A containing the maths marks of students in your class, and your task is to determine if all the 
students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 3232.
If all the students pass in your class, return "YES" (without quotes); otherwise, return "NO" (without quotes).
Note: You have to complete isAllPass function. No need to take any input.
*/

let arr6= [35, 67, 35, 59,88]

function isAllPass(arr6){
    return arr6.filter(marks => marks > 32).length === arr6.length;

}

if (isAllPass(arr6)){
    console.log("All students are passed");
    
}

else{
    console.log("All students are not passed");
}


/*Q9. Unique Color Shirt
Prepbuddy is very tasteful of clothes. He has N numbers of shirts hanging in the hanger in his wardrobe. Prepbuddy likes to 
wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt 
of that color from his wardrobe. Now, he wants to know how many M unique color shirts are left in the wardrobe. Prepbuddy 
wants you to find M.
*/

function uniqueColor() {
    let arr = [2, 3, 4, 2, 5, 6, 3, 7, 8, 9, 3];
    let uniqueCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentCount = arr[i];
        let isFound = false;

        for (let j = 0; j < i; j++) {
            if (arr[j] === currentCount) {
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            let count = 0;
            for (let k = 0; k < arr.length; k++) {
                if (arr[k] === currentCount) {
                    count++;
                }
            }
            if (count === 1) {
                uniqueCount++;
            }
        }
    }
    return uniqueCount;
}
console.log(uniqueColor());

/* Q.10 The problem statement is simple- given N elements, find the 
minimum and maximum numbers among those elements. */


function minMax() {
    let arr7 = [25,45,6,100,95]
    let max = arr7[0]
    let min = arr7[0]
    for (let i = 1; i < arr7.length; i++) {
        if (arr7[i] > max) {
            max = arr7[i]
        }
        if (arr7[i] < min) {
            min = arr7[i]
        }
    }
    console.log('Max value:', max);
    console.log('Min value:', min);
}
minMax();