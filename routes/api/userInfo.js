const router = require("express").Router();
const userInfoController = require("../../controllers/userInfoController");

// Matches with "/api/userInfo"
router.route("/")
  .get(userInfoController.findAll)
  .post(userInfoController.create);

// Matches with "/api/userInfo/:id"
router
  .route("/:id")
  .get(userInfoController.findById)
  .put(userInfoController.update)
  .delete(userInfoController.remove);

module.exports = router;
