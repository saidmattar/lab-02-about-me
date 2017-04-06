'use strict';
var name = prompt('IS your name Adam? Yes/No.');
console.log('IS your name Adam? Yes/No.');
if(name.trim().toLowerCase() == 'yes') {
  alert('Hello Adam.');
} else {
  alert('OOh sorry about that!');
}
var food = prompt('Do you think i like sushi? Yes/No');
console.log('Do you think i like sushi? Yes/No');
if ( food.trim().toLowerCase()  == 'yes') {
  alert('You were correct');
} else {
  console.log('You missed it this time!');
  alert('You missed it this time!');
}
var age = prompt('Are you older than 30 years old? yes/no');
console.log('Are you older than 30 years old? yes/no');
if(age.trim().toLowerCase() == 'yes'){
  alert('Welcome to the party');
} else {
  console.log('MMMM TOOO YOUNG !');
  alert('MMMM TOOO YOUNG !');
}
var coding = prompt('Do you like Codiny? Yes/No');
console.log('Do you like coding? Yes/No');
if(coding.trim().toLowerCase() == 'yes'){
  alert('Good for you!');
} else {
  alert('Still Good for you!!');
}
var workDone = prompt('Are you almost done with your assignment? Yes/No.');
console.log('Are you almost done with your assignment? yes/no.');
if(workDone.trim().toLowerCase() == 'yes'){
  alert('Maaan I am not even close');
} else {
  alert('Just like me.');
var myFaveNum = 20;
for (var i = 0; i < 4; i++) {
  var  guessMyFaveNum = parseInt(prompt('Can you guess What is my favorite number?'));
  if (guessMyFaveNum === myFaveNum && i === 0) {
    console.log('Great First time go! ');
    alert('Great First time go! ');
    i = 4;
  } else if (guessMyFaveNum != myFaveNum) {
    console.log('Okay, you have: ' + (3-i) + ' triies left.');
    alert('Okay, you have: ' + (3-i) + ' triies left.');
  } else {
    console.log('You got it.');
    alert('You got it.');
    i = 4;
  }
}
}
var statesIlivedIn = ['New York','Florida', 'California', 'Texas'];
var trueGuess = false;
for (var numOfTries = 0; numOfTries < 3; numOfTries++) {
  console.log('outer for loop', numOfTries);
  var userGuess = prompt(' Can you guess a one State i lived in beside Whashington?!');

  for (var i = 0; i < statesIlivedIn.length; i++) {
     if (userGuess === statesIlivedIn[i]) {
     console.log('if');
     alert('Great gguess I have lived in ' + statesIlivedIn );
     i = statesIlivedIn.length;
     trueGuess = true;
     numOfTries = 3;
  }
}
  if(trueGuess == false) {

   alert('Wrong Guess');
 }
}
