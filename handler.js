const store = require("./store");

module.exports = async (req, res) => {
    console.log(req.body.message.intent);
    store.addData(req.body.message.intent);
    res.status(200).send({});
}