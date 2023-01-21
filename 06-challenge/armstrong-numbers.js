/*
***********************************************************************
PROMPT: An Armstrong number is an n-digit number that is equal to the 
        sum of the nth powers of its digits. Determine if the input 
        number is an Armstrong number. Return either true or false.
***********************************************************************

========
APROACH:
======== 
What is our Input?
  Number = n-digit number

What is our Output?
  BoBoolean means either true or false. true if number is Armstrong Number; false if it is not.

========== 
QUESTIONS
==========
Questions to ask the interviewer:

May I have an example please?
  1**3 + 5**3 + 3**3 = 153


===== 
PLAN
=====
Remember that in JavaScript type coercion exists. When working with Numbers is JS, remember to check the typeof the number. 
If it is a string, you’ll need to plan for that. This is really important when working with math in JS.

============
EXPLANATION
============
To solve this problem, we change the number to a string, figure out the power by getting the length of the number, 
and then use a for loop to add up the individual numbers ^ length of the number passed in.

We then check to see if the sum is equal to the original number. If it is, it is an Armstrong number.
*/

function isArmstrongNumber(n) {
  let strN = n + "";
  let power = strN.length;
  let sum = 0;
  for (let i = 0; i < strN.length; i++) {
    sum += Math.pow(Number(strN[i]), power);
  }
  return sum === n;
}

console.log(isArmstrongNumber(9474));
