const httpClient = require("http/v4/client");
const process = require("bpm/v4/process");

let data = getDataFromContext();
let record = selectRandomRecord(data);
let execution = process.getExecutionContext();
process.setVariable(execution.getId(), "selectedRecord", JSON.stringify(record));

function getDataFromContext() {
    let execution = process.getExecutionContext();
    let data = process.getVariable(execution.getId(), "data");
    return JSON.parse(data);
}

function selectRandomRecord(data) {
    let randomIndex = parseInt("" + Math.random() * 1000 % data.length);
    return data[randomIndex];
}