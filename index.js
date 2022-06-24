const express = require("express");
const ondc = require("ondc-node");
const store = require("./store");
const searchAnalyticsHandler = require("./handler");

const app = express();

app.use(express.json());

app.use(ondc.Middleware({ search: searchAnalyticsHandler }));

app.get("/analytics", async (req, res) => {
    try {
        res.status(200).json({
            data: store.getData()
        });
    } catch (ex) {
        res.status(400).json(ex);
    }
});

app.listen(4554);