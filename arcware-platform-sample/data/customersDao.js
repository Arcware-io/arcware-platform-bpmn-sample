const dao = require("db/v4/dao");
const customersDao = dao.create({
    table: "CUSTOMERS",
    properties: [{
        name: "id",
        column: "ID",
        type: "BIGINT",
        id: true
    }, {
        name: "companyName",
        column: "COMPANY_NAME",
        type: "VARCHAR"
    }, {
        name: "country",
        column: "COUNTRY",
        type: "VARCHAR"
    }, {
        name: "city",
        column: "CITY",
        type: "VARCHAR"
    }]
});

exports.insert = function (data) {
    customersDao.insert({
        companyName: data.CompanyName,
        country: data.Country,
        city: data.City
    });
};

exports.list = function () {
    return customersDao.list();
};