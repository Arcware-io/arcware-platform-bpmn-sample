var httpClient = require("http/v4/client");
var process = require("bpm/v4/process");

let execution = process.getExecutionContext();
let entity = process.getVariable(execution.getId(), "entity");

let data = getData(entity);

process.setVariable(execution.getId(), "data", JSON.stringify(data));

function getData(entityName) {
    let httpResponse = httpClient.get(`https://services.odata.org/V4/Northwind/Northwind.svc/${entityName}`);
    return JSON.parse(httpResponse.text).value;
}