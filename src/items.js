const mysql = require("mysql2/promise");
const config = require("../config.js");
/**
 * getList
 * 商品一覧を返却する処理
 *
 * @returns レスポンス JSON
 */

getListItem = async function () {
  let connection = null;
  try {
    //データベースの接続をしている
    connection = await mysql.createConnection(config.dbSetting);
    //sqlをここに書く
    const sql = "SELECT * FROM ` t_task`";
    const [rows, fields] = await connection.query(sql);
    console.log(fields);
    return rows;
  } catch (eer) {
    console.log(eer);
  } finally {
    connection.end();
  }
};

/**
 * getItem
 * 商品情報を１件返却する処理
 *
 * @returns レスポンス JSON
 */
getItem = function (id) {
  return id + "の商品情報です。";
};

exports.getListItem = getListItem;
exports.getItem = getItem;
