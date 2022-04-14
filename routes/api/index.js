var express = require("express");
const items = require("../../src/items.js");
const tasks = require("../../src/tasks/create.js");

var router = express.Router();

/* 商品一覧を取得するルーティング */
router.get("/items", function (req, res, next) {
  const itemsList = items.getListItem();
  res.send(itemsList);
});

/*１件の商品情報を取得するルーティング */
router.get("/items/:id", function (req, res, next) {
  const item = items.getItem(req.params.id);
  res.send(item);
});

router.post("/tasks", function (req, res, next) {
  const postTasks = tasks.postTasks(req.body);
  res.send(postTasks);
});

module.exports = router;
