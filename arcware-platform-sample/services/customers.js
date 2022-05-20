const response = require("http/v4/response");
const customersDao = require("arcware-platform-sample/data/customersDao");

let customers = customersDao.list();

response.println(JSON.stringify(customers));
response.flush();
response.close();