var httpClient = require("http/v4/client");
var process = require("bpm/v4/process");

let customers = getCustomers();
save(customers[parseInt("" + Math.random() * 1000 % customers.length) - 1]);
// let execution = process.getExecutionContext();
// process.setVariable(execution.getId(), "customers", JSON.stringify(customers));

function getCustomers() {
    let httpResponse = httpClient.get("https://services.odata.org/V4/Northwind/Northwind.svc/Customers");
    return JSON.parse(httpResponse.text).value;
}

function save(customer) {
    var dao = require("db/v4/dao");

    //create a DAO from configuration
    var customersDao = dao.create({
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

    customersDao.insert({
        companyName: customer.CompanyName,
        country: customer.Country,
        city: customer.City
    });

    console.log("Customers ...");
    console.log(customersDao.list());
}