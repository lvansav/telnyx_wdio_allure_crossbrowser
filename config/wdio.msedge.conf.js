const { config } = require('./wdio.conf')
const path = require('path')

const edgeConfig = {
    ...config,
    services: ["edgedriver"],
    capabilities:[{
        maxInstances: 1,
        browserName: "MicrosoftEdge"
    }]
};

exports.config = edgeConfig