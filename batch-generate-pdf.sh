#!/bin/bash
npx docusaurus-prince-pdf -u http://localhost:4000/java/introduction --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-apm-java-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/php/introduction --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-apm-php-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/nodejs/introduction --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-apm-nodejs-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/python/introduction --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-apm-python-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/dotnet/introduction --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-apm-dotnet-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/golang/introduction --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-apm-golang-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/server/introduction --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-server-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/postgresql/monitoring-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-db-postgresql-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/oracle/monitoring-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-db-oracle-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/mysql/monitoring-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-db-mysql-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/mssql/monitoring-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-db-mssql-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/tibero/monitoring-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-db-tibero-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/cubrid/monitoring-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-db-cubrid-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/altibase/monitoring-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-db-altibase-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/redis/monitoring-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-db-redis-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/mongodb/monitoring-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-db-mongodb-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/kubernetes/introduction --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-kubernetes-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/log/introduction --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-log-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/url/url-intro --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-url-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/manage --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-manage.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/reference --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-reference.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/extensions --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-extensions.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/amazon-cloudwatch/install-agent --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-amazon-cloudwatch.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/amazon-ecs/introduction --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-amazon-ecs.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/azure/install-agent --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-azure.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/ncloud/install-agent --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-ncloud.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/oracle-cloud/install-agent --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-oracle-cloud.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/aws-log/introduction --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-aws-log-monitoring.pdf --include-index
npx docusaurus-prince-pdf -u http://localhost:4000/browser --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-browser-monitoring.pdf --include-index

# npx docusaurus-prince-pdf -u http://localhost:4000/best-practice-guides/using-browser-monitoring --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-best-practice-guides-using-browser-monitoring.pdf --include-index

# npx docusaurus-prince-pdf -u http://localhost:4000/best-practice-guides/about-apm-dashboard --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-best-practice-guides-about-apm-dashboard.pdf --include-index

# npx docusaurus-prince-pdf -u http://localhost:4000/best-practice-guides/about-server-dashboard --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-best-practice-guides-about-server-dashboard.pdf --include-index

# npx docusaurus-prince-pdf -u http://localhost:4000/best-practice-guides/about-apm-hitmap-class --prince-args="--page-size='a4' --page-margin='10mm'" -o ./pdf/whatap-best-practice-guides-about-apm-hitmap-class.pdf --include-index
