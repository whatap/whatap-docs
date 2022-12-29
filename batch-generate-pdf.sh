#!/bin/bash
npx docusaurus-prince-pdf -u http://localhost:4000/docs/apm/application-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-apm-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/server/server-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-server-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/db/db-monitoring-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-db-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/kubernetes/kubernetes-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-kubernetes-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/log/log-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-log-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/url/url-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-url-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/manage --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-manage.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/reference --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-reference.pdf --include-index
# npx docusaurus-prince-pdf -u http://localhost:4000/docs/integration/integ-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/integration-monitoring.pdf