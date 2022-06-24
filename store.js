const data = [];

const getData = () => { return data; }

const addData = (d) => data.push(d);

module.exports = {
    getData,
    addData
}