// / 1. Write a program to display the message “Hello World” 5 times
// in your browser using for loop.


// / answer/
let username ="hello world"
let ul = document.querySelector('ul')

for(let i = 1; i <= 5; i++){
    ul.innerHTML += `<li>${"hello world"} ${i}</li>`
}
