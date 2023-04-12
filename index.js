// Conditional statements using objects
const person = {
  name: "John",
  age: 16,
  eyeColor: "Blue",
  gender: "Male",
};

if (person.age < 5) {
  console.log(`${person.name} is a baby`);
} else if (person.age >= 5 && person.age < 18) {
  console.log(`${person.name} is a minor`);
} else {
  console.log(`${person.name} is a senior major`);
}

// Some basic array methods
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNum = numbers.pop();

console.log(numbers);

// A little complex use case of the filter method
const boxes = [
  {
    color: "green",
    name: "box 1",
  },
  {
    color: "red",
    name: "box 2",
  },
  {
    color: "blue",
    name: "box 3",
  },
];

const removeBox = (index) => {
  return boxes.filter((b, i) => i !== index);
};

console.log(removeBox(1));

// A word breaking function
// Breaks any word that's more than the number of characters specified in the length argument
// to a short sentence and adds "..." to the end of the break
// For example lets take the word "Shola is a boy who loves playing football and basketball"
// Let's say the length we specify is 15 chracters, then the word will become
// "Shola is a boy ...". Note that a space counts as 1 chracter
const w =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi molestias ducimus officia, facere dolorem culpa, possimus praesentium saepe iure earum soluta porro ea, quis placeat magnam animi ad dicta assumenda!";

const wordBreak = (word, length) => {
  if (word.length < length) return word;
  if (word.length > length) {
    const wordSplit = word.split("");
    console.log(wordSplit);
    const wordSlice = wordSplit.slice(0, length);
    return `${wordSlice.join("")}...`;
  }
};

console.log(wordBreak(w, 20));

// Object Oriented Programming
// Also covers inheritance
// In this example below, the John class inherits from the Person class
// So we can say that every human being have similar characteristics like
// Every human has a name, age, skin color, gender etc and this is what the Person class is i.e Parent class.
// John is a person and he will necessarily have all the features of a person
// only that some things about him may be different from another person, let's say Jane.
// That's where the children class which in our example is the John class which inherits everything from the Person class
// and then we can use this to describe the peculiar features of John.
// This is just a basic idea of how classes work.
class Person {
  constructor(name, age, skinColor, gender) {
    this.name = name;
    this.age = age;
    this.skinColor = skinColor;
    this.gender = gender;
  }

  intro = () => {
    return `Hi, I am ${this.name}, I am a ${this.gender}. My skin color is ${this.skinColor} and I am ${this.age} years old`;
  };
}

class John extends Person {
  constructor(name, age, skinColor, gender, temprament, hobby) {
    super(name, age, skinColor, gender);
    this.temprament = temprament;
    this.hobby = hobby;
  }

  desc = () => {
    return `This is ${this.name} and he loves ${this.hobby}`;
  };
}

const john = new John(
  "John",
  20,
  "Black",
  "Male",
  "Sanguine",
  "playing football"
);

console.log(john.intro());

class School {
  constructor(
    name = "Unilag",
    vc = "Dolu",
    lecturer = 50,
    student = 1500,
    classes = 65
  ) {
    this.name = name;
    this.vc = vc;
    this.lecturer = lecturer;
    this.student = student;
    this.classes = classes;
  }
  sch = () => {
    return `My school name is ${this.name}, the name of my VC is ${this.vc}, we have ${this.lecturer} lecturers, there are ${this.student} students, and ${this.classes} classes in my school.`;
  };
}

class Student extends School {
  constructor(name, vc, lecturer, student, classes, studentName, level) {
    super(name, vc, lecturer, student, classes);
    this.studentName = studentName;
    this.level = level;
  }
  per = () => {
    return `My name is ${this.studentName}, and I am in ${this.level} level.`;
  };
}

const per = new Student("unilag", "Nora", 20, 400, 110, "Stephnora", 200);

console.log(per.per());
