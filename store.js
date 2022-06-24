const data = [];
const processedData = {
    item: {},
    category: {},
    provider: {}
};

const getData = () => { return processedData; }

const addData = (d) => data.push(d);

const sleep = async (time) => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve() }, time)
    })
}

(async () => {
    do {
        if (data.length > 0) {
            const search = data.pop();
            if (search.item) {
                updateStat(search, "item");
            } else if (search.category) {
                updateStat(search, "category");
            } else if (search.provider) {
                updateStat(search, "provider");
            }
        } else {
            await sleep(2000);
        }
    } while (true);

    function updateStat(search, type) {
        let name = search[type].descriptor.name;
        if(processedData[type][name]) {
            processedData[type][name] = processedData[type][name] + 1;
        } else {
            processedData[type][name] = 1;
        }
    }
})();

module.exports = {
    getData,
    addData
}