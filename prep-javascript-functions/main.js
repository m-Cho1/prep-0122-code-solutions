function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function addTwoNumbers (num1, num2) {
  return num1 + num2;
}
console.log('addTwoNumbers Exercise:', addTwoNumbers(2,2));

function convertHoursToMinutes (hours) {
  return hours * 60;
}
console.log('converHoursToMinutes Exercise:', convertHoursToMinutes (2));

function getGreeting (name) {
  return name +' '+ 'World!';
}
console.log('getGreeting Exercise:', getGreeting('Hello'));

function addAndMultiplyBy5 (num1, num2) {
  return (num1 + num2)*5;
}
console.log('addAndMultiplyBy5 Exercise:', addAndMultiplyBy5(10,5));

function multiplyAndDivideBy5 (num1, num2) {
  return (num1 *num2)/5;
}
console.log('multiplyAndDvideBy5 Exercise:', multiplyAndDivideBy5(35,10));

function subtractTwoNumbers (num1, num2) {
  return (num1 - num2);
}
console.log('subtractTwoNumbers Exercise:', subtractTwoNumbers(22,7));

function getCircleCircumference (radius) {
  return 2*(Math.PI)*radius;
}
console.log('getCircleCircumference Exercise:', getCircleCircumference(5));

function getFullName (firstName, lastName) {
  return firstName + ' '+ lastName;
}
console.log('getFullName Exercise:', getFullName('Juan', 'Ramirez'));

function cube (number) {
  return (number*number*number);
}
console.log('cube Exercise:', cube(5));
