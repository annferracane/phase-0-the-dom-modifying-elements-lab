// Write your code here!

// removes main#main
document.querySelector('main#main').remove();

// create h1 element and append to body
const newHeader = document.createElement("H1");
document.body.append(newHeader);