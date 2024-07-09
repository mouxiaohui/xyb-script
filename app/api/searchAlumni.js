const { post } = require("../request");

/**
* @function 根据名字查询校友
* @param name {string} 姓名
* @param type {number} 查找范围 0:全校 1:同专业 2:同一届
* @return TODO
*/
const searchAlumniByName = (name, type) => {
  return post("client/alumni/LoadAlumniPage.action", {
    page: 1,
    pageSize: 80,
    type
  });
};

module.exports = { searchAlumniByName };
