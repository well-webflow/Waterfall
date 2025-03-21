# New Webflow App

Webflow App using the [Designer API](https://docs.developers.webflow.com/reference/designer-api-reference).

Built using Vite + React + TailwindCSS

## Local Development

1. [Create & install an App within Webflow](https://docs.developers.webflow.com/docs/register-an-app)
2. Install npm dependencies via `npm install`
3. Install the webflow-cli: `npm i @webflow/webflow-cli -g`
4. Run `npm run dev`. It'll output a localhost url in the terminal.
5. Open up the Webflow Designer, open up the Apps panel, and click your App your created in step 1
6. Enter in the url from step 4 into the Development URL field and click "Launch development App"

## Bundling the App

1. Follow the above steps 1-3
2. Run `npm run build` which outputs a `bundle.zip` file.
3. Upload this zip file in the Webflow dashboard
4. Open the App in the Designer via the "Launch App" button
