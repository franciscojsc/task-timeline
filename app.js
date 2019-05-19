'use strict'

let today  = new Date();
let formatDate = today.toLocaleString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;

console.log('Here\'s a hidden message');