#!/usr/bin/env bash
# Run France Doctors & Health Professionals Database (RPPS) on Apify and print the results as JSON.
# export APIFY_TOKEN=your_token && bash run.sh
set -euo pipefail
curl -sS -X POST "https://api.apify.com/v2/acts/jet_mythology~france-healthcare-professionals/run-sync-get-dataset-items?token=${APIFY_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"professions": ["Pharmacien"], "sectors": ["officine"], "departments": ["33"], "groupByProfessional": true}'
