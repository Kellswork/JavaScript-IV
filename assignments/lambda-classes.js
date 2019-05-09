// CODE here for your Lambda Classes
class Person {
  constructor(personnel) {
    this.name = personnel.name;
    this.age = personnel.age;
    this.location = personnel.location;
    this.gender = personnel.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(personnel) {
    super(personnel);
    this.speciality = personnel.speciality;
    this.favLanguage = personnel.favLanguage;
    this.catchPhrase = personnel.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student) {
    return `${student.name} receives a perfect score on ${student.subject}`;
  }
}

class Student extends Person {
  constructor(student) {
    super(student);
    this.previousBackground = student.previousBackground;
    this.classname = student.classname;
    this.favSubjects = student.favSubjects;
  }
  listsSubjects() {
    let subjects = " ";
    this.favSubjects.forEach(subject => {
      console.log(subject);
    });
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

console.log(fred.name);
console.log(fred.favLanguage);
console.log(fred.demo("javascript"));
console.log(fred.speak());
console.log(
  fred.grade({
    name: "sandra",
    subject: "JavaScript"
  })
);

const kelechi = new Student({
  name: "kelechi",
  location: "lagos",
  age: 12,
  gender: "female",
  previousBackground: "seamstress",
  classname: "javascript fundamentals",
  favSubjects: ["html", "css", "javascript"]
});

console.log(kelechi.sprintChallenge('javascript-iv'))
kelechi.listsSubjects()