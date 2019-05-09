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
  demo() {
    return `Today we are learning about ${this.subject}`;
  }
  grade() {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}
