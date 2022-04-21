var express = require("express");
const items = require("../../src/items");
const tasks = require("../../src/tasks/create.js");
const get = require("../../src/tasks/get.js");
const update = require("../../src/tasks/update.js");
const deletetask = require("../../src/tasks/delete");
var router = express.Router();

/* 商品一覧を取得するルーティング */
router.get("/items", async function (req, res, next) {
  const itemsList = await items.getListItem();
  res.send(itemsList);
});

/*１件の商品情報を取得するルーティング */
router.get("/get/:id", async function (req, res, next) {
  const item = await get.getItem(req.params.id);
  res.send(item);
});
//``新規登録取得のルーティング
router.post("/tasks", function (req, res, next) {
  const postTasks = tasks.postTasks(req.body);
  res.send(postTasks);
});
//更新のルーティング
router.patch("/update/:id", async function (req, res, next) {
  const patchid = await update.patchid(req.params.id, req.body);
  res.send(patchid);
});
//削除のルーティング
router.delete("/delete/:id", async function (req, res, next) {
  const deletetaskid = await deletetask.deletetask(req.params.id);
  res.send(deletetaskid);
});
module.exports = router;
