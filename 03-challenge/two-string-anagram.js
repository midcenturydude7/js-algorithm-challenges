/*
***********************************************************************
PROMPT: Create a function that takes in two strings as two parameters 
        and returns a boolean that indicates whether or not the first 
        string is an anagram of the second string.
***********************************************************************

========
APROACH:
======== 
What is our Input?
  String, String = two Strings

What is our Output?
  Boolean are either true or false. True if they are anagrams of each other, and false if they are not.

========== 
QUESTIONS
==========
Questions to ask the interviewer:

What is an anagram?
  An anagram is another word or phrase formed by rearranging letters of the first word or phrase.

Do we need to consider whitespace?
  Trim whitespace prior to comparison.


===== 
PLAN
=====
If an anagram is just a bunch of letters jumbled around, we can see if the strings are anagrams of each other by:

1. Comparing the length: if they are not same length, they are not an anagram of the other
2. Sorting the string and using an equality operator to see if it’s equal.
*/

const anagrams = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let sort1 = str1.split("").sort();
  let sort2 = str2.split("").sort();

  if (sort1.join("") === sort2.join("")) {
    console.log(
      `The words "${str1}" and "${str2}" are anagrams relative to one another.`
    );
    return true;
  }
};

console.log(anagrams("angel", "glean"));
