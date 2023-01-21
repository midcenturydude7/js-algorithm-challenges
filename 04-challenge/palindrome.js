/*
***********************************************************************
PROMPT: Given a string, write a function that will return whether or 
        not that string is a palindrome.
***********************************************************************

========
APROACH:
======== 
What is our Input?
  String = one Stringd

What is our Output?
  Boolean means either true or false. true if string is a palindrome; false if it is not.

========== 
QUESTIONS
==========
Questions to ask the interviewer:

Do we need to consider whitespace?
  Do not trim whitespace.

Does the palindrome need to be in the dictionary?
  No, it does not.


===== 
PLAN
=====
1. Reverse the string. We need to keep the old reference to the string to use later. To do this, we need to split string into an array.
2. Reverse the string.
3. Join the string.
4. See if new variation of string is equal to an old variation of string.
*/

const palindrome = (str) => {
  let strOld = str.replace(/[^\w]/g, "");
  return strOld === strOld.split("").reverse().join("");
};
console.log(palindrome("never odd or even"));
