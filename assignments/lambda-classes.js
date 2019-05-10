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

class ProjectManager extends Instructor {
  constructor(personnel) {
    super(personnel);
    this.gradClassName = personnel.gradClassName;
    this.favInstructor = personnel.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
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

const kelechi = new Student({
  name: "kelechi",
  location: "lagos",
  age: 12,
  gender: "female",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `stay awesome`,
  previousBackground: "seamstress",
  classname: "javascript fundamentals",
  favSubjects: ["html", "css", "javascript"]
});

const kevin = new ProjectManager ({
    name: "kevin",
    location: "london",
    age: 29,
    gender: "male",
    gradClassName: 'webu2u',
    favInstructor: 'gabriel'
})


