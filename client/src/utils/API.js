import axios from "axios";


export default {

  // Gets all users from Database
  getUsers: function() {
    return axios.get("/api/userInfo");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/userInfo/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/userInfo/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/userInfo", userData);
  },

  updateUserQuestion: function(id, userData) {
    console.log(id, userData);
    return axios.put("/api/userInfo/" + id, userData);
  },

  // Gets all questions from Database
  getQuestions: function() {
    return axios.get("/api/questions");
  },

  // Gets the Question with the given id
  getQuestion: function(id) {
    return axios.get("/api/questions/" + id);
  },
  // Deletes the Question with the given id
  deleteQuestion: function(id) {
    return axios.delete("/api/questions/" + id);
  },
  // Saves a Question to the database
  saveQuestion: function(questionData) {
    return axios.post("/api/questions", questionData);
  }
}
