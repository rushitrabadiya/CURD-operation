const express = require("express");
const router = express.Router();
const listController = require("./../controller/listController");
// const tourController = require("./../controller/tourController");

router
  .route("/")
  .get(listController.getAllList)
  .post(listController.createList);

router
  .route("/:id")
  .get(listController.getList)
  .patch(listController.updateList)
  .delete(listController.deleteList);

module.exports = router;
