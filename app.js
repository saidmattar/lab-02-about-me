'use strict';
var name = prompt('IS your name Adam? Y?N.');
console.log('IS your name Adam? Y/N.');
if(name.trim().toLowerCase() == 'yes'){
  alert('Hello Adam.');
} else {
  alert('OOh sorry about that!');
}
var food = prompt('do you think i like sushi?');
console.log('Do you think i like sushi?');
if ( food.trim().toLowerCase()  == 'yes') {
  alert('you were correct');
} else {
  alert('you missed it this time!');
}
var age = prompt('Are you older than 30 years old? yes/no');
console.log('Are you older than 30 years old? yes/no');
if(age.trim().toLowerCase() == 'yes'){
  alert('Welcome to the party');
} else {
  alert('MMMM TOOO YOUNG !');
}
var coding = prompt('Do you like Codiny? yes/no');
console.log('Do you like coding? yes/no');
if(coding.trim().toLowerCase() == 'yes'){
  alert('Good for you!');
} else {
  alert('Still Good for you!!');
}
var workDone = prompt('Are you almost done with your assignment? yes/no.');
console.log('Are you almost done with your assignment? yes/no.');
if(workDone.trim().toLowerCase() == 'yes'){
  alert('Maaan I am not even close');
} else {
  alert('Just like me.');
}
