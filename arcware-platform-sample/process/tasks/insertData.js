const process = require("bpm/v4/process");
const recordsDao = require("arcware-platform-sample/data/recordsDao");

let execution = process.getExecutionContext();
let property1 = process.getVariable(execution.getId(), "property1");
let property2 = process.getVariable(execution.getId(), "property2");
let property3 = process.getVariable(execution.getId(), "property3");

let record = getRecordFromContext();
recordsDao.insert({
    property1: record[property1] ? "" + record[property1] : null,
    property2: record[property2] ? "" + record[property2] : null,
    property3: record[property3] ? "" + record[property3] : null,
});

function getRecordFromContext() {
    let execution = process.getExecutionContext();
    let record = process.getVariable(execution.getId(), "selectedRecord");
    return JSON.parse(record);
}