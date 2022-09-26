## Test project for the Telnyx website

For start you need to follow next steps:

1. Download or fork this repo
2. Run `npm install`
3. Run `npm run wdio`

#### Content

The project has test cases for SIP Trunking product page and Number Lookup product page

#### Available scripts

For run on special browsers:

    npm run wdio:chrome
    npm run wdio:firefox

For run different suites:

    npm run wdio:number:lookup:product:page
    npm run wdio:sip:trunking:product:page

For run without any additional drivers:

    npm run wdio:selenium:standalone

For run in headless mode:

    npm run wdio:headless