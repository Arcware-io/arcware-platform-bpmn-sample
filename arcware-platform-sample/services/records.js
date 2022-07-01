const response = require("http/v4/response");
const recordsDao = require("arcware-platform-sample/data/recordsDao");

let records = recordsDao.list();

response.println(JSON.stringify(records));
response.flush();
response.close();