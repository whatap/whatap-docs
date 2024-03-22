#!/bin/bash
PATH_NAME=$(pwd)
echo $PATH_NAME

npx docusaurus-prince-pdf -u https://docs.whatap.io/java/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-java-monitoring.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/php/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-php-monitoring.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/nodejs/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-nodejs-monitoring.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/python/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-python-monitoring.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/dotnet/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-dotnet-monitoring.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/golang/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-go-monitoring.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/server/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-server-monitoring.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/postgresql/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-postgresql-monitoring.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/oracle/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-oracle-monitoring.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/mysql/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-mysql-monitoring.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/mssql/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-mssql-monitoring.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/tibero/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-tibero-monitoring.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/cubrid/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-cubrid-monitoring.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/altibase/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-altibase-monitoring.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/redis/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-redis-monitoring.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/mongodb/monitoring-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-mongodb-monitoring.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/kubernetes/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-kubernetes-monitoring.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/log/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-log-monitoring.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/url/url-intro --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-url-monitoring.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/manage --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-manage.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/reference --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-reference.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/extensions --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-extensions.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/amazon-cloudwatch/install-agent --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-amazon-cloudwatch.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/amazon-ecs/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-amazon-ecs.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/azure/install-agent --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-azure.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/ncloud/install-agent --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-ncloud.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/oracle-cloud/install-agent --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-oracle-cloud.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/aws-log/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-aws-log-monitoring.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/browser --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-browser-monitoring.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/npm/introduction --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-network-performance-monitoring.pdf --dest ./pdf --include-index
npx docusaurus-prince-pdf -u https://docs.whatap.io/openapi --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-open-api.pdf --dest ./pdf --include-index

# npx docusaurus-prince-pdf -u https://docs.whatap.io/best-practice-guides/about-apm-dbc --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-best-practice-guides-about-apm-dbc.pdf --dest ./pdf --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/best-practice-guides/using-browser-monitoring --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-best-practice-guides-using-browser-monitoring.pdf --dest ./pdf --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/best-practice-guides/about-apm-dashboard --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-best-practice-guides-about-apm-dashboard.pdf --dest ./pdf --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/best-practice-guides/about-server-dashboard --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-best-practice-guides-about-server-dashboard.pdf --dest ./pdf --include-index --selector 'none'

# npx docusaurus-prince-pdf -u https://docs.whatap.io/best-practice-guides/about-apm-hitmap-class --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-best-practice-guides-about-apm-hitmap-class.pdf --dest ./pdf --include-index --selector 'none'
