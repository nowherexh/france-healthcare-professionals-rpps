# France Doctors & Health Professionals Database (RPPS)

**Build a clean list of French doctors, pharmacists or nurses in any area — from the State's own register, not from scraped booking sites.** Filter by profession, specialty and département, or get the new installations every week.

> 🇫🇷 Annuaire officiel des professionnels de santé (RPPS / Annuaire Santé) : médecins, pharmaciens, infirmiers… Les exemples ci-dessous sont en anglais ; les données restent en français.

**[▶ Run it on Apify](https://apify.com/jet_mythology/france-healthcare-professionals)** — no installation, no scraping, official data only.

## Use it without code

1. Open the [Actor page](https://apify.com/jet_mythology/france-healthcare-professionals) and click **Try for free**.
2. Paste one of the inputs below (or use the form).
3. Click **Start**, then **Export** the results as **Excel, CSV or JSON**, or send them to Google Sheets, Make, Zapier or n8n.

Schedule it (daily or weekly) to get only what changed since the last run.

## Sample output

```json
{
  "rpps": "10000000000",
  "profession": "Pharmacien",
  "specialty": null,
  "exerciseMode": "Libéral",
  "sector": "Officine",
  "lastName": "EXEMPLE",
  "firstName": "Claire",
  "workplace": {
    "name": "PHARMACIE DE LA GARE",
    "siret": "00000000000000",
    "address": {
      "postalCode": "33000",
      "city": "BORDEAUX",
      "department": "33"
    }
  }
}
```

*Illustrative example: identity and identifiers are masked.* Full field list below.

## Use it from code

Get your API token in [Apify Console → Settings → API & Integrations](https://console.apify.com/settings/integrations).

**Python** (`pip install apify-client`) — see [`examples/run.py`](examples/run.py)

```python
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")
run = client.actor("jet_mythology/france-healthcare-professionals").call(run_input={"professions": ["Pharmacien"], "sectors": ["officine"], "departments": ["33"], "groupByProfessional": true})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
```

**JavaScript** (`npm install apify-client`) — see [`examples/run.mjs`](examples/run.mjs)

```js
import { ApifyClient } from "apify-client";

const client = new ApifyClient({ token: "YOUR_APIFY_TOKEN" });
const run = await client.actor("jet_mythology/france-healthcare-professionals").call({"professions": ["Pharmacien"], "sectors": ["officine"], "departments": ["33"], "groupByProfessional": true});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
```

**curl** — one call, results returned directly — see [`examples/run.sh`](examples/run.sh)

```bash
curl -X POST "https://api.apify.com/v2/acts/jet_mythology~france-healthcare-professionals/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"professions": ["Pharmacien"], "sectors": ["officine"], "departments": ["33"], "groupByProfessional": true}'
```

## Example inputs

**Community pharmacists in Gironde**
```json
{"professions": ["Pharmacien"], "sectors": ["officine"], "departments": ["33"], "groupByProfessional": true}
```

**Private-practice cardiologists in Paris with a published phone**
```json
{"professions": ["Médecin"], "specialties": ["Cardiologie"], "exerciseModes": ["Libéral"], "postalCodes": ["750"], "withPhoneOnly": true}
```

**Weekly feed of newly registered physiotherapists in Nouvelle-Aquitaine**
```json
{"professions": ["Kinésithérapeute"], "departments": ["16", "17", "19", "23", "24", "33", "40", "47", "64", "79", "86", "87"], "monitorNew": true, "monitorKey": "kine-na", "monitorFirstRun": "baselineOnly"}
```

## Who uses it

- **Medical and pharma sales teams, labs and wholesalers**: target professionals by profession, specialty and area.
- **Healthtech and software vendors** (practice management, pharmacy software, telehealth): size a market and build prospect lists.
- **Insurers, recruiters and researchers**: verify a professional's registration, study medical density by area.
- **Monitoring**: get the new installations in your area every week.

## What you get

| Field | Description |
|---|---|
| `rpps`, `idType`, `ppId` | National identifier (RPPS or ADELI) |
| `title`, `civility`, `lastName`, `firstName` | Identity as practised |
| `profession`, `category`, `specialty`, `specialtyType` | Profession and specialty (savoir-faire) |
| `exerciseMode`, `sector`, `role`, `activityGenre` | Libéral / salarié, type of workplace, function |
| `workplace` | Name, brand, SIRET, SIREN, FINESS, structured address, département, phone, fax, e-mail |
| `pharmacistSection`, `registrationAuthority` | Pharmacists' section, registering authority |

By default one item per (professional, workplace, specialty), as in the official file. Turn on `groupByProfessional` to get one item per professional with the list of workplaces.

## Pricing

Pay per result on Apify: you only pay for the items returned, nothing for what is filtered out. In monitor mode you only pay for new or changed items. Current prices are on the [Actor page](https://apify.com/jet_mythology/france-healthcare-professionals).

## Good to know

- The official file has about 2 million rows (one per professional and workplace); each run reads it in streaming, which takes a few minutes. Use filters: runs stop early once `maxResults` is reached.
- Phones and e-mails are those of the workplace, and only when the professional's organisation published them.
- **GDPR**: this is personal data published by the State for public information. If you use it for prospecting, you are the data controller: respect the GDPR (legitimate interest, information and opt-out for B2B outreach) and the professional ethics rules of health professions.

## Source and licence

Annuaire Santé — extractions en libre accès (RPPS), Agence du Numérique en Santé, published on data.gouv.fr. This Actor is independent and not affiliated with the French administration.

The code examples in this repository are under the MIT licence. This repository contains usage examples only; the Actor itself runs on [Apify](https://apify.com/jet_mythology/france-healthcare-professionals).

---

More French public data Actors by the same author: [apify.com/jet_mythology](https://apify.com/jet_mythology)
