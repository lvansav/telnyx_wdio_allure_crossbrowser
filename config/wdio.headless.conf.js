const { config } = require('./wdio.conf')

const headless = {
    ...config,
    services: [
        'chromedriver',
        'geckodriver',
        'edgedriver'
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args:[
                '--no-sandbox',
                '--disable-infobars',
                '--headless',
                '--disable-gpu'
            ]
        }
    },
    {
        browserName: 'firefox',
        maxInstances: 1,
        'moz:firefoxOptions': {
            args:[
                "-headless"
            ]
        }

    },
    {
        browserName:'MicrosoftEdge',
        maxInstances: 1,
        "ms:edgeOptions": {
            args:[
                "headless"
            ]
        }
    }]
}

exports.config = headless