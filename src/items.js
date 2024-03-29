const mysql = require("mysql2/promise");
const config = require("../config");
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
    //日付昇順にするためORDER BY
    const sql =
      " SELECT ` t_task`.id, ` t_task`.category_id, ` m_category`.category_name, ` t_task`.task_name, ` t_task`.deadline, ` t_task`.task_status, ` t_task`.updated_at, ` t_task`.created_at FROM ` t_task` LEFT JOIN ` m_category` ON ` t_task`.category_id = ` m_category`.category_id ORDER BY ` t_task`.deadline;";
    const [rows, fields] = await connection.query(sql);

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
//今日のみのタスクを表示させる実装
today = async function () {
  let connection = null;
  try {
    //データベースの接続をしている
    connection = await mysql.createConnection(config.dbSetting);
    //日付昇順にするためORDER BY
    const sql =
      " SELECT ` t_task`.id, ` t_task`.category_id, ` m_category`.category_name, ` t_task`.task_name, ` t_task`.deadline, ` t_task`.task_status, ` t_task`.updated_at, ` t_task`.created_at FROM ` t_task` LEFT JOIN ` m_category` ON ` t_task`.category_id = ` m_category`.category_id WHERE ` t_task`.deadline = CURDATE() ORDER BY ` t_task`.deadline;";
    const [rows, fields] = await connection.query(sql);
    return rows;
  } catch (eer) {
    console.log(eer);
  } finally {
    connection.end();
  }
};

exports.getListItem = getListItem;
exports.today = today;
