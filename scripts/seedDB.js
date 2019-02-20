const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/studyBuddy");

const questionSeed = [
  {
    question:
      "JSON",
    answer: "JavaScript Object Notation",
    correct: false,
    active: true,
    createDate: new Date(Date.now())
  },
  {
    question: "A variable type included in ES6 that allows for the variable to be changed later in the program.",
    answer: "LET",
    correct: false,
    active: true,
    createDate: new Date(Date.now())
  },
  {
    question: "A process or set of rules to be followed in calculations or other problem solving operations, especially by a computer.",
    answer: "Algorithm",
    correct: false,
    active: true,
    createDate: new Date(Date.now())
  }
  ,
  {
    question: "A variable type included in ES6 that does not allow for the variable to be changed later in the program.",
    answer: "CONST",
    correct: false,
    active: true,
    createDate: new Date(Date.now())
  },
  {
    question: "ORM",
    answer: "Object Relational Mapper",
    correct: false,
    active: true,
    createDate: new Date(Date.now())
  }
];

const userSeed = [
  {
    userName: "Tim",
    password: "1234",
    firstName: "Tim",
    lastName: "Nagorski",
    saved: true,
    createDate: new Date(Date.now())
  },
  {
    userName: "Stella",
    password: "1234",
    firstName: "Stella",
    lastName: "Griffith",
    saved: true,
    createDate: new Date(Date.now())
  },
  {
    userName: "Zeke",
    password: "1234",
    firstName: "Zeke",
    lastName: "Graves",
    saved: true,
    createDate: new Date(Date.now())
  },
  {
    userName: "John",
    password: "1234",
    firstName: "John",
    lastName: "Peters",
    saved: true,
    createDate: new Date(Date.now())
  }
];

db.Questions.deleteMany({})
  .then(() => db.Questions.collection.insertMany(questionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.UserInfo.deleteMany({})
  .then(() => db.UserInfo.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
