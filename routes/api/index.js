const router = require("express").Router();
const userInfoRoutes = require("./userInfo");
const questionsRoutes = require("./questions");

// userInfo routes
router.use("/userInfo", userInfoRoutes);


// questions routes
router.use("/questions", questionsRoutes);

module.exports = router;
