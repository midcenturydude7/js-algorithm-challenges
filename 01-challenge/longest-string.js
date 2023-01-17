/*
*************************************************************************************
PROMPT: Write a function that accepts an array of strings. Return the longest string.
*************************************************************************************

========
APROACH:
======== 
What is our Input?
  String[] = an array of strings

What is our Output?
  String = the longest of the strings in the array

========== 
QUESTIONS
==========
Questions to ask the interviewer:

Do we need to consider if there are no strings in the array?
For this challenge, no

Do we need to consider times when all of the strings are the same length?
Yes. Return the first string.

===== 
PLAN
=====
Longest String Plan
For this problem, we need to:

0. Initialize and Declare Variable for Longest String
1. Loop through the array
2. Find the length of each string
3. Determine if that length is the largest we have seen so far.
4. Replace the longest/largest variable with the arr[index] as long as length is greater than the variable.
5. Return longest/largest string.
*/

//ES 5 Syntax Possible Solution:
function longestString1(arr) {
  var longest = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

console.log(longestString1(["epoch", "clandestine", "orderly"]));

//ES 6 Syntax Possible Solution
const longestString2 = (arr) => {
  let longest = "";
  arr.forEach((item) => {
    if (item.length > longest.length) {
      longest = item;
    }
  });
  return longest;
};

console.log(longestString2(["endowment", "wonderfully", "cool"]));

//ES 6 Syntax Possible Solution
const longestString3 = (arr) => {
  let longest = "";
  for (const item of arr) {
    if (item.length > longest.length) {
      longest = item;
    }
  }
  return longest;
};

console.log(longestString3(["dopesick", "warriors", "commensurate"]));
