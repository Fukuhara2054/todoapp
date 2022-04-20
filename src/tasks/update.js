// 更新処理
const mysql = require("mysql2/promise");
const config = require("../../config.js");

patchid = async function (id, body) {
  let connection = null;
  try {
    connection = await mysql.createConnection(config.dbSetting);

    const sql =
      "UPDATE ` t_task` SET ` t_task`.task_name=?, ` t_task`.deadline=?, ` t_task`.category_id=?, ` t_task`.task_status=?, ` t_task`.updated_at=? WHERE ` t_task`.id=?;";
    let d = [
      body.task_name,
      body.deadline,
      body.category,
      body.stutas,
      new Date(),
      id,
    ];
    const [rows, fields] = await connection.query(sql, d);
    console.log(rows);
    return rows;
  } catch (err) {
    console.log(err);
  } finally {
    connection.end();
  }
};
exports.patchid = patchid;
