// 一覧取得の処理
const mysql = require("mysql2/promise");
const config = require("../../config.js");

itemList = async function () {
  let connection = null;
  try {
    //データベースの接続をしている
    connection = await mysql.createConnection(config.dbSetting);
    //sqlをここに書く
    const sql = "select * from `t_task`";
    const [rows, fields] = await connection.query(sql);
    return rows;
  } catch {
    console.log(eer);
  } finally {
    connection.end();
  }
};
exports.itemList = itemList;
