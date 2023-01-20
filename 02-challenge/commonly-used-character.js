/*
***********************************************************************
PROMPT: Write a function that takes a string, and returns the character 
        that is most commonly used in the string.
***********************************************************************

========
APROACH:
======== 
What is our Input?
  String = one String

What is our Output?
  String = the single character that shows up the most in the given string

========== 
QUESTIONS
==========
Questions to ask the interviewer:

Do we need to consider if there is no string given?
  For this challenge, no

Do we need to consider times when more than one character shows up the same number of times?
  No. Return the last one.

===== 
PLAN
=====
Most Used Char Plan
To find the character most often used in a string, we need to be able to count how many of each kind we have. We can do this using an object that has key:value pairs.

1. Define and Initialize an object
2. Map character count to that object.
3. Loop through the object to find the max count.
4. Assign new max count value to maxCharCount and new max key to maxChar.
5. Return maxChar
*/

const countingChars = (str) => {
  const charCount = {};
  let maxCharCount = "";
  let maxCharLetter = "";

  for (let i = 0; i < str.length; i++) {
    charCount[str[i]] = ++charCount[str[i]] || 1;
  }

  for (let key in charCount) {
    if (charCount[key] >= maxCharCount) {
      maxCharCount = charCount[key];
      maxCharLetter = key;
    }
  }
  return maxCharLetter;
};

console.log(
  `The letter that appears the most times is: ${countingChars(
    "Gooooofeydoooodooohead"
  )}`
);
