var express = require("express");
const items = require("../../src/items");
const tasks = require("../../src/tasks/create.js");
const get = require("../../src/tasks/get.js");
var router = express.Router();

/* 商品一覧を取得するルーティング */
router.get("/items", async function (req, res, next) {
  const itemsList = await items.getListItem();
  res.send(itemsList);
});

/*１件の商品情報を取得するルーティング */
router.get("/items/:id", function (req, res, next) {
  const item = get.getItem(req.params.id);
  res.send(item);
});
//``新規登録取得のルーティング
router.post("/tasks", function (req, res, next) {
  const postTasks = tasks.postTasks(req.body);
  res.send(postTasks);
});

module.exports = router;
