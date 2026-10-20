# maNOWj Resource Hub

A standalone, free-to-host resource directory built with React, TypeScript and Vite. It is separate from the existing maNOWj GeoIntel GIS application.

## Run locally

1. Install Node.js LTS from https://nodejs.org/
2. Extract this folder.
3. Open a terminal in the project folder.
4. Run `npm install`
5. Run `npm run dev`
6. Open the local URL printed by Vite.

## Deploy free on Vercel

1. Create a new GitHub repository named `manowj-resource-hub`.
2. Upload the contents of this project folder to that new repository. Do not upload the ZIP file itself as the only repository file.
3. Open https://vercel.com/ and sign in with GitHub.
4. Select **Add New → Project**, then import `manowj-resource-hub`.
5. Keep the default Vite settings and click **Deploy**.
6. Vercel will provide a free address ending in `.vercel.app`. Choose a project name such as `manowj-resources` if available.

No Google Apps Script, API keys, database, or paid service is needed for this version.

## Update resources

Edit `src/resources.ts`. Add an item with a unique `id`, category, name, description and real URL. Commit and push changes to GitHub to trigger a redeploy.
