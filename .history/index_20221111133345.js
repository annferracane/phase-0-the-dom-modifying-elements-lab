// Write your code here!

// removes main#main
document.querySelector('main#main').remove();

// create h1 element and append to body, modify id and textContent of element
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Ann is the champion"
document.body.append(newHeader);