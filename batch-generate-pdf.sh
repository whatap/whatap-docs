#!/bin/bash
PATH_NAME=$(pwd)
echo $PATH_NAME

# prince --no-warn-css --style=/Users/imgijeong/github-feature/whatap-docs/print.css --input-list=./pdf/docs.whatap.io-cover-redis.txt -o ./pdf/whatap-db-redis-monitoring-en.pdf --page-size='a4' --page-margin='10mm'

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-java --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-java-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-apm-java-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-php --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-php-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-apm-php-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-nodejs --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-nodejs-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-apm-nodejs-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-python --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-python-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-apm-python-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-dotnet --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-dotnet-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-apm-dotnet-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-go --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-go-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-apm-go-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-server --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-server-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-server-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-k8s --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-kubernetes-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-kubernetes-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-postgresql --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-postgresql-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-db-postgresql-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-oracle --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-oracle-v2-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-db-oracle-v2-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-oracle-pro --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-oracle-pro-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-db-oracle-pro-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-mysql --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-mysql-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-db-mysql-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-mssql --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-mssql-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-db-mssql-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-tibero --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-tibero-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-db-tibero-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-cubrid --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-cubrid-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-db-cubrid-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-altibase --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-altibase-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-db-altibase-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-redis --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-redis-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-db-redis-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-mongodb --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-mongodb-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-db-mongodb-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-log --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-log-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-log-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-url --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-url-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-url-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-manage --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-manage.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-manage.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-reference --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-reference.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-reference.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-extensions --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-extensions.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-extensions.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-awscloudwatch --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-amazon-cloudwatch.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-amazon-cloudwatch.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-awsecs --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-amazon-ecs.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-amazon-ecs.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-azure --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-azure.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-azure.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-ncloud --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-ncloud.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-ncloud.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-oci --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-oracle-cloud.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-oracle-cloud.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-awslog --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-aws-log-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-aws-log-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-browser --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-browser-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-browser-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-npm --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-network-performance-monitoring.pdf --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-network-performance-monitoring.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-nms --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-network-management-system-monitoring.pdf
 --dest ./pdf --include-index

pdfcpu annot remove -pages 1 ./pdf/whatap-network-management-system-monitoring.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/cover-openapi --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-open-api.pdf --dest ./pdf --include-index

# pdfcpu annot remove -pages 1 ./pdf/whatap-open-api.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/best-practice-guides/about-apm-dbc --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-best-practice-guides-about-apm-dbc.pdf --dest ./pdf --include-index --selector 'none'

# pdfcpu annot remove -pages 1 ./pdf/whatap-best-practice-guides-about-apm-dbc.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/best-practice-guides/using-browser-monitoring --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-best-practice-guides-using-browser-monitoring.pdf --dest ./pdf --include-index --selector 'none'

# pdfcpu annot remove -pages 1 ./pdf/whatap-best-practice-guides-using-browser-monitoring.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/best-practice-guides/about-apm-dashboard --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-best-practice-guides-about-apm-dashboard.pdf --dest ./pdf --include-index --selector 'none'

# pdfcpu annot remove -pages 1 ./pdf/whatap-best-practice-guides-about-apm-dashboard.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/best-practice-guides/about-server-dashboard --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-best-practice-guides-about-server-dashboard.pdf --dest ./pdf --include-index --selector 'none'

# pdfcpu annot remove -pages 1 ./pdf/whatap-best-practice-guides-about-server-dashboard.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/best-practice-guides/about-apm-hitmap-class --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-best-practice-guides-about-apm-hitmap-class.pdf --dest ./pdf --include-index --selector 'none'

# pdfcpu annot remove -pages 1 ./pdf/whatap-best-practice-guides-about-apm-hitmap-class.pdf
