#!/bin/bash
PATH_NAME=$(pwd)
echo $PATH_NAME

npx docusaurus-prince-pdf -u https://docs.whatap.io/en/java/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-java-monitoring-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/php/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-php-monitoring-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/nodejs/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-nodejs-monitoring-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/python/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-python-monitoring-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/dotnet/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-dotnet-monitoring-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/golang/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-go-monitoring-en.pdf --dest ./pdf --include-index

npx docusaurus-prince-pdf -u https://docs.whatap.io/en/browser --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-browser-monitoring-en.pdf --dest ./pdf --include-index

npx docusaurus-prince-pdf -u https://docs.whatap.io/en/kubernetes/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-kubernetes-monitoring-en.pdf --dest ./pdf --include-index

npx docusaurus-prince-pdf -u https://docs.whatap.io/en/server/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-server-monitoring-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/postgresql/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-postgresql-monitoring-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/oracle/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-oracle-monitoring-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/mysql/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-mysql-monitoring-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/mssql/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-mssql-monitoring-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/tibero/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-tibero-monitoring-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cubrid/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-cubrid-monitoring-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/altibase/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-altibase-monitoring-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/redis/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-redis-monitoring-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/mongodb/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-mongodb-monitoring-en.pdf --dest ./pdf --include-index

npx docusaurus-prince-pdf -u https://docs.whatap.io/en/log/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-log-monitoring-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/url/url-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-url-monitoring-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/manage --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-manage-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/reference --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-reference-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/extensions --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-extensions-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/amazon-cloudwatch/install-agent --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-amazon-cloudwatch-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/amazon-ecs/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-amazon-ecs-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/azure/install-agent --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-azure-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/ncloud/install-agent --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-ncloud-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/oracle-cloud/install-agent --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-oracle-cloud-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/aws-log/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-aws-log-monitoring-en.pdf --dest ./pdf --include-index

npx docusaurus-prince-pdf -u https://docs.whatap.io/en/npm/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-network-performance-monitoring-en.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/en/openapi-old --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-open-api-en.pdf --dest ./pdf --include-index

npx docusaurus-prince-pdf -u https://docs.whatap.io/en/best-practice-guides/about-apm-dbc --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-best-practice-guides-about-apm-dbc-en.pdf --dest ./pdf --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/en/best-practice-guides/using-browser-monitoring --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-best-practice-guides-using-browser-monitoring-en.pdf --dest ./pdf --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/en/best-practice-guides/about-apm-dashboard --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-best-practice-guides-about-apm-dashboard-en.pdf --dest ./pdf --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/en/best-practice-guides/about-server-dashboard --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-best-practice-guides-about-server-dashboard-en.pdf --dest ./pdf --include-index --selector 'none'

npx docusaurus-prince-pdf -u https://docs.whatap.io/en/best-practice-guides/about-apm-hitmap-class --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-best-practice-guides-about-apm-hitmap-class-en.pdf --dest ./pdf --include-index --selector 'none'
