// Changing the text of an element
document.querySelector('h1').textContent = 'Interactive Web Page';

// Adding or removing a CSS class
document.querySelector('.flex-section').classList.add('highlight');

// Creating a new element and adding it to the page
const newElement = document.createElement('p');
newElement.textContent = 'New element added dynamically with javascript !';
document.body.appendChild(newElement);
