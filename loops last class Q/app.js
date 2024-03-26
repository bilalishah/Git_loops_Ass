///20. Write a program to create the following patterns in your 
// browser. Take number of lines as an input.
// a. *****
// *****
// *****
// *****
// b. *
// **
// ***
// ****
// *****
// c. *****
// ****
// ***
// **


const numLines = parseInt(prompt("Enter the number of lines:"));

  document.write("<strong>Pattern 1:</strong><br>");
  for (let i = 1; i <= numLines; i++) {
    for (let j = 1; j <= i; j++) {
      document.write("*");
    }
    document.write("<br>");
  }
  document.write("<br>");


  document.write("<strong>Pattern 2:</strong><br>");
  for (let i = numLines; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      document.write("*");
    }
    document.write("<br>");
  }