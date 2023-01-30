#!/bin/bash
npx docusaurus-prince-pdf -u http://localhost:4000/docs/java/introduction --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-apm-java-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/php/introduction --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-apm-php-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/nodejs/introduction --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-apm-nodejs-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/python/introduction --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-apm-python-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/dotnet/introduction --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-apm-dotnet-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/golang/introduction --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-apm-golang-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/server/introduction --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-server-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/postgresql/monitoring-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-db-postgresql-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/oracle/monitoring-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-db-oracle-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/mysql/monitoring-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-db-mysql-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/mssql/monitoring-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-db-mssql-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/tibero/monitoring-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-db-tibero-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/cubrid/monitoring-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-db-cubrid-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/altibase/monitoring-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-db-altibase-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/redis/monitoring-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-db-redis-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/mongodb/monitoring-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-db-mongodb-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/kubernetes/introduction --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-kubernetes-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/log/introduction --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-log-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/url/url-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-url-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/manage --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-manage.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/reference --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-reference.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/docs/extensions --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-extensions.pdf --include-index

# npx docusaurus-prince-pdf -u http://localhost:4000/docs/best-practice-guides/about-apm-dashboard --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-best-practice-guides-about-apm-dashboard.pdf --include-index
