// 1件のデータ削除処理
const mysql = require("mysql2/promise");
const config = require("../../config.js");

deletetask = async function (id) {
  let connection = null;
  try {
    connection = await mysql.createConnection(config.dbSetting);
    const sql = "DELETE from ` t_task` WHERE ` t_task`.id = ?;";
    let d = [id];

    const [rows, fields] = await connection.query(sql, d);
    console.log(rows);
    return rows;
  } catch (err) {
    console.log(err);
  } finally {
    connection.end();
  }
};
exports.deletetask = deletetask;
