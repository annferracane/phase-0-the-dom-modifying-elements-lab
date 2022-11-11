// Write your code here!

// removes main#main
document.querySelector('main#main').remove();

// create h1 element and append to body
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Ann is the champion"
document.body.append(newHeader);