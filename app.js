// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
var Kalvian_1 = 'Jawahar';
// 1.2 Print `"The driver's name is XXXX"`.
console.log("The driver's name is", Kalvian_1);
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
var Kalvian_2 = 'LEE';
// 1.4 Print `"The navigator's name is YYYY"`.
console.log("The navigator's name is", Kalvian_2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if (Kalvian_1.length > Kalvian_2.length) {
  console.log(
    'The driver has the longest name, it has',
    Kalvian_1.length,
    'characters!'
  );
} else if (Kalvian_2.length > Kalvian_1.length) {
  console.log(
    'It seems that the navigator has the longest name, it has',
    Kalvian_2.length,
    'characters!'
  );
} else {
  console.log(
    'Wow, you both have equally long names,',
    Kalvian_1.length,
    'characters!'
  );
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5.
var name1 = 'Jawahar Lee';
const vowels = ['a', 'e', 'i', 'o', 'u'];
var output = '';
output += name1 + ' ';
for (let i = 0; i <= name1.length; i += 1) {
  let letter = name1[i];
  if (vowels.includes(letter)) {
    output += letter + ' ';
  }
}
for (let i = 0; i <= name1.length; i += 1) {
  let letter = name1[i];
  if (vowels.includes(letter)) {
    output += i + ' ';
  }
}
console.log(output);

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
let uppercase = 0;
let lowercase = 0;

const sampleText = 'Kalvium is the best place to learn Tech';
for (let index = 0; index < sampleText.length; index++) {
  if (sampleText[index] == sampleText[index].toUpperCase()) {
    uppercase++;
  } else {
    lowercase++;
  }
}
console.log(`Uppercase: ${uppercase}, Lowercase: ${lowercase}`);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
var driver = '';
for (let i = 0; i < Kalvian_1.length; i += 1) {
  driver += Kalvian_1[i].toUpperCase() + ' ';
}
console.log(driver);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
var nav = '';
for (let i = Kalvian_2.length - 1; i >= 0; i -= 1) {
  nav += Kalvian_2[i] + ' ';
}
console.log(nav);

// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
console.log(Kalvian_1 + ' ' + Kalvian_2);
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"
console.log(Kalvian_2 + ' ' + Kalvian_1);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

let lexicographicOrderList = [Kalvian_1, Kalvian_2];
lexicographicOrderList.sort();
if (lexicographicOrderList[0] == Kalvian_1) {
  console.log(`The driver's name goes first.`);
} else if (lexicographicOrderList[0] == Kalvian_2) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
const sample =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet vitae neque non iaculis. Maecenas mollis mollis vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur tincidunt, purus ac placerat iaculis, ligula velit scelerisque mauris, eu ullamcorper tortor orci vel dui. Sed id risus et ligula dictum feugiat. Sed non erat eros. Mauris et dapibus purus, ac tincidunt mi. Suspendisse fringilla nisl non sem laoreet, sit amet vehicula lectus sagittis. Donec vestibulum suscipit sapien, id maximus urna suscipit eu. Phasellus cursus ante nec enim cursus efficitur. Mauris nunc tortor, gravida iaculis semper sed, viverra aliquam felis. Mauris id lectus sit amet massa pulvinar convallis in ut turpis.                                                                                                                                                                                                               Nullam eget fermentum massa. Nullam rutrum mi ante, at lacinia elit mattis sit amet. Quisque sit amet tempus urna. Ut pellentesque justo et enim tempus tincidunt. Quisque imperdiet risus sem, a efficitur enim luctus vel. Cras egestas tellus mi, ut ultrices sapien venenatis vel. Vivamus sagittis mauris in dignissim volutpat.                                                                                                                                                                                                             Vestibulum non viverra orci. Donec sit amet elit ipsum. Aenean lobortis augue scelerisque tortor elementum, sit amet venenatis ante venenatis. Donec consequat nulla erat, at suscipit risus viverra quis. Praesent euismod malesuada nunc ut sollicitudin. Vestibulum posuere dui et nunc finibus, sit amet auctor mi mollis. Curabitur odio enim, pretium vitae elementum ut, bibendum eget nibh.';
var arr = sample.split(' ');
var count = 0;
var etCount = 0;
for (let i = 0; i < sample.length; i++) {
  count += 1;
  if (arr[i] == 'et') {
    etCount += 1;
  }
}
console.log(count);
console.log(etCount);

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

var phraseToCheck = 'Was it a car or a cat I saw'; // Enter your sentence here
var noReverse = '';
var reverse = '';
for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i] != ' ') {
    noReverse += phraseToCheck[i].toUpperCase();
  } else {
    continue;
  }
}
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  if (phraseToCheck[i] != ' ') {
    reverse += phraseToCheck[i].toUpperCase();
  } else {
    continue;
  }
}
console.log(noReverse, '-', reverse);
if (reverse == noReverse) {
  console.log('It is a palindrome');
} else {
  console.log("No it's not a palindrome");
}

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'
