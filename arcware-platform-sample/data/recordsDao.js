const dao = require("db/v4/dao");
const recordsDao = dao.create({
    table: "RECORDS",
    properties: [{
        name: "id",
        column: "ID",
        type: "BIGINT",
        id: true
    }, {
        name: "property1",
        column: "PROPERTY1",
        type: "VARCHAR"
    }, {
        name: "property2",
        column: "PROPERTY2",
        type: "VARCHAR"
    }, {
        name: "property3",
        column: "PROPERTY3",
        type: "VARCHAR"
    }]
});

exports.insert = function (data) {
    recordsDao.insert(data);
};

exports.list = function () {
    return recordsDao.list();
};