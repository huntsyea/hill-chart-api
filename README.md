# Hill Chart API

Originally created from: https://github.com/JoshAntBrown/hill-chart-api
Then forked from: https://github.com/nalmeida/hill-chart-api

## The Why
I love basecamp's hill chart for visualizing where work is at, discussing trade-offs and risks. I do not however fully embrace shape up for work and want to create something that will work with other frameworks. I currently app using an AWS cloud function tied to my [Notion board](https://spacecowboys.notion.site/Test-Work-6bb0fb2fa9124adfb4f4bf53a4a31f9b?pvs=4) that generates a hill chart on [hill-chart-api](https://hill-chart-api.vercel.app/api?s=Open%20Field%20Questions/100,Zillow%20Links/6,Results%20Page%203.0.1/80,Prompts/17) and updates the embedded view on my Notion. I really want to experiment with how the chart is rendered and thus have forked the above repos.

## Gameplan

- Deploy to firebase
- Make graph ui cleaner
- Migrate Notion <> Hill Chart AWS Lambda to Firebase Cloud Function
- Add cloud function invoke button to allow refreshing the chart when embed in Notion