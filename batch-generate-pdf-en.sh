#!/bin/bash
PATH_NAME=$(pwd)
echo $PATH_NAME

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-java --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-java-monitoring-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-java.txt -o ./pdf/whatap-apm-java-monitoring-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-apm-java-monitoring-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-php --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-php-monitoring-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-php.txt -o ./pdf/whatap-apm-php-monitoring-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-apm-php-monitoring-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-nodejs --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-nodejs-monitoring-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-nodejs.txt -o ./pdf/whatap-apm-nodejs-monitoring-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-apm-nodejs-monitoring-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-python --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-python-monitoring-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-python.txt -o ./pdf/whatap-apm-python-monitoring-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-apm-python-monitoring-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-dotnet --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-dotnet-monitoring-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-dotnet.txt -o ./pdf/whatap-apm-dotnet-monitoring-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-apm-dotnet-monitoring-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-go --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-apm-go-monitoring-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-go.txt -o ./pdf/whatap-apm-go-monitoring-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-apm-go-monitoring-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-server --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-server-monitoring-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-server.txt -o ./pdf/whatap-server-monitoring-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-server-monitoring-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-k8s --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-kubernetes-monitoring-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-k8s.txt -o ./pdf/whatap-kubernetes-monitoring-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-kubernetes-monitoring-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-postgresql --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-postgresql-monitoring-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-postgresql.txt -o ./pdf/whatap-db-postgresql-monitoring-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-db-postgresql-monitoring-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-oracle --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-oracle-monitoring-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-oracle.txt -o ./pdf/whatap-db-oracle-monitoring-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-db-oracle-monitoring-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-mysql --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-mysql-monitoring-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-mysql.txt -o ./pdf/whatap-db-mysql-monitoring-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-db-mysql-monitoring-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-mssql --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-mssql-monitoring-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-mssql.txt -o ./pdf/whatap-db-mssql-monitoring-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-db-mssql-monitoring-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-tibero --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-tibero-monitoring-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-tibero.txt -o ./pdf/whatap-db-tibero-monitoring-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-db-tibero-monitoring-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-cubrid --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-cubrid-monitoring-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-cubrid.txt -o ./pdf/whatap-db-cubrid-monitoring-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-db-cubrid-monitoring-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-altibase --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-altibase-monitoring-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-altibase.txt -o ./pdf/whatap-db-altibase-monitoring-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-db-altibase-monitoring-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-redis --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-redis-monitoring-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-redis.txt -o ./pdf/whatap-db-redis-monitoring-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-db-redis-monitoring-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-mongodb --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-db-mongodb-monitoring-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-mongodb.txt -o ./pdf/whatap-db-mongodb-monitoring-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-db-mongodb-monitoring-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-log --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-log-monitoring-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-log.txt -o ./pdf/whatap-log-monitoring-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-log-monitoring-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-url --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-url-monitoring-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-url.txt -o ./pdf/whatap-url-monitoring-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-url-monitoring-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-manage --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-manage-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-manage.txt -o ./pdf/whatap-manage-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-manage-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-reference --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-reference-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-reference.txt -o ./pdf/whatap-reference-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-reference-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-extensions --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-extensions-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-extensions.txt -o ./pdf/whatap-extensions-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-extensions-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-awscloudwatch --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-amazon-cloudwatch-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-awscloudwatch.txt -o ./pdf/whatap-amazon-cloudwatch-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-amazon-cloudwatch-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-awsecs --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-amazon-ecs-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-awsecs.txt -o ./pdf/whatap-amazon-ecs-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-amazon-ecs-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-azure --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-azure-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-azure.txt -o ./pdf/whatap-azure-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-azure-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-ncloud --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-ncloud-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-ncloud.txt -o ./pdf/whatap-ncloud-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-ncloud-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-oci --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-oracle-cloud-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-oci.txt -o ./pdf/whatap-oracle-cloud-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-oracle-cloud-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-awslog --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-aws-log-monitoring-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-awslog.txt -o ./pdf/whatap-aws-log-monitoring-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-aws-log-monitoring-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-browser --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-browser-monitoring-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-browser.txt -o ./pdf/whatap-browser-monitoring-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-browser-monitoring-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-npm --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-network-performance-monitoring-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-npm.txt -o ./pdf/whatap-network-performance-monitoring-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-network-performance-monitoring-en.pdf

npx docusaurus-prince-pdf -u https://docs.whatap.io/en/cover-openapi --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-open-api-en.pdf --dest ./pdf --include-index

prince --no-warn-css --style=/opt/homebrew/lib/node_modules/docusaurus-prince-pdf/print.css  --input-list=./pdf/docs.whatap.io-cover-openapi.txt -o ./pdf/whatap-open-api-en.pdf --javascript --page-size='a4' --page-margin='10mm' --style='/Users/imgijeong/github/docusaurus-docs/print.css'

pdfcpu annot remove -pages 1 ./pdf/whatap-open-api-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/best-practice-guides/about-apm-dbc --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-best-practice-guides-about-apm-dbc-en.pdf --dest ./pdf --include-index --selector 'none'

# pdfcpu annot remove -pages 1 ./pdf/whatap-best-practice-guides-about-apm-dbc-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/best-practice-guides/using-browser-monitoring --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-best-practice-guides-using-browser-monitoring-en.pdf --dest ./pdf --include-index --selector 'none'

# pdfcpu annot remove -pages 1 ./pdf/whatap-best-practice-guides-using-browser-monitoring-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/best-practice-guides/about-apm-dashboard --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-best-practice-guides-about-apm-dashboard-en.pdf --dest ./pdf --include-index --selector 'none'

# pdfcpu annot remove -pages 1 ./pdf/whatap-best-practice-guides-about-apm-dashboard-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/best-practice-guides/about-server-dashboard --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-best-practice-guides-about-server-dashboard-en.pdf --dest ./pdf --include-index --selector 'none'

# pdfcpu annot remove -pages 1 ./pdf/whatap-best-practice-guides-about-server-dashboard-en.pdf

# npx docusaurus-prince-pdf -u https://docs.whatap.io/en/best-practice-guides/about-apm-hitmap-class --prince-args="--javascript --page-size='a4' --page-margin='10mm' --style='$PATH_NAME/print.css'" -o ./pdf/whatap-best-practice-guides-about-apm-hitmap-class-en.pdf --dest ./pdf --include-index --selector 'none'

# pdfcpu annot remove -pages 1 ./pdf/whatap-best-practice-guides-about-apm-hitmap-class-en.pdf
