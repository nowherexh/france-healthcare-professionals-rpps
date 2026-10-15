// Run France Doctors & Health Professionals Database (RPPS) on Apify.
// npm install apify-client
// APIFY_TOKEN=your_token node run.mjs
import { ApifyClient } from "apify-client";

const input = {
  "professions": [
    "Pharmacien"
  ],
  "sectors": [
    "officine"
  ],
  "departments": [
    "33"
  ],
  "groupByProfessional": true
};

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const run = await client.actor("jet_mythology/france-healthcare-professionals").call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(`${items.length} items`);
console.log(JSON.stringify(items.slice(0, 3), null, 2));
