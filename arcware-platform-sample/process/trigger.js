const process = require("bpm/v4/process");
const scheduler = require("job/v4/scheduler");

let job = scheduler.getJob("/arcware-platform-sample/jobs/data-sync.job");
let entity = job.getParameter("Entity");
let property1 = job.getParameter("Property1");
let property2 = job.getParameter("Property2");
let property3 = job.getParameter("Property3");

process.start("data-sync", {
    entity: entity,
    property1: property1,
    property2: property2,
    property3: property3,
});