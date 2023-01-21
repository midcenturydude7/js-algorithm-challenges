/*
***********************************************************************
PROMPT: Given a string possibly containing three types of braces 
        ({}, [], ()), write a function that returns a Boolean 
        indicating whether the given string contains a valid nesting 
        of braces.
***********************************************************************

========
APROACH:
======== 
What is our Input?
  String = one String

What is our Output?
  Boolean means either true or false. True if string has balanced brackets; false if it does not.

========== 
QUESTIONS
==========
Questions to ask the interviewer:

What do you mean by balanced brackets?
  A string is considered balanced if it has as many opening brackets of a given type as it has closing brackets of that same type. No bracket can be left unmatched. A closing bracket also cannot match a corresponding opening bracket that comes after it. Brackets also cannot overlap each other.

Will the string only have brackets in it?
  No. All chars can be used.


===== 
PLAN
=====
Because we are looking for nested balanced brackets, we are looking to use a data structure to store the open brackets we have seen so far.

As we come to a closing bracket, we need to look to see if the last bracket added to the data structure matches the opposite of the current bracket.

If your data structure is empty by the time we get to the end of the string, we have balanced brackets.
*/

const balanced = (str) => {
  const stack = [];
  let openers = ["{", "[", "("];
  let closers = ["}", "]", ")"];

  const dict = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (openers.includes(char)) {
      stack.push(char);
    } else if (closers.includes(char)) {
      if (!stack.length) {
        return false;
      } else if (dict[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(balanced("(hello there, my friend)"));
