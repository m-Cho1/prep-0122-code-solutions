var person = {
  firstName: "James",
  lastName: "Parker",
  hobby: "Coding"
};
console.log(person);
var fullName = person.firstName + " " + person.lastName;
console.log('The person\'s name is:', fullName );
person.job = 'Web Developer';
person.previousjob = 'Student';
console.log('The person\'s current job is:', person.job);
console.log('The person\'s previous job is:', person.previousjob);
console.log(person);
