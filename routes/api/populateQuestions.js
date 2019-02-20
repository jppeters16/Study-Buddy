const router = require("express").Router();
const populateQuestions = require("../../controllers/populateController");

// Matches with "/api/questions"
router.route("/")
  .get(populateQuestions.findAll)
  .post(populateQuestions.create);


module.exports = router;
