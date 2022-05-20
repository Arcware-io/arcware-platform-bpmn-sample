const httpClient = require("http/v4/client");
const process = require("bpm/v4/process");

let customers = getCustomersFromContext();
let customer = selectRandomCustomer(customers);
let execution = process.getExecutionContext();
process.setVariable(execution.getId(), "selectedCustomer", JSON.stringify(customer));

function getCustomersFromContext() {
    let execution = process.getExecutionContext();
    let customers = process.getVariable(execution.getId(), "customers");
    return JSON.parse(customers);
}

function selectRandomCustomer(data) {
    let randomIndex = parseInt("" + Math.random() * 1000 % data.length);
    return data[randomIndex];
}