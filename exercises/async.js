console.log("Start");

setTimeout(() => console.log("Timeout"), 0);
setImmediate(() => console.log("Immediate")); //deprecated
process.nextTick(() => console.log("NextTick"));

console.log("End");
//start
//end
//nextTick
//timeout
//immediate
