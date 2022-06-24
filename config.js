const dotenv = require("dotenv");
const parsed = dotenv().parsed;

const validStoreTypes = ["inmem", "redis"];

module.exports = {
    storeType: parsed["STPRE_TYPE"] ? validStoreTypes.includes(parsed["STPRE_TYPE"]) ? parsed["STPRE_TYPE"] : "inmem" : "inmem"
};