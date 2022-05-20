var httpClient = require("http/v4/client");
var process = require("bpm/v4/process");

let customers = getCustomers();
let execution = process.getExecutionContext();
process.setVariable(execution.getId(), "customers", JSON.stringify(customers));

function getCustomers() {
    let httpResponse = httpClient.get("https://services.odata.org/V4/Northwind/Northwind.svc/Customers");
    return JSON.parse(httpResponse.text).value;
}